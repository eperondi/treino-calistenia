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
let currentLevel = 0;
let currentWeek = 0;
let db = null;
let stopWatch = null;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  renderLevelsNav();
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

function weeks() {
  return treinoData.levels[currentLevel].weeks;
}

function renderLevelsNav() {
  const nav = document.getElementById('levels-nav');
  if (!nav) return;
  nav.innerHTML = '';
  treinoData.levels.forEach((level, index) => {
    const btn = document.createElement('button');
    btn.className = 'level-btn' + (index === currentLevel ? ' active' : '');
    btn.textContent = level.title;
    btn.addEventListener('click', () => {
      currentLevel = index;
      currentWeek = 0;
      if (typeof stopTimer === 'function') stopTimer();
      renderLevelsNav();
      renderWeeksNav();
      renderCurrentWeek();
      updateOverallProgress();
    });
    nav.appendChild(btn);
  });
}

function renderWeeksNav() {
  const nav = document.getElementById('weeks-nav');
  nav.innerHTML = '';

  weeks().forEach((week, index) => {
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
  const week = weeks()[currentWeek];
  
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
      const restSeconds = firstSeconds(ex.rest);
      const workSeconds = /segundo/i.test(ex.reps || '') ? firstSeconds(ex.reps) : 0;

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
          <div class="sets-row" style="display:flex;align-items:center;justify-content:space-between;gap:12px">
            <div class="sets-container">
              ${Array.from({length: ex.sets}, (_, i) => `
                <button class="set-btn ${i < completedSets ? 'done' : ''}" 
                        onclick="toggleSet('${exId}', ${i}, ${ex.sets})">
                  ${i + 1}
                </button>
              `).join('')}
            </div>
            <div class="timers" style="display:flex;flex-direction:row;align-items:center;gap:6px;margin-left:auto">
              ${workSeconds ? timerButton(exId + ':work', workSeconds, 'Tempo', 'work') : ''}
              ${restSeconds ? timerButton(exId + ':rest', restSeconds, 'Descanso', '') : ''}
            </div>
          </div>
          ${ex.note ? `<div class="exercise-note">${ex.note}</div>` : ''}
        </div>
      `;
    });

    html += '</section>';
  });

  main.innerHTML = html || '<div class="welcome"><p>Nenhum treino nesta semana.</p></div>';
  updateWeekButtons();
  paintTimer();
}

function timerButton(key, seconds, name, extraClass) {
  const stroke = extraClass === 'work' ? '#93c5fd' : '#22c55e';
  return `<button type="button" class="timer-btn ${extraClass}" data-key="${key}" data-name="${name}" data-seconds="${seconds}" onclick="onTimerClick('${key}', ${seconds})" style="display:flex;align-items:center;gap:8px;border:1px solid #334155;background:transparent;color:#f1f5f9;border-radius:999px;padding:4px 12px 4px 4px;cursor:pointer">
    <svg class="timer-svg" viewBox="0 0 36 36" width="42" height="42" aria-hidden="true" style="transform:rotate(-90deg);flex:none">
      <circle class="timer-track" cx="18" cy="18" r="14" fill="none" stroke="#334155" stroke-width="3"></circle>
      <circle class="timer-ring" cx="18" cy="18" r="14" fill="none" stroke="${stroke}" stroke-width="3" stroke-linecap="round" stroke-dasharray="87.96"></circle>
    </svg>
    <span class="timer-copy" style="display:flex;flex-direction:column;line-height:1.05;text-align:left">
      <span class="timer-name" style="font-size:11px;color:#94a3b8">${name}</span>
      <span class="timer-time" style="font-size:15px;font-weight:700">${formatTime(seconds)}</span>
    </span>
  </button>`;
}

let activeTimer = null;
const TIMER_RING = 2 * Math.PI * 14;

function firstSeconds(text) {
  const match = String(text || '').match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}

function formatTime(total) {
  const seconds = Math.max(0, Number(total) || 0);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m + ':' + String(s).padStart(2, '0');
}

let audioCtx = null;

function audioContext() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playTone(ctx, frequency, start, duration) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.22, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + duration);
}

function beep() {
  try {
    const ctx = audioContext();
    const now = ctx.currentTime;
    playTone(ctx, 880, now, 0.18);
    playTone(ctx, 1175, now + 0.2, 0.28);
  } catch (e) {}
}

function stopTimer() {
  if (activeTimer && activeTimer.interval) clearInterval(activeTimer.interval);
  activeTimer = null;
  paintTimer();
}

function onTimerClick(key, seconds) {
  try { audioContext(); } catch (e) {}
  if (activeTimer && activeTimer.key === key && activeTimer.interval) {
    stopTimer();
    return;
  }
  if (activeTimer && activeTimer.interval) clearInterval(activeTimer.interval);
  activeTimer = { key, remaining: seconds, total: seconds, interval: null };
  activeTimer.interval = setInterval(() => {
    activeTimer.remaining -= 1;
    if (activeTimer.remaining <= 0) {
      clearInterval(activeTimer.interval);
      activeTimer.interval = null;
      activeTimer.remaining = 0;
      beep();
    }
    paintTimer();
  }, 1000);
  paintTimer();
}

function paintTimer() {
  document.querySelectorAll('.timer-btn').forEach((btn) => {
    const key = btn.dataset.key;
    const time = btn.querySelector('.timer-time');
    const ring = btn.querySelector('.timer-ring');
    const total = Number(btn.dataset.seconds) || 1;
    const mine = activeTimer && activeTimer.key === key;
    const remaining = mine ? activeTimer.remaining : total;
    const used = mine ? activeTimer.total : total;
    const ratio = Math.max(0, Math.min(1, remaining / used));
    if (ring) ring.style.strokeDashoffset = String(TIMER_RING * (1 - ratio));
    if (!mine) {
      btn.classList.remove('running', 'finished');
      if (time) time.textContent = formatTime(total);
      return;
    }
    if (remaining <= 0) {
      btn.classList.remove('running');
      btn.classList.add('finished');
      if (time) time.textContent = 'Fim';
      return;
    }
    btn.classList.add('running');
    btn.classList.remove('finished');
    if (time) time.textContent = formatTime(remaining);
  });
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
  const week = weeks()[currentWeek];
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
  const week = weeks()[weekIndex];
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
  weeks().forEach(week => {
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
if (typeof treinoData !== 'undefined' && weeks().length > 0) {
  setTimeout(() => renderCurrentWeek(), 100);
}