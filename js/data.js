// data.js - Dados reais do plano de treino (extraídos da planilha)
const treinoData = {
  weeks: [
    {
      id: 1,
      title: "Semana 1",
      days: [
        {
          id: "s1d1",
          title: "Dia 1: Flexões e Core",
          exercises: [
            {
              name: "Flexões inclinadas (~70 cm)",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=NEdo_I3OuVk",
              note: "Vídeo curto e claro"
            },
            {
              name: "Australian Pull-ups (pernas dobradas)",
              sets: 3,
              reps: "8-10",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=-QFX2gDASQk",
              note: "Pernas dobradas = mais fácil"
            },
            {
              name: "Agachamentos com peso corporal",
              sets: 3,
              reps: "15",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=aclHkVaku9U",
              note: "Bodyweight Squats"
            },
            {
              name: "Elevação de joelhos nas barras paralelas",
              sets: 3,
              reps: "10-12",
              rest: "30-60 s",
              video: "https://www.youtube.com/watch?v=WliuvUpe4LI",
              note: "Knee Raises on Dip Bars"
            },
            {
              name: "Abdominais (Crunches)",
              sets: 3,
              reps: "15 por lado",
              rest: "30-60 s",
              video: "https://www.youtube.com/watch?v=Xyd_fa5zoEU",
              note: "Crunches clássicos"
            }
          ]
        },
        {
          id: "s1d2",
          title: "Dia 2: Puxada e Parte Inferior",
          exercises: [
            {
              name: "Barra assistida com apoio das pernas",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=s7DNvinPNfI",
              note: "Assisted Pull-ups Leg Support"
            },
            {
              name: "Dips na cadeira",
              sets: 3,
              reps: "10",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=AWz_7B1cch0",
              note: "Chair Dips - cuidado com ombros"
            },
            {
              name: "Tuck-ups",
              sets: 3,
              reps: "12-15",
              rest: "30-60 s",
              video: "https://www.youtube.com/watch?v=1fbU_MkV7NE",
              note: "Tuck Ups core"
            },
            {
              name: "Reverse Tabletop",
              sets: 3,
              reps: "8-10",
              rest: "60-90 s",
              video: "https://www.youtube.com/watch?v=8duIaGV6cpc",
              note: "Reverse Tabletop / Table Top Pose"
            }
          ]
        },
        {
          id: "s1d3",
          title: "Dia 3: Condicionamento Full Body",
          exercises: [
            {
              name: "Australian Chin-ups (joelhos dobrados)",
              sets: 3,
              reps: "8",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=-QFX2gDASQk",
              note: "Similar ao Australian, pegada supinada"
            },
            {
              name: "Scapular Pull-ups",
              sets: 3,
              reps: "10",
              rest: "60-90 s",
              video: "https://youtu.be/XIkPI-_80r4",
              note: "Apenas movimento das escápulas"
            },
            {
              name: "Flexões de joelhos",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/h5ClL5IYzog",
              note: "Knee Push-ups"
            },
            {
              name: "Plank Jump-Ins",
              sets: 3,
              reps: "12-15 por perna",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/jOAKsYZk3xg",
              note: "Procurar: Plank Jump Ins demonstration"
            },
            {
              name: "Agachamentos profundos",
              sets: 3,
              reps: "15",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=aclHkVaku9U",
              note: "Deep Squats"
            },
            {
              name: "Superman Holds",
              sets: 3,
              reps: "20 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/eKB5rv5c7FQ",
              note: "Superman Hold"
            }
          ]
        },
        {
          id: "s1d4",
          title: "Dia 4: Core e Estabilização",
          exercises: [
            {
              name: "Bar Hang (pendurar na barra)",
              sets: 3,
              reps: "20-30 segundos",
              rest: "60-90 s",
              video: "https://www.youtube.com/shorts/XPcT3capkyk",
              note: "Dead Hang / Active Hang"
            },
            {
              name: "Scapular Push-ups em High Plank",
              sets: 3,
              reps: "10",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/3TsOKiUDzw0",
              note: "Scapular Push-ups (versão plank)"
            },
            {
              name: "Crunches com palma sob os joelhos",
              sets: 3,
              reps: "15-20",
              rest: "30-60 s",
              video: "https://www.youtube.com/watch?v=zVi5_uU9wgY",
              note: "Variação de crunch"
            },
            {
              name: "Elevação de panturrilha",
              sets: 3,
              reps: "20",
              rest: "60 s",
              video: "https://www.youtube.com/watch?v=gwLzBJYoWlI",
              note: "Calf Raises"
            },
            {
              name: "Tuck Hollow Hold",
              sets: 3,
              reps: "20-30 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/dzgx6Kwab4E",
              note: "Tuck Hollow Body Hold"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Semana 2",
      days: [
        {
          id: "s2d1",
          title: "Dia 1: Membros Superiores e Core",
          exercises: [
            {
              name: "Hand Walkouts",
              sets: 3,
              reps: "8",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/kLtllH6zAnY",
              note: "Procurar: Hand Walkouts exercise"
            },
            {
              name: "Flexões inclinadas",
              sets: 3,
              reps: "12",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=NEdo_I3OuVk",
              note: ""
            },
            {
              name: "Australian Pull-ups (pernas esticadas)",
              sets: 3,
              reps: "8-10",
              rest: "90 s",
              video: "https://www.youtube.com/watch?v=-QFX2gDASQk",
              note: "Versão mais difícil"
            },
            {
              name: "Crunches laterais",
              sets: 3,
              reps: "15 por lado",
              rest: "30-60 s",
              video: "https://www.youtube.com/shorts/ZHGSf5Rpybc",
              note: "Side Crunches"
            },
            {
              name: "Inclinações laterais deitado",
              sets: 3,
              reps: "20 segundos",
              rest: "30-60 s",
              video: "https://youtu.be/X8re4UdVkY0",
              note: "Lying Side Bends"
            }
          ]
        },
        {
          id: "s2d2",
          title: "Dia 2: Puxada e Core",
          exercises: [
            {
              name: "Barra assistida (apoio das pernas)",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=s7DNvinPNfI",
              note: ""
            },
            {
              name: "Dips na cadeira",
              sets: 3,
              reps: "8-10",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=AWz_7B1cch0",
              note: ""
            },
            {
              name: "Elevação de joelhos nas barras paralelas",
              sets: 3,
              reps: "15",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=WliuvUpe4LI",
              note: ""
            },
            {
              name: "Agachamentos com peso corporal",
              sets: 3,
              reps: "15-20",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=aclHkVaku9U",
              note: ""
            },
            {
              name: "Reverse Plank",
              sets: 3,
              reps: "20-30 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/watch?v=8duIaGV6cpc",
              note: "Similar ao Reverse Tabletop"
            }
          ]
        },
        {
          id: "s2d3",
          title: "Dia 3: Força Full Body",
          exercises: [
            {
              name: "Australian Chin-ups",
              sets: 3,
              reps: "8",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=-QFX2gDASQk",
              note: ""
            },
            {
              name: "Scapular Pull-ups",
              sets: 3,
              reps: "10",
              rest: "90-120 s",
              video: "https://youtu.be/XIkPI-_80r4",
              note: ""
            },
            {
              name: "Elbow to Hand Plank",
              sets: 3,
              reps: "10",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/CdIniQVijZk",
              note: "Procurar: Elbow to Hand Plank"
            },
            {
              name: "Plank Jump-Ins",
              sets: 3,
              reps: "12-15 por perna",
              rest: "60-90 s",
              video: "https://www.youtube.com/watch?v=ESfOK9PU4yw",
              note: "Procurar: Plank Jump Ins"
            },
            {
              name: "Agachamentos laterais",
              sets: 3,
              reps: "12 por lado",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/vLZeph8iS-k",
              note: "Side-to-Side Squats"
            },
            {
              name: "Plank com elevação de braço",
              sets: 3,
              reps: "10 por braço",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/VNscRG3z0Wk",
              note: "Procurar: Plank with Arm Lift"
            }
          ]
        },
        {
          id: "s2d4",
          title: "Dia 4: Pegada e Estabilidade de Core",
          exercises: [
            {
              name: "Bar Hang",
              sets: 3,
              reps: "30 segundos",
              rest: "60-90 s",
              video: "https://www.youtube.com/shorts/XPcT3capkyk",
              note: ""
            },
            {
              name: "Scapular Push-ups em High Plank",
              sets: 3,
              reps: "10-12",
              rest: "60-90 s",
              video: "https://www.youtube.com/shorts/uTL7rYoPps0",
              note: ""
            },
            {
              name: "Tuck Hollow Hold",
              sets: 3,
              reps: "30 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/dzgx6Kwab4E",
              note: ""
            },
            {
              name: "Elevação de panturrilha",
              sets: 3,
              reps: "25-30 por perna",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/qYVo2f2ZKRU",
              note: ""
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Semana 3",
      days: [
        {
          id: "s3d1",
          title: "Dia 1: Push e Core",
          exercises: [
            {
              name: "Flexões negativas + Flexões de joelhos",
              sets: 3,
              reps: "6-8 de cada",
              rest: "90 s",
              video: "https://www.youtube.com/shorts/h5ClL5IYzog",
              note: "Negative Push-ups (desça lento)"
            },
            {
              name: "Australian Pull-ups",
              sets: 3,
              reps: "8-10",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/qfsEK96Px-E",
              note: ""
            },
            {
              name: "Agachamentos profundos",
              sets: 3,
              reps: "20",
              rest: "60-90 s",
              video: "https://www.youtube.com/shorts/ezJYqB4Y5N8",
              note: ""
            },
            {
              name: "Tuck-ups",
              sets: 3,
              reps: "12-15",
              rest: "60 s",
              video: "https://www.youtube.com/watch?v=obVuc0wZoss",
              note: ""
            },
            {
              name: "Crunches laterais",
              sets: 3,
              reps: "20",
              rest: "30-60 s",
              video: "https://www.youtube.com/shorts/ZHGSf5Rpybc",
              note: ""
            }
          ]
        },
        {
          id: "s3d2",
          title: "Dia 2: Puxada e Parte Inferior",
          exercises: [
            {
              name: "Jumping Pull-ups",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=eRRmHSwl4EI",
              note: "Jumping Pull-ups"
            },
            {
              name: "Dips na cadeira",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/CB6Q2ocX-FY",
              note: ""
            },
            {
              name: "Crunches com palma sob os joelhos",
              sets: 3,
              reps: "20",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/O2PTXICY9lY",
              note: ""
            },
            {
              name: "Reverse Plank",
              sets: 3,
              reps: "30 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/4726WQMtnx8",
              note: ""
            }
          ]
        },
        {
          id: "s3d3",
          title: "Dia 3: Condicionamento Full Body",
          exercises: [
            {
              name: "Jumping Chin-ups",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/BLX0O9t51oQ",
              note: "Versão pegada supinada"
            },
            {
              name: "Scapular Pull-ups",
              sets: 3,
              reps: "10-12",
              rest: "60-90 s",
              video: "https://youtu.be/XIkPI-_80r4",
              note: ""
            },
            {
              name: "Flexões inclinadas (~30 cm)",
              sets: 3,
              reps: "10",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/TfzlcE4293c",
              note: "Inclinação menor = mais difícil"
            },
            {
              name: "Mountain Climbers",
              sets: 3,
              reps: "25-30 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/hZb6jTbCLeE",
              note: "Mountain Climbers"
            },
            {
              name: "Jump Squats",
              sets: 3,
              reps: "10",
              rest: "90-120 s",
              video: "https://youtu.be/5xv0DKqe5XQ",
              note: "Jump Squats"
            },
            {
              name: "Superman Holds",
              sets: 3,
              reps: "25-30 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/eKB5rv5c7FQ",
              note: ""
            }
          ]
        },
        {
          id: "s3d4",
          title: "Dia 4: Core e Estabilidade",
          exercises: [
            {
              name: "Bar Hang",
              sets: 3,
              reps: "35 segundos",
              rest: "60-90 s",
              video: "https://www.youtube.com/shorts/XPcT3capkyk",
              note: ""
            },
            {
              name: "Scapular Push-ups em Low Plank",
              sets: 3,
              reps: "10-12",
              rest: "60 s",
              video: "https://youtu.be/8ncZ22u33bY",
              note: "Versão no antebraço"
            },
            {
              name: "Elevação de panturrilha unilateral",
              sets: 3,
              reps: "10-12 por perna",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/5m1FuOaNg9A",
              note: "Single Leg Calf Raises"
            },
            {
              name: "Side Plank",
              sets: 3,
              reps: "30 segundos por lado",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/Ye7G1wQCMgk",
              note: "Side Plank"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Semana 4",
      days: [
        {
          id: "s4d1",
          title: "Dia 1: Push e Cardio",
          exercises: [
            {
              name: "Flexões negativas + Flexões de joelhos",
              sets: 3,
              reps: "8-10",
              rest: "90 s",
              video: "https://www.youtube.com/shorts/h5ClL5IYzog",
              note: ""
            },
            {
              name: "Barra com elástico (Banded Pull-ups)",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/3aRP4o23HXo",
              note: "Banded Pull-ups"
            },
            {
              name: "Jump Squats",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://youtu.be/5xv0DKqe5XQ",
              note: ""
            },
            {
              name: "Inclinações laterais deitado",
              sets: 3,
              reps: "25-30 segundos",
              rest: "30-60 s",
              video: "https://www.youtube.com/shorts/7wwAHCQvgcw",
              note: ""
            }
          ]
        },
        {
          id: "s4d2",
          title: "Dia 2: Puxada e Core",
          exercises: [
            {
              name: "Negative Pull-Ups",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=EkpJkHpJXmM",
              note: "Desça bem devagar da barra"
            },
            {
              name: "Crunches com palma sob as pernas",
              sets: 3,
              reps: "17-20",
              rest: "60 s",
              video: "https://www.youtube.com/watch?v=zVi5_uU9wgY",
              note: ""
            },
            {
              name: "Dips na cadeira",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/1mRpK_-d_H4",
              note: ""
            },
            {
              name: "Tuck-ups",
              sets: 3,
              reps: "15-17",
              rest: "60 s",
              video: "https://www.youtube.com/watch?v=obVuc0wZoss",
              note: ""
            },
            {
              name: "Reverse Plank",
              sets: 3,
              reps: "35-40 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/2IvtoSnZa1Y",
              note: ""
            }
          ]
        },
        {
          id: "s4d3",
          title: "Dia 3: Força Full Body",
          exercises: [
            {
              name: "Jumping Pull-ups",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=eRRmHSwl4EI",
              note: ""
            },
            {
              name: "Scapular Pull-ups",
              sets: 3,
              reps: "12",
              rest: "90-120 s",
              video: "https://youtu.be/XIkPI-_80r4",
              note: ""
            },
            {
              name: "Flexões inclinadas (~30 cm)",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/TfzlcE4293c",
              note: ""
            },
            {
              name: "Plank Jump-Ins",
              sets: 3,
              reps: "15-19",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=ESfOK9PU4yw",
              note: "Procurar: Plank Jump Ins"
            },
            {
              name: "Agachamentos laterais",
              sets: 3,
              reps: "12 por lado",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/vLZeph8iS-k",
              note: ""
            },
            {
              name: "Plank com elevação de braço",
              sets: 3,
              reps: "10 por braço",
              rest: "60-90 s",
              video: "https://www.youtube.com/shorts/vXVn63CvPgI",
              note: "Procurar: Plank Arm Lift"
            }
          ]
        },
        {
          id: "s4d4",
          title: "Dia 4: Core e Resistência",
          exercises: [
            {
              name: "Bar Hang",
              sets: 3,
              reps: "40 segundos",
              rest: "60-90 s",
              video: "https://www.youtube.com/shorts/MK0Iy8rfzWw",
              note: ""
            },
            {
              name: "Scapular Push-ups em Low Plank",
              sets: 3,
              reps: "12",
              rest: "60-90 s",
              video: "https://youtu.be/8ncZ22u33bY",
              note: ""
            },
            {
              name: "Hollow Hold",
              sets: 3,
              reps: "30-35 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/Xk-JcNj6lfY",
              note: "Hollow Body Hold completo"
            },
            {
              name: "Elevação de panturrilha unilateral",
              sets: 3,
              reps: "15 por perna",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/9y-7LEKm6sc",
              note: ""
            }
          ]
        }
      ]
    }
  ]
};