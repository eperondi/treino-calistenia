// app.js - Lógica principal do app de treino
const firebaseConfig = {
  apiKey: "AIzaSyD8vpjiC1Xfh07Ks9Vjbf-juLQTOdfyzKM",
  authDomain: "calistenia-emerson-joselene.firebaseapp.com",
  projectId: "calistenia-emerson-joselene",
  storageBucket: "calistenia-emerson-joselene.firebasestorage.app",
  messagingSenderId: "18091356237",
  appId: "1:18091356237:web:e5a9b0a6b44bc76ab2ac04",
  measurementId: "G-DR2RPKYV9L"
};

let currentUser = 'emerson';
let currentWeek = 0;
let db = null;
let stopWatch = null;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  renderWeeksNav();
  setupEventListeners();
  updateOverallProgress();
  initSync();
});

function setupEventListeners() {
  // Troca de usuário
  document.querySelectorAll('.user-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.user-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentUser = e.target.dataset.user;
      loadProgress();
      renderCurrentWeek();
      updateOverallProgress();
      watchRemote();
    });
  });

  // Reset de progresso
  document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm(`Zerar todo o progresso de ${currentUser === 'emerson' ? 'Emerson' : 'Joselene'}?`)) {
      localStorage.removeItem(`progress_${currentUser}`);
      localStorage.removeItem(`progress_updated_${currentUser}`);
      saveProgress({});
      renderCurrentWeek();
      updateOverallProgress();
    }
  });

  // Fechar modal
  document.getElementById('modal-close').addEventListener('click', closeVideoModal);
  document.getElementById('video-modal').addEventListener('click', (e) => {
    if (e.target.id === 'video-modal') closeVideoModal();
  });
}

function renderWeeksNav() {
  const nav = document.getElementById('weeks-nav');
  nav.innerHTML = '';

  treinoData.weeks.forEach((week, index) => {
    const btn = document.createElement('button');
    btn.className = 'week-btn' + (index === currentWeek ? ' active' : '');
    btn.innerHTML = `
      ${week.title}
      <span class="week-progress">${getWeekProgress(index)}%</span>
    `;
    btn.addEventListener('click', () => {
      currentWeek = index;
      document.querySelectorAll('.week-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCurrentWeek();
    });
    nav.appendChild(btn);
  });
}

function renderCurrentWeek() {
  const main = document.getElementById('main-content');
  const week = treinoData.weeks[currentWeek];
  
  if (!week) return;

  let html = '';
  week.days.forEach(day => {
    const dayProgress = getDayProgress(day);
    html += `
      <section class="day-section">
        <div class="day-header">
          <h2 class="day-title">${day.title}</h2>
          <button class="day-complete-btn ${dayProgress === 100 ? 'done' : ''}" 
                  onclick="toggleDay('${day.id}')">
            ${dayProgress === 100 ? '✓ Completo' : 'Marcar dia'}
          </button>
        </div>
    `;

    day.exercises.forEach((ex, exIndex) => {
      const exId = `${day.id}_ex${exIndex}`;
      const completedSets = getCompletedSets(exId);
      const isCompleted = completedSets === ex.sets;

      html += `
        <div class="exercise-card ${isCompleted ? 'completed' : ''}" data-ex-id="${exId}">
          <div class="exercise-header">
            <div class="exercise-name">${ex.name}</div>
            ${ex.video ? `<button class="video-btn" onclick="openVideo('${ex.video}')">▶ Vídeo</button>` : ''}
          </div>
          <div class="exercise-meta">
            <span>${ex.sets} séries</span>
            <span>${ex.reps}</span>
            <span>Descanso: ${ex.rest}</span>
          </div>
          <div class="sets-container">
            ${Array.from({length: ex.sets}, (_, i) => `
              <button class="set-btn ${i < completedSets ? 'done' : ''}" 
                      onclick="toggleSet('${exId}', ${i}, ${ex.sets})">
                ${i + 1}
              </button>
            `).join('')}
          </div>
          ${ex.note ? `<div class="exercise-note">${ex.note}</div>` : ''}
        </div>
      `;
    });

    html += '</section>';
  });

  main.innerHTML = html || '<div class="welcome"><p>Nenhum treino nesta semana.</p></div>';
  updateWeekButtons();
}

function toggleSet(exId, setIndex, totalSets) {
  let progress = getProgress();
  if (!progress[exId]) progress[exId] = 0;

  // Toggle: se já está marcado, desmarca; senão marca até aquele set
  if (progress[exId] > setIndex) {
    progress[exId] = setIndex;
  } else {
    progress[exId] = setIndex + 1;
  }

  saveProgress(progress);
  renderCurrentWeek();
  updateOverallProgress();
}

function toggleDay(dayId) {
  const week = treinoData.weeks[currentWeek];
  const day = week.days.find(d => d.id === dayId);
  if (!day) return;

  let progress = getProgress();
  const allDone = day.exercises.every((ex, i) => {
    const exId = `${dayId}_ex${i}`;
    return (progress[exId] || 0) >= ex.sets;
  });

  day.exercises.forEach((ex, i) => {
    const exId = `${dayId}_ex${i}`;
    progress[exId] = allDone ? 0 : ex.sets;
  });

  saveProgress(progress);
  renderCurrentWeek();
  updateOverallProgress();
}

function getProgress() {
  const stored = localStorage.getItem(`progress_${currentUser}`);
  return stored ? JSON.parse(stored) : {};
}

function syncDocId() {
  return currentUser === 'esposa' ? 'joselene' : currentUser;
}

function hasMarks(progress) {
  return Object.values(progress || {}).some((n) => Number(n) > 0);
}

function setSyncStatus(text) {
  const el = document.getElementById('sync-status');
  if (el) el.textContent = text;
}

function initSync() {
  if (typeof firebase === 'undefined' || !firebaseConfig.apiKey || firebaseConfig.apiKey === 'COLE_AQUI') {
    setSyncStatus('Sem sincronização');
    return;
  }
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  watchRemote();
}

function watchRemote() {
  if (!db) return;
  if (stopWatch) stopWatch();
  const userAtWatch = currentUser;
  const docId = syncDocId();
  stopWatch = db.collection('progress').doc(docId).onSnapshot((snap) => {
    if (currentUser !== userAtWatch) return;
    const local = getProgress();
    const localAt = Number(localStorage.getItem(`progress_updated_${currentUser}`) || 0);

    if (!snap.exists) {
      if (hasMarks(local)) pushLocal();
      setSyncStatus('Sincronizado');
      return;
    }

    const data = snap.data() || {};
    const remoteSets = data.sets || {};
    const remoteAt = Number(data.updatedAt || 0);

    if (!localAt && hasMarks(local) && !hasMarks(remoteSets)) {
      pushLocal();
      return;
    }

    if (remoteAt > localAt) {
      localStorage.setItem(`progress_${currentUser}`, JSON.stringify(remoteSets));
      localStorage.setItem(`progress_updated_${currentUser}`, String(remoteAt));
      renderCurrentWeek();
      updateOverallProgress();
    } else if (localAt > remoteAt) {
      pushLocal();
    }
    setSyncStatus('Sincronizado');
  }, () => setSyncStatus('Sem conexão'));
}

function pushLocal() {
  if (!db) return;
  let updatedAt = Number(localStorage.getItem(`progress_updated_${currentUser}`) || 0);
  if (!updatedAt) {
    updatedAt = Date.now();
    localStorage.setItem(`progress_updated_${currentUser}`, String(updatedAt));
  }
  db.collection('progress').doc(syncDocId()).set({
    sets: getProgress(),
    updatedAt
  }).catch(() => setSyncStatus('Sem conexão'));
}

function saveProgress(progress) {
  const updatedAt = Date.now();
  localStorage.setItem(`progress_${currentUser}`, JSON.stringify(progress));
  localStorage.setItem(`progress_updated_${currentUser}`, String(updatedAt));
  if (!db) return;
  db.collection('progress').doc(syncDocId()).set({
    sets: progress,
    updatedAt
  }).then(() => setSyncStatus('Sincronizado'))
    .catch(() => setSyncStatus('Salvo só neste aparelho'));
}

function loadProgress() {
  // Apenas carrega (já é usado via getProgress)
}

function getCompletedSets(exId) {
  const progress = getProgress();
  return progress[exId] || 0;
}

function getDayProgress(day) {
  const progress = getProgress();
  let total = 0;
  let done = 0;
  day.exercises.forEach((ex, i) => {
    total += ex.sets;
    done += Math.min(progress[`${day.id}_ex${i}`] || 0, ex.sets);
  });
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

function getWeekProgress(weekIndex) {
  const week = treinoData.weeks[weekIndex];
  if (!week) return 0;
  let total = 0;
  let done = 0;
  week.days.forEach(day => {
    day.exercises.forEach((ex, i) => {
      total += ex.sets;
      done += Math.min(getCompletedSets(`${day.id}_ex${i}`), ex.sets);
    });
  });
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

function updateOverallProgress() {
  let total = 0;
  let done = 0;
  treinoData.weeks.forEach(week => {
    week.days.forEach(day => {
      day.exercises.forEach((ex, i) => {
        total += ex.sets;
        done += Math.min(getCompletedSets(`${day.id}_ex${i}`), ex.sets);
      });
    });
  });
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  document.getElementById('overall-progress').style.width = percent + '%';
  document.getElementById('progress-text').textContent = percent + '% concluído';
}

function updateWeekButtons() {
  document.querySelectorAll('.week-btn').forEach((btn, index) => {
    const span = btn.querySelector('.week-progress');
    if (span) span.textContent = getWeekProgress(index) + '%';
  });
}

function openVideo(url) {
  const modal = document.getElementById('video-modal');
  const container = document.getElementById('video-container');

  let videoId = '';
  if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('v=')[1].split('&')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  } else if (url.includes('youtube.com/shorts/')) {
    videoId = url.split('shorts/')[1].split('?')[0];
  }

  container.innerHTML = '';

  if (!videoId) {
    container.innerHTML = '<p style="padding:20px">Link de vídeo inválido</p>';
    modal.classList.remove('hidden');
    return;
  }

  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
  iframe.title = 'Vídeo do exercício';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  iframe.allowFullscreen = true;
  container.appendChild(iframe);

  let fallback = document.getElementById('video-fallback');
  if (!fallback) {
    fallback = document.createElement('a');
    fallback.id = 'video-fallback';
    fallback.target = '_blank';
    fallback.rel = 'noopener';
    fallback.style.cssText = 'display:block;text-align:center;padding:12px;color:#93c5fd;background:#0f172a;';
    container.parentElement.appendChild(fallback);
  }
  fallback.href = url;
  fallback.textContent = 'Abrir no YouTube';

  modal.classList.remove('hidden');
}

function closeVideoModal() {
  document.getElementById('video-modal').classList.add('hidden');
  document.getElementById('video-container').innerHTML = '';
}

// Inicia na primeira semana se houver dados
if (typeof treinoData !== 'undefined' && treinoData.weeks.length > 0) {
  setTimeout(() => renderCurrentWeek(), 100);
}