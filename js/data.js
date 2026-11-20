// data.js - Dados reais do plano de treino (extraídos da planilha)
const treinoData = {
  levels: [
    {
      id: "basico",
      title: "Básico",
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
              name: "Flexão de braço inclinada (~70 cm)",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=NEdo_I3OuVk",
              note: "Incline Push-up"
            },
            {
              name: "Barra australiana (pernas dobradas)",
              sets: 3,
              reps: "8-10",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=-QFX2gDASQk",
              note: "Australian Pull-up"
            },
            {
              name: "Agachamento livre",
              sets: 3,
              reps: "15",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=aclHkVaku9U",
              note: "Bodyweight Squat"
            },
            {
              name: "Elevação de joelhos nas barras paralelas",
              sets: 3,
              reps: "10-12",
              rest: "30-60 s",
              video: "https://www.youtube.com/watch?v=WliuvUpe4LI",
              note: "Knee Raise on Dip Bars"
            },
            {
              name: "Abdominal",
              sets: 3,
              reps: "15 por lado",
              rest: "30-60 s",
              video: "https://www.youtube.com/watch?v=Xyd_fa5zoEU",
              note: "Crunch"
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
              note: "Assisted Pull-up"
            },
            {
              name: "Mergulho na cadeira",
              sets: 3,
              reps: "10",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=AWz_7B1cch0",
              note: "Chair Dip"
            },
            {
              name: "Abdominal recolhido",
              sets: 3,
              reps: "12-15",
              rest: "30-60 s",
              video: "https://www.youtube.com/watch?v=1fbU_MkV7NE",
              note: "Tuck-up"
            },
            {
              name: "Mesa invertida",
              sets: 3,
              reps: "8-10",
              rest: "60-90 s",
              video: "https://www.youtube.com/watch?v=8duIaGV6cpc",
              note: "Reverse Tabletop"
            }
          ]
        },
        {
          id: "s1d3",
          title: "Dia 3: Condicionamento Full Body",
          exercises: [
            {
              name: "Barra australiana supinada (joelhos dobrados)",
              sets: 3,
              reps: "8",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=-QFX2gDASQk",
              note: "Australian Chin-up"
            },
            {
              name: "Movimento escapular na barra",
              sets: 3,
              reps: "10",
              rest: "60-90 s",
              video: "https://youtu.be/XIkPI-_80r4",
              note: "Scapular Pull-up"
            },
            {
              name: "Flexão de braço (joelhos)",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/h5ClL5IYzog",
              note: "Knee Push-up"
            },
            {
              name: "Prancha com salto dos pés",
              sets: 3,
              reps: "12-15 por perna",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/jOAKsYZk3xg",
              note: "Plank Jump-in"
            },
            {
              name: "Agachamento livre (profundo)",
              sets: 3,
              reps: "15",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=aclHkVaku9U",
              note: "Deep Bodyweight Squat"
            },
            {
              name: "Superman",
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
              name: "Pendurado na barra",
              sets: 3,
              reps: "20-30 segundos",
              rest: "60-90 s",
              video: "https://www.youtube.com/shorts/XPcT3capkyk",
              note: "Dead Hang"
            },
            {
              name: "Flexão escapular em prancha alta",
              sets: 3,
              reps: "10",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/3TsOKiUDzw0",
              note: "Scapular Push-up in High Plank"
            },
            {
              name: "Abdominal com a palma sob os joelhos",
              sets: 3,
              reps: "15-20",
              rest: "30-60 s",
              video: "https://www.youtube.com/watch?v=zVi5_uU9wgY",
              note: "Crunch"
            },
            {
              name: "Elevação de panturrilha",
              sets: 3,
              reps: "20",
              rest: "60 s",
              video: "https://www.youtube.com/watch?v=gwLzBJYoWlI",
              note: "Calf Raise"
            },
            {
              name: "Posição oca (recolhida)",
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
              name: "Caminhada com as mãos",
              sets: 3,
              reps: "8",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/kLtllH6zAnY",
              note: "Hand Walkout"
            },
            {
              name: "Flexão de braço inclinada",
              sets: 3,
              reps: "12",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=NEdo_I3OuVk",
              note: "Incline Push-up"
            },
            {
              name: "Barra australiana (pernas esticadas)",
              sets: 3,
              reps: "8-10",
              rest: "90 s",
              video: "https://www.youtube.com/watch?v=-QFX2gDASQk",
              note: "Australian Pull-up"
            },
            {
              name: "Abdominal lateral",
              sets: 3,
              reps: "15 por lado",
              rest: "30-60 s",
              video: "https://www.youtube.com/shorts/ZHGSf5Rpybc",
              note: "Side Crunch"
            },
            {
              name: "Inclinação lateral deitado",
              sets: 3,
              reps: "20 segundos",
              rest: "30-60 s",
              video: "https://youtu.be/X8re4UdVkY0",
              note: "Lying Side Bend"
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
              note: "Assisted Pull-up"
            },
            {
              name: "Mergulho na cadeira",
              sets: 3,
              reps: "8-10",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=AWz_7B1cch0",
              note: "Chair Dip"
            },
            {
              name: "Elevação de joelhos nas barras paralelas",
              sets: 3,
              reps: "15",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=WliuvUpe4LI",
              note: "Knee Raise on Dip Bars"
            },
            {
              name: "Agachamento livre",
              sets: 3,
              reps: "15-20",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=aclHkVaku9U",
              note: "Bodyweight Squat"
            },
            {
              name: "Prancha invertida",
              sets: 3,
              reps: "20-30 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/watch?v=8duIaGV6cpc",
              note: "Reverse Plank"
            }
          ]
        },
        {
          id: "s2d3",
          title: "Dia 3: Força Full Body",
          exercises: [
            {
              name: "Barra australiana supinada",
              sets: 3,
              reps: "8",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=-QFX2gDASQk",
              note: "Australian Chin-up"
            },
            {
              name: "Movimento escapular na barra",
              sets: 3,
              reps: "10",
              rest: "90-120 s",
              video: "https://youtu.be/XIkPI-_80r4",
              note: "Scapular Pull-up"
            },
            {
              name: "Prancha do cotovelo à mão",
              sets: 3,
              reps: "10",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/CdIniQVijZk",
              note: "Elbow to Hand Plank"
            },
            {
              name: "Prancha com salto dos pés",
              sets: 3,
              reps: "12-15 por perna",
              rest: "60-90 s",
              video: "https://www.youtube.com/watch?v=ESfOK9PU4yw",
              note: "Plank Jump-in"
            },
            {
              name: "Agachamento lateral",
              sets: 3,
              reps: "12 por lado",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/vLZeph8iS-k",
              note: "Side-to-Side Squat"
            },
            {
              name: "Prancha com elevação de braço",
              sets: 3,
              reps: "10 por braço",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/VNscRG3z0Wk",
              note: "Plank with Arm Lift"
            }
          ]
        },
        {
          id: "s2d4",
          title: "Dia 4: Pegada e Estabilidade de Core",
          exercises: [
            {
              name: "Pendurado na barra",
              sets: 3,
              reps: "30 segundos",
              rest: "60-90 s",
              video: "https://www.youtube.com/shorts/XPcT3capkyk",
              note: "Dead Hang"
            },
            {
              name: "Flexão escapular em prancha alta",
              sets: 3,
              reps: "10-12",
              rest: "60-90 s",
              video: "https://www.youtube.com/shorts/uTL7rYoPps0",
              note: "Scapular Push-up in High Plank"
            },
            {
              name: "Posição oca (recolhida)",
              sets: 3,
              reps: "30 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/dzgx6Kwab4E",
              note: "Tuck Hollow Body Hold"
            },
            {
              name: "Elevação de panturrilha",
              sets: 3,
              reps: "25-30 por perna",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/qYVo2f2ZKRU",
              note: "Calf Raise"
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
              name: "Flexão negativa e flexão de joelhos",
              sets: 3,
              reps: "6-8 de cada",
              rest: "90 s",
              video: "https://www.youtube.com/shorts/h5ClL5IYzog",
              note: "Negative Push-up and Knee Push-up"
            },
            {
              name: "Barra australiana",
              sets: 3,
              reps: "8-10",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/qfsEK96Px-E",
              note: "Australian Pull-up"
            },
            {
              name: "Agachamento livre (profundo)",
              sets: 3,
              reps: "20",
              rest: "60-90 s",
              video: "https://www.youtube.com/shorts/ezJYqB4Y5N8",
              note: "Deep Bodyweight Squat"
            },
            {
              name: "Abdominal recolhido",
              sets: 3,
              reps: "12-15",
              rest: "60 s",
              video: "https://www.youtube.com/watch?v=obVuc0wZoss",
              note: "Tuck-up"
            },
            {
              name: "Abdominal lateral",
              sets: 3,
              reps: "20",
              rest: "30-60 s",
              video: "https://www.youtube.com/shorts/ZHGSf5Rpybc",
              note: "Side Crunch"
            }
          ]
        },
        {
          id: "s3d2",
          title: "Dia 2: Puxada e Parte Inferior",
          exercises: [
            {
              name: "Barra com salto",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=eRRmHSwl4EI",
              note: "Jumping Pull-up"
            },
            {
              name: "Mergulho na cadeira",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/CB6Q2ocX-FY",
              note: "Chair Dip"
            },
            {
              name: "Abdominal com a palma sob os joelhos",
              sets: 3,
              reps: "20",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/O2PTXICY9lY",
              note: "Crunch"
            },
            {
              name: "Prancha invertida",
              sets: 3,
              reps: "30 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/4726WQMtnx8",
              note: "Reverse Plank"
            }
          ]
        },
        {
          id: "s3d3",
          title: "Dia 3: Condicionamento Full Body",
          exercises: [
            {
              name: "Barra supinada com salto",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/BLX0O9t51oQ",
              note: "Jumping Chin-up"
            },
            {
              name: "Movimento escapular na barra",
              sets: 3,
              reps: "10-12",
              rest: "60-90 s",
              video: "https://youtu.be/XIkPI-_80r4",
              note: "Scapular Pull-up"
            },
            {
              name: "Flexão de braço inclinada (~30 cm)",
              sets: 3,
              reps: "10",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/TfzlcE4293c",
              note: "Incline Push-up"
            },
            {
              name: "Escalador",
              sets: 3,
              reps: "25-30 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/hZb6jTbCLeE",
              note: "Mountain Climber"
            },
            {
              name: "Agachamento com salto",
              sets: 3,
              reps: "10",
              rest: "90-120 s",
              video: "https://youtu.be/5xv0DKqe5XQ",
              note: "Jump Squat"
            },
            {
              name: "Superman",
              sets: 3,
              reps: "25-30 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/eKB5rv5c7FQ",
              note: "Superman Hold"
            }
          ]
        },
        {
          id: "s3d4",
          title: "Dia 4: Core e Estabilidade",
          exercises: [
            {
              name: "Pendurado na barra",
              sets: 3,
              reps: "35 segundos",
              rest: "60-90 s",
              video: "https://www.youtube.com/shorts/XPcT3capkyk",
              note: "Dead Hang"
            },
            {
              name: "Flexão escapular em prancha baixa",
              sets: 3,
              reps: "10-12",
              rest: "60 s",
              video: "https://youtu.be/8ncZ22u33bY",
              note: "Scapular Push-up in Low Plank"
            },
            {
              name: "Elevação de panturrilha unilateral",
              sets: 3,
              reps: "10-12 por perna",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/5m1FuOaNg9A",
              note: "Single Leg Calf Raise"
            },
            {
              name: "Prancha lateral",
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
              name: "Flexão negativa e flexão de joelhos",
              sets: 3,
              reps: "8-10",
              rest: "90 s",
              video: "https://www.youtube.com/shorts/h5ClL5IYzog",
              note: "Negative Push-up and Knee Push-up"
            },
            {
              name: "Barra com elástico",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/3aRP4o23HXo",
              note: "Banded Pull-up"
            },
            {
              name: "Agachamento com salto",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://youtu.be/5xv0DKqe5XQ",
              note: "Jump Squat"
            },
            {
              name: "Inclinação lateral deitado",
              sets: 3,
              reps: "25-30 segundos",
              rest: "30-60 s",
              video: "https://www.youtube.com/shorts/7wwAHCQvgcw",
              note: "Lying Side Bend"
            }
          ]
        },
        {
          id: "s4d2",
          title: "Dia 2: Puxada e Core",
          exercises: [
            {
              name: "Barra negativa",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=EkpJkHpJXmM",
              note: "Negative Pull-up"
            },
            {
              name: "Abdominal com a palma sob as pernas",
              sets: 3,
              reps: "17-20",
              rest: "60 s",
              video: "https://www.youtube.com/watch?v=zVi5_uU9wgY",
              note: "Crunch"
            },
            {
              name: "Mergulho na cadeira",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/1mRpK_-d_H4",
              note: "Chair Dip"
            },
            {
              name: "Abdominal recolhido",
              sets: 3,
              reps: "15-17",
              rest: "60 s",
              video: "https://www.youtube.com/watch?v=obVuc0wZoss",
              note: "Tuck-up"
            },
            {
              name: "Prancha invertida",
              sets: 3,
              reps: "35-40 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/2IvtoSnZa1Y",
              note: "Reverse Plank"
            }
          ]
        },
        {
          id: "s4d3",
          title: "Dia 3: Força Full Body",
          exercises: [
            {
              name: "Barra com salto",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=eRRmHSwl4EI",
              note: "Jumping Pull-up"
            },
            {
              name: "Movimento escapular na barra",
              sets: 3,
              reps: "12",
              rest: "90-120 s",
              video: "https://youtu.be/XIkPI-_80r4",
              note: "Scapular Pull-up"
            },
            {
              name: "Flexão de braço inclinada (~30 cm)",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/TfzlcE4293c",
              note: "Incline Push-up"
            },
            {
              name: "Prancha com salto dos pés",
              sets: 3,
              reps: "15-19",
              rest: "90-120 s",
              video: "https://www.youtube.com/watch?v=ESfOK9PU4yw",
              note: "Plank Jump-in"
            },
            {
              name: "Agachamento lateral",
              sets: 3,
              reps: "12 por lado",
              rest: "90-120 s",
              video: "https://www.youtube.com/shorts/vLZeph8iS-k",
              note: "Side-to-Side Squat"
            },
            {
              name: "Prancha com elevação de braço",
              sets: 3,
              reps: "10 por braço",
              rest: "60-90 s",
              video: "https://www.youtube.com/shorts/vXVn63CvPgI",
              note: "Plank with Arm Lift"
            }
          ]
        },
        {
          id: "s4d4",
          title: "Dia 4: Core e Resistência",
          exercises: [
            {
              name: "Pendurado na barra",
              sets: 3,
              reps: "40 segundos",
              rest: "60-90 s",
              video: "https://www.youtube.com/shorts/MK0Iy8rfzWw",
              note: "Dead Hang"
            },
            {
              name: "Flexão escapular em prancha baixa",
              sets: 3,
              reps: "12",
              rest: "60-90 s",
              video: "https://youtu.be/8ncZ22u33bY",
              note: "Scapular Push-up in Low Plank"
            },
            {
              name: "Posição oca",
              sets: 3,
              reps: "30-35 segundos",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/Xk-JcNj6lfY",
              note: "Hollow Body Hold"
            },
            {
              name: "Elevação de panturrilha unilateral",
              sets: 3,
              reps: "15 por perna",
              rest: "60 s",
              video: "https://www.youtube.com/shorts/9y-7LEKm6sc",
              note: "Single Leg Calf Raise"
            }
          ]
        }
      ]
    }
      ]
    },
    {
      id: "iniciante",
      title: "Iniciante",
      weeks: [
    {
      id: 1,
      title: "Semana 1",
      days: [
        {
          id: "in1d1",
          title: "Dia 1: Empurrar e Core",
          exercises: [
            {
              name: "Flexão de braço (joelhos)",
              sets: 3,
              reps: "8-10",
              rest: "90-120 s",
              video: "https://youtu.be/bwWlK8f1-NM",
              note: "Knee Push-up"
            },
            {
              name: "Flexão pike",
              sets: 3,
              reps: "4-6",
              rest: "90-120 s",
              video: "https://youtu.be/XckEEwa1BPI",
              note: "Pike Push-up"
            },
            {
              name: "Prancha abdominal",
              sets: 3,
              reps: "20 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/pvIjsG5Svck",
              note: "Plank"
            },
            {
              name: "Posição oca (recolhida)",
              sets: 3,
              reps: "15 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/UVyCKFb0aIg",
              note: "Tuck Hollow Body Hold"
            }
          ]
        },
        {
          id: "in1d2",
          title: "Dia 2: Puxar e Pernas",
          exercises: [
            {
              name: "Barra australiana",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://youtu.be/FKJwrS0LAzk",
              note: "Australian Pull-up"
            },
            {
              name: "Movimento escapular na barra",
              sets: 3,
              reps: "6",
              rest: "90-120 s",
              video: "https://youtu.be/VpeeqGkiDUU",
              note: "Scapular Pull-up"
            },
            {
              name: "Agachamento livre",
              sets: 3,
              reps: "10",
              rest: "90-120 s",
              video: "https://youtu.be/l83R5PblSMA",
              note: "Bodyweight Squat"
            },
            {
              name: "Avanço",
              sets: 3,
              reps: "6 por perna",
              rest: "90-120 s",
              video: "https://youtu.be/g8-Ge9S0aUw",
              note: "Lunge"
            }
          ]
        },
        {
          id: "in1d3",
          title: "Dia 3: Corpo inteiro",
          exercises: [
            {
              name: "Flexão de braço (joelhos)",
              sets: 3,
              reps: "8-10",
              rest: "90-120 s",
              video: "https://youtu.be/bwWlK8f1-NM",
              note: "Knee Push-up"
            },
            {
              name: "Barra australiana (pernas dobradas)",
              sets: 3,
              reps: "8-10",
              rest: "90-120 s",
              video: "https://youtu.be/6Ej6xG7fOO0",
              note: "Australian Pull-up"
            },
            {
              name: "Elevação pélvica",
              sets: 3,
              reps: "10",
              rest: "45-60 s",
              video: "https://youtu.be/Xp33YgPZgns",
              note: "Glute Bridge"
            },
            {
              name: "Prancha lateral",
              sets: 3,
              reps: "15 segundos por lado",
              rest: "45-60 s",
              video: "https://youtu.be/Oe9Tp9SvTCE",
              note: "Side Plank"
            }
          ]
        },
        {
          id: "in1d4",
          title: "Dia 4: Estabilidade",
          exercises: [
            {
              name: "Apoio nas paralelas",
              sets: 3,
              reps: "10 segundos",
              rest: "90-120 s",
              video: "https://youtu.be/vVybJ3hTpFw?t=47",
              note: "Support Hold"
            },
            {
              name: "Pendurado na barra",
              sets: 3,
              reps: "15 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/0r6xaOpKwuE",
              note: "Dead Hang"
            },
            {
              name: "Movimento escapular na barra",
              sets: 3,
              reps: "6",
              rest: "90-120 s",
              video: "https://youtu.be/VpeeqGkiDUU",
              note: "Scapular Pull-up"
            },
            {
              name: "Posição oca",
              sets: 3,
              reps: "10 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/EsnM8eBtazU",
              note: "Hollow Body Hold"
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
          id: "in2d1",
          title: "Dia 1: Empurrar e Core",
          exercises: [
            {
              name: "Flexão de braço (joelhos)",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://youtu.be/bwWlK8f1-NM?t=27",
              note: "Knee Push-up"
            },
            {
              name: "Flexão pike",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://youtu.be/XckEEwa1BPI?t=5",
              note: "Pike Push-up"
            },
            {
              name: "Prancha abdominal",
              sets: 3,
              reps: "25 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/pvIjsG5Svck?t=38",
              note: "Plank"
            },
            {
              name: "Posição oca (recolhida)",
              sets: 3,
              reps: "20 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/UVyCKFb0aIg?t=45",
              note: "Tuck Hollow Body Hold"
            }
          ]
        },
        {
          id: "in2d2",
          title: "Dia 2: Puxar e Pernas",
          exercises: [
            {
              name: "Barra australiana",
              sets: 3,
              reps: "8-10",
              rest: "90-120 s",
              video: "https://youtu.be/FKJwrS0LAzk?t=15",
              note: "Australian Pull-up"
            },
            {
              name: "Movimento escapular na barra",
              sets: 3,
              reps: "8",
              rest: "90-120 s",
              video: "https://youtu.be/VpeeqGkiDUU",
              note: "Scapular Pull-up"
            },
            {
              name: "Agachamento livre",
              sets: 3,
              reps: "12",
              rest: "90-120 s",
              video: "https://youtu.be/8uoaYwS6iFM?t=45",
              note: "Bodyweight Squat"
            },
            {
              name: "Avanço",
              sets: 3,
              reps: "8 por perna",
              rest: "90-120 s",
              video: "https://youtu.be/g8-Ge9S0aUw",
              note: "Lunge"
            }
          ]
        },
        {
          id: "in2d3",
          title: "Dia 3: Corpo inteiro",
          exercises: [
            {
              name: "Flexão de braço (joelhos)",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://youtu.be/bwWlK8f1-NM?t=27",
              note: "Knee Push-up"
            },
            {
              name: "Barra australiana (pernas dobradas)",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://youtu.be/FKJwrS0LAzk?t=16",
              note: "Australian Pull-up"
            },
            {
              name: "Elevação pélvica",
              sets: 3,
              reps: "12",
              rest: "45-60 s",
              video: "https://youtu.be/Xp33YgPZgns?t=5",
              note: "Glute Bridge"
            },
            {
              name: "Prancha lateral",
              sets: 3,
              reps: "20 segundos por lado",
              rest: "45-60 s",
              video: "https://youtu.be/Oe9Tp9SvTCE",
              note: "Side Plank"
            }
          ]
        },
        {
          id: "in2d4",
          title: "Dia 4: Estabilidade",
          exercises: [
            {
              name: "Apoio nas paralelas",
              sets: 3,
              reps: "15 segundos",
              rest: "90-120 s",
              video: "https://youtu.be/_vPttkLHZMw?t=34",
              note: "Support Hold"
            },
            {
              name: "Pendurado na barra",
              sets: 3,
              reps: "20 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/0r6xaOpKwuE",
              note: "Dead Hang"
            },
            {
              name: "Movimento escapular na barra",
              sets: 3,
              reps: "8",
              rest: "90-120 s",
              video: "https://youtu.be/VpeeqGkiDUU",
              note: "Scapular Pull-up"
            },
            {
              name: "Posição oca",
              sets: 3,
              reps: "15 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/EsnM8eBtazU",
              note: "Hollow Body Hold"
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
          id: "in3d1",
          title: "Dia 1: Empurrar e Core",
          exercises: [
            {
              name: "Flexão de braço (joelhos)",
              sets: 3,
              reps: "12-15",
              rest: "60-90 s",
              video: "https://youtu.be/bwWlK8f1-NM?t=25",
              note: "Knee Push-up"
            },
            {
              name: "Flexão pike",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://youtu.be/XckEEwa1BPI?t=4",
              note: "Pike Push-up"
            },
            {
              name: "Prancha abdominal",
              sets: 3,
              reps: "30 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/pvIjsG5Svck?t=41",
              note: "Plank"
            },
            {
              name: "Posição oca (recolhida)",
              sets: 3,
              reps: "25 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/UVyCKFb0aIg?t=45",
              note: "Tuck Hollow Body Hold"
            }
          ]
        },
        {
          id: "in3d2",
          title: "Dia 2: Puxar e Pernas",
          exercises: [
            {
              name: "Barra australiana",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://youtu.be/FKJwrS0LAzk?t=16",
              note: "Australian Pull-up"
            },
            {
              name: "Movimento escapular na barra",
              sets: 3,
              reps: "8-10",
              rest: "90-120 s",
              video: "https://youtu.be/VpeeqGkiDUU",
              note: "Scapular Pull-up"
            },
            {
              name: "Agachamento livre",
              sets: 3,
              reps: "15",
              rest: "60-90 s",
              video: "https://youtu.be/l83R5PblSMA",
              note: "Bodyweight Squat"
            },
            {
              name: "Avanço",
              sets: 3,
              reps: "8-10 por perna",
              rest: "90-120 s",
              video: "https://youtu.be/g8-Ge9S0aUw",
              note: "Lunge"
            }
          ]
        },
        {
          id: "in3d3",
          title: "Dia 3: Corpo inteiro",
          exercises: [
            {
              name: "Flexão de braço (joelhos)",
              sets: 3,
              reps: "12",
              rest: "60-90 s",
              video: "https://youtu.be/bwWlK8f1-NM?t=25",
              note: "Knee Push-up"
            },
            {
              name: "Barra australiana (pernas dobradas)",
              sets: 3,
              reps: "10-12",
              rest: "60-90 s",
              video: "https://youtu.be/FKJwrS0LAzk?t=16",
              note: "Australian Pull-up"
            },
            {
              name: "Elevação pélvica",
              sets: 3,
              reps: "15",
              rest: "45-60 s",
              video: "https://youtu.be/Xp33YgPZgns?t=15",
              note: "Glute Bridge"
            },
            {
              name: "Prancha lateral",
              sets: 3,
              reps: "25 segundos por lado",
              rest: "45-60 s",
              video: "https://youtu.be/Oe9Tp9SvTCE",
              note: "Side Plank"
            }
          ]
        },
        {
          id: "in3d4",
          title: "Dia 4: Estabilidade",
          exercises: [
            {
              name: "Apoio nas paralelas",
              sets: 3,
              reps: "20 segundos",
              rest: "90-120 s",
              video: "https://youtu.be/_vPttkLHZMw?t=34",
              note: "Support Hold"
            },
            {
              name: "Pendurado na barra",
              sets: 3,
              reps: "25 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/0r6xaOpKwuE",
              note: "Dead Hang"
            },
            {
              name: "Movimento escapular na barra",
              sets: 3,
              reps: "8",
              rest: "60-90 s",
              video: "https://youtu.be/VpeeqGkiDUU",
              note: "Scapular Pull-up"
            },
            {
              name: "Posição oca",
              sets: 3,
              reps: "20 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/EsnM8eBtazU",
              note: "Hollow Body Hold"
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
          id: "in4d1",
          title: "Dia 1: Empurrar e Core",
          exercises: [
            {
              name: "Flexão de braço (joelhos)",
              sets: 3,
              reps: "12-15",
              rest: "60-90 s",
              video: "https://youtu.be/bwWlK8f1-NM?t=23",
              note: "Knee Push-up"
            },
            {
              name: "Flexão pike",
              sets: 3,
              reps: "8-10",
              rest: "60-90 s",
              video: "https://youtu.be/XckEEwa1BPI",
              note: "Pike Push-up"
            },
            {
              name: "Prancha abdominal",
              sets: 3,
              reps: "40 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/pvIjsG5Svck?t=41",
              note: "Plank"
            },
            {
              name: "Posição oca (recolhida)",
              sets: 3,
              reps: "30 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/UVyCKFb0aIg?t=45",
              note: "Tuck Hollow Body Hold"
            }
          ]
        },
        {
          id: "in4d2",
          title: "Dia 2: Puxar e Pernas",
          exercises: [
            {
              name: "Barra australiana",
              sets: 3,
              reps: "10-12",
              rest: "60-90 s",
              video: "https://youtu.be/FKJwrS0LAzk?t=16",
              note: "Australian Pull-up"
            },
            {
              name: "Movimento escapular na barra",
              sets: 3,
              reps: "10",
              rest: "60-90 s",
              video: "https://youtu.be/VpeeqGkiDUU",
              note: "Scapular Pull-up"
            },
            {
              name: "Agachamento livre",
              sets: 3,
              reps: "15-20",
              rest: "60-90 s",
              video: "https://youtu.be/8uoaYwS6iFM?t=44",
              note: "Bodyweight Squat"
            },
            {
              name: "Avanço",
              sets: 3,
              reps: "10 por perna",
              rest: "60-90 s",
              video: "https://youtu.be/g8-Ge9S0aUw",
              note: "Lunge"
            }
          ]
        },
        {
          id: "in4d3",
          title: "Dia 3: Corpo inteiro",
          exercises: [
            {
              name: "Flexão de braço (joelhos)",
              sets: 3,
              reps: "12-15",
              rest: "60-90 s",
              video: "https://youtu.be/bwWlK8f1-NM?t=27",
              note: "Knee Push-up"
            },
            {
              name: "Barra australiana (pernas dobradas)",
              sets: 3,
              reps: "12",
              rest: "60-90 s",
              video: "https://youtu.be/FKJwrS0LAzk?t=19",
              note: "Australian Pull-up"
            },
            {
              name: "Elevação pélvica",
              sets: 3,
              reps: "15",
              rest: "45-60 s",
              video: "https://youtu.be/tqp5XQPpTxY",
              note: "Glute Bridge"
            },
            {
              name: "Prancha lateral",
              sets: 3,
              reps: "30 segundos por lado",
              rest: "45-60 s",
              video: "https://youtu.be/Oe9Tp9SvTCE",
              note: "Side Plank"
            }
          ]
        },
        {
          id: "in4d4",
          title: "Dia 4: Estabilidade",
          exercises: [
            {
              name: "Apoio nas paralelas",
              sets: 3,
              reps: "25 segundos",
              rest: "60-90 s",
              video: "https://youtu.be/_vPttkLHZMw?t=34",
              note: "Support Hold"
            },
            {
              name: "Pendurado na barra",
              sets: 3,
              reps: "30 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/0r6xaOpKwuE",
              note: "Dead Hang"
            },
            {
              name: "Movimento escapular na barra",
              sets: 3,
              reps: "10",
              rest: "60-90 s",
              video: "https://youtu.be/VpeeqGkiDUU",
              note: "Scapular Pull-up"
            },
            {
              name: "Posição oca",
              sets: 3,
              reps: "25 segundos",
              rest: "45-60 s",
              video: "https://youtu.be/EsnM8eBtazU",
              note: "Hollow Body Hold"
            }
          ]
        }
      ]
    }
      ]
    },
    {
      id: "intermediario",
      title: "Intermediário",
      weeks: [
    {
      id: 1,
      title: "Semana 1",
      days: [
        {
          id: "im1d1",
          title: "Dia 1: Empurrar",
          exercises: [
            {
              name: "Flexão de braço",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://youtu.be/IODxDxX7oi4",
              note: "Push-up"
            },
            {
              name: "Flexão diamante",
              sets: 3,
              reps: "5-8",
              rest: "90-120 s",
              video: "https://youtu.be/XtU2VQVuLYs",
              note: "Diamond Push-up"
            },
            {
              name: "Flexão declinada",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://youtu.be/QBlYp-EwHlo",
              note: "Decline Push-up"
            },
            {
              name: "Parada de mão na parede",
              sets: 3,
              reps: "15 segundos",
              rest: "90-120 s",
              video: "https://youtu.be/hLYXOP-rFk8",
              note: "Wall Handstand"
            }
          ]
        },
        {
          id: "im1d2",
          title: "Dia 2: Puxar",
          exercises: [
            {
              name: "Barra fixa",
              sets: 3,
              reps: "3-5",
              rest: "2-3 min",
              video: "https://youtu.be/aAggnpPyR6E",
              note: "Pull-up"
            },
            {
              name: "Barra fixa supinada",
              sets: 3,
              reps: "3-5",
              rest: "2-3 min",
              video: "https://youtu.be/xBzKgvYBxI4?t=15",
              note: "Chin-up"
            },
            {
              name: "Front lever recolhido",
              sets: 3,
              reps: "5 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/BQXsRxfYOUQ?t=8",
              note: "Tuck Front Lever"
            },
            {
              name: "Elevação de joelhos na barra",
              sets: 3,
              reps: "8-10",
              rest: "60-90 s",
              video: "https://youtu.be/KNzJ3GuIpB8",
              note: "Hanging Knee Raise"
            }
          ]
        },
        {
          id: "im1d3",
          title: "Dia 3: Pernas e Core",
          exercises: [
            {
              name: "Agachamento búlgaro",
              sets: 3,
              reps: "6 por perna",
              rest: "90-120 s",
              video: "https://youtu.be/YArZi7mOKTs",
              note: "Bulgarian Split Squat"
            },
            {
              name: "Agachamento camarão",
              sets: 3,
              reps: "3-4 por perna",
              rest: "2-3 min",
              video: "https://youtu.be/FcQ77QxcotE?t=5",
              note: "Shrimp Squat"
            },
            {
              name: "L-sit",
              sets: 3,
              reps: "8 segundos",
              rest: "90-120 s",
              video: "https://youtu.be/yb-asjaBRnM?t=13",
              note: "L-Sit"
            },
            {
              name: "Elevação de pernas na barra",
              sets: 3,
              reps: "4-6",
              rest: "90-120 s",
              video: "https://youtu.be/_jLskVdzS4o?t=30",
              note: "Hanging Leg Raise"
            }
          ]
        },
        {
          id: "im1d4",
          title: "Dia 4: Controle",
          exercises: [
            {
              name: "Flexão arqueiro",
              sets: 3,
              reps: "4 por lado",
              rest: "2-3 min",
              video: "https://youtu.be/wJKLatFY-aU",
              note: "Archer Push-up"
            },
            {
              name: "Flexão aberta",
              sets: 3,
              reps: "8-10",
              rest: "90-120 s",
              video: "https://youtu.be/EsIdzx1J0iA?t=23",
              note: "Wide Push-up"
            },
            {
              name: "Mergulho nas paralelas",
              sets: 3,
              reps: "4-6",
              rest: "2-3 min",
              video: "https://youtu.be/o2qX3Zb5mvg",
              note: "Dip"
            },
            {
              name: "Parada de mão na parede",
              sets: 3,
              reps: "20 segundos",
              rest: "90-120 s",
              video: "https://youtu.be/hLYXOP-rFk8",
              note: "Wall Handstand"
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
          id: "im2d1",
          title: "Dia 1: Empurrar",
          exercises: [
            {
              name: "Flexão de braço",
              sets: 3,
              reps: "8-10",
              rest: "90-120 s",
              video: "https://youtu.be/IODxDxX7oi4?t=26",
              note: "Push-up"
            },
            {
              name: "Flexão diamante",
              sets: 3,
              reps: "6-10",
              rest: "90-120 s",
              video: "https://youtu.be/XtU2VQVuLYs",
              note: "Diamond Push-up"
            },
            {
              name: "Flexão declinada",
              sets: 3,
              reps: "8-10",
              rest: "90-120 s",
              video: "https://youtu.be/QBlYp-EwHlo",
              note: "Decline Push-up"
            },
            {
              name: "Parada de mão na parede",
              sets: 3,
              reps: "20 segundos",
              rest: "90-120 s",
              video: "https://youtu.be/hLYXOP-rFk8",
              note: "Wall Handstand"
            }
          ]
        },
        {
          id: "im2d2",
          title: "Dia 2: Puxar",
          exercises: [
            {
              name: "Barra fixa",
              sets: 3,
              reps: "4-6",
              rest: "2-3 min",
              video: "https://youtu.be/aAggnpPyR6E",
              note: "Pull-up"
            },
            {
              name: "Barra fixa supinada",
              sets: 3,
              reps: "4-6",
              rest: "2-3 min",
              video: "https://youtu.be/xBzKgvYBxI4?t=12",
              note: "Chin-up"
            },
            {
              name: "Front lever recolhido",
              sets: 3,
              reps: "8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/BQXsRxfYOUQ?t=7",
              note: "Tuck Front Lever"
            },
            {
              name: "Elevação de joelhos na barra",
              sets: 3,
              reps: "10-12",
              rest: "60-90 s",
              video: "https://youtu.be/KNzJ3GuIpB8",
              note: "Hanging Knee Raise"
            }
          ]
        },
        {
          id: "im2d3",
          title: "Dia 3: Pernas e Core",
          exercises: [
            {
              name: "Agachamento búlgaro",
              sets: 3,
              reps: "8 por perna",
              rest: "90-120 s",
              video: "https://youtu.be/YArZi7mOKTs",
              note: "Bulgarian Split Squat"
            },
            {
              name: "Agachamento camarão",
              sets: 3,
              reps: "4-5 por perna",
              rest: "2-3 min",
              video: "https://youtu.be/FcQ77QxcotE?t=5",
              note: "Shrimp Squat"
            },
            {
              name: "L-sit",
              sets: 3,
              reps: "12 segundos",
              rest: "90-120 s",
              video: "https://youtu.be/yb-asjaBRnM?t=70",
              note: "L-Sit"
            },
            {
              name: "Elevação de pernas na barra",
              sets: 3,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://youtu.be/_jLskVdzS4o?t=29",
              note: "Hanging Leg Raise"
            }
          ]
        },
        {
          id: "im2d4",
          title: "Dia 4: Controle",
          exercises: [
            {
              name: "Flexão arqueiro",
              sets: 3,
              reps: "5 por lado",
              rest: "2-3 min",
              video: "https://youtu.be/wJKLatFY-aU",
              note: "Archer Push-up"
            },
            {
              name: "Flexão aberta",
              sets: 3,
              reps: "10-12",
              rest: "90-120 s",
              video: "https://youtu.be/m3FTgWtJsFE",
              note: "Wide Push-up"
            },
            {
              name: "Mergulho nas paralelas",
              sets: 3,
              reps: "5-8",
              rest: "2-3 min",
              video: "https://youtu.be/bcO6V1xT48o",
              note: "Dip"
            },
            {
              name: "Parada de mão na parede",
              sets: 4,
              reps: "20 segundos",
              rest: "90-120 s",
              video: "https://youtu.be/5kalrTkvm-8",
              note: "Wall Handstand"
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
          id: "im3d1",
          title: "Dia 1: Empurrar",
          exercises: [
            {
              name: "Flexão de braço",
              sets: 3,
              reps: "10-12",
              rest: "60-90 s",
              video: "https://youtu.be/I9fsqKE5XHo",
              note: "Push-up"
            },
            {
              name: "Flexão diamante",
              sets: 3,
              reps: "8-10",
              rest: "60-90 s",
              video: "https://youtu.be/kGhDnFwMY3E",
              note: "Diamond Push-up"
            },
            {
              name: "Flexão declinada",
              sets: 3,
              reps: "8-12",
              rest: "90-120 s",
              video: "https://youtu.be/O7dVvwEK9J4",
              note: "Decline Push-up"
            },
            {
              name: "Parada de mão na parede",
              sets: 3,
              reps: "30 segundos",
              rest: "60-90 s",
              video: "https://youtu.be/5kalrTkvm-8",
              note: "Wall Handstand"
            }
          ]
        },
        {
          id: "im3d2",
          title: "Dia 2: Puxar",
          exercises: [
            {
              name: "Barra fixa",
              sets: 4,
              reps: "4-6",
              rest: "2-3 min",
              video: "https://youtu.be/RhNyvtK-IaA",
              note: "Pull-up"
            },
            {
              name: "Barra fixa supinada",
              sets: 4,
              reps: "5-7",
              rest: "2-3 min",
              video: "https://youtu.be/e1YSApl-QcM",
              note: "Chin-up"
            },
            {
              name: "Front lever recolhido",
              sets: 4,
              reps: "8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/lkGhntOoLNk",
              note: "Tuck Front Lever"
            },
            {
              name: "Elevação de joelhos na barra",
              sets: 3,
              reps: "12-15",
              rest: "45-60 s",
              video: "https://youtu.be/l7OroezzX9k",
              note: "Hanging Knee Raise"
            }
          ]
        },
        {
          id: "im3d3",
          title: "Dia 3: Pernas e Core",
          exercises: [
            {
              name: "Agachamento búlgaro",
              sets: 3,
              reps: "8-10 por perna",
              rest: "60-90 s",
              video: "https://youtu.be/uBSoEWZu07k",
              note: "Bulgarian Split Squat"
            },
            {
              name: "Agachamento camarão",
              sets: 3,
              reps: "5-6 por perna",
              rest: "2-3 min",
              video: "https://youtu.be/P-h6BuU3q78",
              note: "Shrimp Squat"
            },
            {
              name: "L-sit",
              sets: 4,
              reps: "12 segundos",
              rest: "60-90 s",
              video: "https://youtu.be/a4qGW79QtrE",
              note: "L-Sit"
            },
            {
              name: "Elevação de pernas na barra",
              sets: 3,
              reps: "8-10",
              rest: "60-90 s",
              video: "https://youtu.be/2n4UqRIJyk4",
              note: "Hanging Leg Raise"
            }
          ]
        },
        {
          id: "im3d4",
          title: "Dia 4: Controle",
          exercises: [
            {
              name: "Flexão arqueiro",
              sets: 3,
              reps: "6 por lado",
              rest: "2-3 min",
              video: "https://youtu.be/mzr0RYNDzzI",
              note: "Archer Push-up"
            },
            {
              name: "Flexão aberta",
              sets: 3,
              reps: "10-12",
              rest: "60-90 s",
              video: "https://youtu.be/m3FTgWtJsFE",
              note: "Wide Push-up"
            },
            {
              name: "Mergulho nas paralelas",
              sets: 4,
              reps: "6-8",
              rest: "2-3 min",
              video: "https://youtu.be/bcO6V1xT48o",
              note: "Dip"
            },
            {
              name: "Parada de mão na parede",
              sets: 4,
              reps: "30 segundos",
              rest: "60-90 s",
              video: "https://youtu.be/5kalrTkvm-8",
              note: "Wall Handstand"
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
          id: "im4d1",
          title: "Dia 1: Empurrar",
          exercises: [
            {
              name: "Flexão de braço",
              sets: 4,
              reps: "8-12",
              rest: "60-90 s",
              video: "https://youtu.be/I9fsqKE5XHo",
              note: "Push-up"
            },
            {
              name: "Flexão diamante",
              sets: 3,
              reps: "8-12",
              rest: "60-90 s",
              video: "https://youtu.be/kGhDnFwMY3E",
              note: "Diamond Push-up"
            },
            {
              name: "Flexão declinada",
              sets: 3,
              reps: "10-12",
              rest: "60-90 s",
              video: "https://youtu.be/O7dVvwEK9J4",
              note: "Decline Push-up"
            },
            {
              name: "Parada de mão na parede",
              sets: 4,
              reps: "20-30 segundos",
              rest: "60-90 s",
              video: "https://youtu.be/5kalrTkvm-8",
              note: "Wall Handstand"
            }
          ]
        },
        {
          id: "im4d2",
          title: "Dia 2: Puxar",
          exercises: [
            {
              name: "Barra fixa",
              sets: 4,
              reps: "5-8",
              rest: "2-3 min",
              video: "https://youtu.be/RhNyvtK-IaA",
              note: "Pull-up"
            },
            {
              name: "Barra fixa supinada",
              sets: 4,
              reps: "6-8",
              rest: "2-3 min",
              video: "https://youtu.be/e1YSApl-QcM",
              note: "Chin-up"
            },
            {
              name: "Front lever recolhido",
              sets: 4,
              reps: "10-12 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/lkGhntOoLNk",
              note: "Tuck Front Lever"
            },
            {
              name: "Elevação de joelhos na barra",
              sets: 3,
              reps: "12-15",
              rest: "45-60 s",
              video: "https://youtu.be/l7OroezzX9k",
              note: "Hanging Knee Raise"
            }
          ]
        },
        {
          id: "im4d3",
          title: "Dia 3: Pernas e Core",
          exercises: [
            {
              name: "Agachamento búlgaro",
              sets: 3,
              reps: "10 por perna",
              rest: "60-90 s",
              video: "https://youtu.be/uBSoEWZu07k",
              note: "Bulgarian Split Squat"
            },
            {
              name: "Agachamento camarão",
              sets: 3,
              reps: "6-8 por perna",
              rest: "2-3 min",
              video: "https://youtu.be/P-h6BuU3q78",
              note: "Shrimp Squat"
            },
            {
              name: "L-sit",
              sets: 4,
              reps: "15-20 segundos",
              rest: "60-90 s",
              video: "https://youtu.be/a4qGW79QtrE",
              note: "L-Sit"
            },
            {
              name: "Elevação de pernas na barra",
              sets: 3,
              reps: "8-12",
              rest: "60-90 s",
              video: "https://youtu.be/2n4UqRIJyk4",
              note: "Hanging Leg Raise"
            }
          ]
        },
        {
          id: "im4d4",
          title: "Dia 4: Controle",
          exercises: [
            {
              name: "Flexão arqueiro",
              sets: 3,
              reps: "6-8 por lado",
              rest: "2-3 min",
              video: "https://youtu.be/mzr0RYNDzzI",
              note: "Archer Push-up"
            },
            {
              name: "Flexão aberta",
              sets: 3,
              reps: "12-15",
              rest: "60-90 s",
              video: "https://youtu.be/m3FTgWtJsFE",
              note: "Wide Push-up"
            },
            {
              name: "Mergulho nas paralelas",
              sets: 4,
              reps: "8-10",
              rest: "2-3 min",
              video: "https://youtu.be/bcO6V1xT48o",
              note: "Dip"
            },
            {
              name: "Parada de mão na parede",
              sets: 4,
              reps: "30-40 segundos",
              rest: "60-90 s",
              video: "https://youtu.be/5kalrTkvm-8",
              note: "Wall Handstand"
            }
          ]
        }
      ]
    }
      ]
    },
    {
      id: "intermediario-avancado",
      title: "Intermediário-avançado",
      weeks: [
    {
      id: 1,
      title: "Semana 1",
      days: [
        {
          id: "ia1d1",
          title: "Dia 1: Empurrar e Explosão",
          exercises: [
            {
              name: "Flexão com palma",
              sets: 4,
              reps: "3-5",
              rest: "2-3 min",
              video: "https://youtu.be/ISYbQj-t5yQ",
              note: "Clapping Push-up"
            },
            {
              name: "Flexão pseudo planche",
              sets: 4,
              reps: "5-6",
              rest: "2-3 min",
              video: "https://youtu.be/VJd_q5w-VeY",
              note: "Pseudo Planche Push-up"
            },
            {
              name: "Flexão na parada de mão",
              sets: 4,
              reps: "3-5",
              rest: "2-3 min",
              video: "https://youtu.be/gSjHRuRQ4hk",
              note: "Handstand Push-up"
            },
            {
              name: "Planche recolhida",
              sets: 4,
              reps: "8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/YHkHgJOAe9A",
              note: "Tuck Planche"
            }
          ]
        },
        {
          id: "ia1d2",
          title: "Dia 2: Puxar e Alavanca",
          exercises: [
            {
              name: "Muscle-up",
              sets: 4,
              reps: "1-3",
              rest: "2-3 min",
              video: "https://youtu.be/Gpny7WAAZ44",
              note: "Muscle-up"
            },
            {
              name: "Barra no peito",
              sets: 4,
              reps: "3-5",
              rest: "2-3 min",
              video: "https://youtu.be/KVnxsJpKyOA",
              note: "Chest-to-Bar Pull-up"
            },
            {
              name: "Front lever avançado recolhido",
              sets: 4,
              reps: "6 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FC9Ch8clkZc",
              note: "Advanced Tuck Front Lever"
            },
            {
              name: "Back lever",
              sets: 4,
              reps: "6 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FZZqbeZti84",
              note: "Back Lever"
            }
          ]
        },
        {
          id: "ia1d3",
          title: "Dia 3: Pernas e Core",
          exercises: [
            {
              name: "Agachamento pistola",
              sets: 4,
              reps: "3 por perna",
              rest: "2-3 min",
              video: "https://youtu.be/vq5-vdgJc0I",
              note: "Pistol Squat"
            },
            {
              name: "Agachamento dragão",
              sets: 4,
              reps: "2-3 por perna",
              rest: "2-3 min",
              video: "https://youtu.be/hm6WrUKWouo",
              note: "Dragon Squat"
            },
            {
              name: "Pés na barra",
              sets: 4,
              reps: "4-6",
              rest: "90-120 s",
              video: "https://youtu.be/kjYuPnmMjfo",
              note: "Toes-to-Bar"
            },
            {
              name: "Planche recolhida",
              sets: 4,
              reps: "8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/YHkHgJOAe9A",
              note: "Tuck Planche"
            }
          ]
        },
        {
          id: "ia1d4",
          title: "Dia 4: Habilidade",
          exercises: [
            {
              name: "Muscle-up",
              sets: 5,
              reps: "1-2",
              rest: "2-3 min",
              video: "https://youtu.be/Gpny7WAAZ44",
              note: "Muscle-up"
            },
            {
              name: "Flexão na parada de mão",
              sets: 4,
              reps: "3-4",
              rest: "2-3 min",
              video: "https://youtu.be/gSjHRuRQ4hk",
              note: "Handstand Push-up"
            },
            {
              name: "Back lever",
              sets: 4,
              reps: "6 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FZZqbeZti84",
              note: "Back Lever"
            },
            {
              name: "Front lever avançado recolhido",
              sets: 4,
              reps: "6 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FC9Ch8clkZc",
              note: "Advanced Tuck Front Lever"
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
          id: "ia2d1",
          title: "Dia 1: Empurrar e Explosão",
          exercises: [
            {
              name: "Flexão com palma",
              sets: 4,
              reps: "4-6",
              rest: "2-3 min",
              video: "https://youtu.be/ISYbQj-t5yQ",
              note: "Clapping Push-up"
            },
            {
              name: "Flexão pseudo planche",
              sets: 4,
              reps: "6-8",
              rest: "2-3 min",
              video: "https://youtu.be/VJd_q5w-VeY",
              note: "Pseudo Planche Push-up"
            },
            {
              name: "Flexão na parada de mão",
              sets: 4,
              reps: "4-6",
              rest: "2-3 min",
              video: "https://youtu.be/gSjHRuRQ4hk",
              note: "Handstand Push-up"
            },
            {
              name: "Planche recolhida",
              sets: 4,
              reps: "10 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/YHkHgJOAe9A",
              note: "Tuck Planche"
            }
          ]
        },
        {
          id: "ia2d2",
          title: "Dia 2: Puxar e Alavanca",
          exercises: [
            {
              name: "Muscle-up",
              sets: 4,
              reps: "2-3",
              rest: "2-3 min",
              video: "https://youtu.be/Gpny7WAAZ44",
              note: "Muscle-up"
            },
            {
              name: "Barra no peito",
              sets: 4,
              reps: "4-6",
              rest: "2-3 min",
              video: "https://youtu.be/KVnxsJpKyOA",
              note: "Chest-to-Bar Pull-up"
            },
            {
              name: "Front lever avançado recolhido",
              sets: 4,
              reps: "8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FC9Ch8clkZc",
              note: "Advanced Tuck Front Lever"
            },
            {
              name: "Back lever",
              sets: 4,
              reps: "8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FZZqbeZti84",
              note: "Back Lever"
            }
          ]
        },
        {
          id: "ia2d3",
          title: "Dia 3: Pernas e Core",
          exercises: [
            {
              name: "Agachamento pistola",
              sets: 4,
              reps: "4 por perna",
              rest: "2-3 min",
              video: "https://youtu.be/vq5-vdgJc0I",
              note: "Pistol Squat"
            },
            {
              name: "Agachamento dragão",
              sets: 4,
              reps: "3 por perna",
              rest: "2-3 min",
              video: "https://youtu.be/hm6WrUKWouo",
              note: "Dragon Squat"
            },
            {
              name: "Pés na barra",
              sets: 4,
              reps: "6-8",
              rest: "90-120 s",
              video: "https://youtu.be/kjYuPnmMjfo",
              note: "Toes-to-Bar"
            },
            {
              name: "Planche recolhida",
              sets: 4,
              reps: "10 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/YHkHgJOAe9A",
              note: "Tuck Planche"
            }
          ]
        },
        {
          id: "ia2d4",
          title: "Dia 4: Habilidade",
          exercises: [
            {
              name: "Muscle-up",
              sets: 5,
              reps: "2",
              rest: "2-3 min",
              video: "https://youtu.be/Gpny7WAAZ44",
              note: "Muscle-up"
            },
            {
              name: "Flexão na parada de mão",
              sets: 4,
              reps: "4-5",
              rest: "2-3 min",
              video: "https://youtu.be/gSjHRuRQ4hk",
              note: "Handstand Push-up"
            },
            {
              name: "Back lever",
              sets: 5,
              reps: "8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FZZqbeZti84",
              note: "Back Lever"
            },
            {
              name: "Front lever avançado recolhido",
              sets: 5,
              reps: "8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FC9Ch8clkZc",
              note: "Advanced Tuck Front Lever"
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
          id: "ia3d1",
          title: "Dia 1: Empurrar e Explosão",
          exercises: [
            {
              name: "Flexão com palma",
              sets: 5,
              reps: "4-6",
              rest: "2-3 min",
              video: "https://youtu.be/ISYbQj-t5yQ",
              note: "Clapping Push-up"
            },
            {
              name: "Flexão pseudo planche",
              sets: 4,
              reps: "6-8",
              rest: "2-3 min",
              video: "https://youtu.be/VJd_q5w-VeY",
              note: "Pseudo Planche Push-up"
            },
            {
              name: "Flexão na parada de mão",
              sets: 5,
              reps: "4-6",
              rest: "2-3 min",
              video: "https://youtu.be/gSjHRuRQ4hk",
              note: "Handstand Push-up"
            },
            {
              name: "Planche recolhida",
              sets: 5,
              reps: "10 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/YHkHgJOAe9A",
              note: "Tuck Planche"
            }
          ]
        },
        {
          id: "ia3d2",
          title: "Dia 2: Puxar e Alavanca",
          exercises: [
            {
              name: "Muscle-up",
              sets: 5,
              reps: "2-3",
              rest: "2-3 min",
              video: "https://youtu.be/Gpny7WAAZ44",
              note: "Muscle-up"
            },
            {
              name: "Barra no peito",
              sets: 5,
              reps: "4-6",
              rest: "2-3 min",
              video: "https://youtu.be/KVnxsJpKyOA",
              note: "Chest-to-Bar Pull-up"
            },
            {
              name: "Front lever avançado recolhido",
              sets: 5,
              reps: "8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FC9Ch8clkZc",
              note: "Advanced Tuck Front Lever"
            },
            {
              name: "Back lever",
              sets: 5,
              reps: "10 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FZZqbeZti84",
              note: "Back Lever"
            }
          ]
        },
        {
          id: "ia3d3",
          title: "Dia 3: Pernas e Core",
          exercises: [
            {
              name: "Agachamento pistola",
              sets: 4,
              reps: "5 por perna",
              rest: "2-3 min",
              video: "https://youtu.be/vq5-vdgJc0I",
              note: "Pistol Squat"
            },
            {
              name: "Agachamento dragão",
              sets: 4,
              reps: "3-4 por perna",
              rest: "2-3 min",
              video: "https://youtu.be/hm6WrUKWouo",
              note: "Dragon Squat"
            },
            {
              name: "Pés na barra",
              sets: 5,
              reps: "6-8",
              rest: "60-90 s",
              video: "https://youtu.be/kjYuPnmMjfo",
              note: "Toes-to-Bar"
            },
            {
              name: "Planche recolhida",
              sets: 5,
              reps: "12 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/YHkHgJOAe9A",
              note: "Tuck Planche"
            }
          ]
        },
        {
          id: "ia3d4",
          title: "Dia 4: Habilidade",
          exercises: [
            {
              name: "Muscle-up",
              sets: 5,
              reps: "2-3",
              rest: "2-3 min",
              video: "https://youtu.be/Gpny7WAAZ44",
              note: "Muscle-up"
            },
            {
              name: "Flexão na parada de mão",
              sets: 5,
              reps: "4-6",
              rest: "2-3 min",
              video: "https://youtu.be/gSjHRuRQ4hk",
              note: "Handstand Push-up"
            },
            {
              name: "Back lever",
              sets: 5,
              reps: "10 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FZZqbeZti84",
              note: "Back Lever"
            },
            {
              name: "Front lever avançado recolhido",
              sets: 5,
              reps: "8-10 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FC9Ch8clkZc",
              note: "Advanced Tuck Front Lever"
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
          id: "ia4d1",
          title: "Dia 1: Empurrar e Explosão",
          exercises: [
            {
              name: "Flexão com palma",
              sets: 5,
              reps: "5-6",
              rest: "2-3 min",
              video: "https://youtu.be/ISYbQj-t5yQ",
              note: "Clapping Push-up"
            },
            {
              name: "Flexão pseudo planche",
              sets: 5,
              reps: "6-8",
              rest: "2-3 min",
              video: "https://youtu.be/VJd_q5w-VeY",
              note: "Pseudo Planche Push-up"
            },
            {
              name: "Flexão na parada de mão",
              sets: 5,
              reps: "5-7",
              rest: "2-3 min",
              video: "https://youtu.be/gSjHRuRQ4hk",
              note: "Handstand Push-up"
            },
            {
              name: "Planche recolhida",
              sets: 5,
              reps: "12 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/YHkHgJOAe9A",
              note: "Tuck Planche"
            }
          ]
        },
        {
          id: "ia4d2",
          title: "Dia 2: Puxar e Alavanca",
          exercises: [
            {
              name: "Muscle-up",
              sets: 5,
              reps: "3-4",
              rest: "2-3 min",
              video: "https://youtu.be/Gpny7WAAZ44",
              note: "Muscle-up"
            },
            {
              name: "Barra no peito",
              sets: 5,
              reps: "5-6",
              rest: "2-3 min",
              video: "https://youtu.be/KVnxsJpKyOA",
              note: "Chest-to-Bar Pull-up"
            },
            {
              name: "Front lever avançado recolhido",
              sets: 5,
              reps: "10 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FC9Ch8clkZc",
              note: "Advanced Tuck Front Lever"
            },
            {
              name: "Back lever",
              sets: 5,
              reps: "12 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FZZqbeZti84",
              note: "Back Lever"
            }
          ]
        },
        {
          id: "ia4d3",
          title: "Dia 3: Pernas e Core",
          exercises: [
            {
              name: "Agachamento pistola",
              sets: 5,
              reps: "5 por perna",
              rest: "2-3 min",
              video: "https://youtu.be/vq5-vdgJc0I",
              note: "Pistol Squat"
            },
            {
              name: "Agachamento dragão",
              sets: 4,
              reps: "4 por perna",
              rest: "2-3 min",
              video: "https://youtu.be/hm6WrUKWouo",
              note: "Dragon Squat"
            },
            {
              name: "Pés na barra",
              sets: 5,
              reps: "8-10",
              rest: "60-90 s",
              video: "https://youtu.be/kjYuPnmMjfo",
              note: "Toes-to-Bar"
            },
            {
              name: "Planche recolhida",
              sets: 5,
              reps: "12-15 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/YHkHgJOAe9A",
              note: "Tuck Planche"
            }
          ]
        },
        {
          id: "ia4d4",
          title: "Dia 4: Habilidade",
          exercises: [
            {
              name: "Muscle-up",
              sets: 5,
              reps: "3",
              rest: "2-3 min",
              video: "https://youtu.be/Gpny7WAAZ44",
              note: "Muscle-up"
            },
            {
              name: "Flexão na parada de mão",
              sets: 5,
              reps: "5-6",
              rest: "2-3 min",
              video: "https://youtu.be/gSjHRuRQ4hk",
              note: "Handstand Push-up"
            },
            {
              name: "Back lever",
              sets: 5,
              reps: "12 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FZZqbeZti84",
              note: "Back Lever"
            },
            {
              name: "Front lever avançado recolhido",
              sets: 5,
              reps: "10-12 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/FC9Ch8clkZc",
              note: "Advanced Tuck Front Lever"
            }
          ]
        }
      ]
    }
      ]
    },
    {
      id: "avancado",
      title: "Avançado",
      weeks: [
    {
      id: 1,
      title: "Semana 1",
      days: [
        {
          id: "av1d1",
          title: "Dia 1: Puxar em Alavanca",
          exercises: [
            {
              name: "Front lever",
              sets: 5,
              reps: "3-5 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/5g8-sj-8snc",
              note: "Full Front Lever"
            },
            {
              name: "Barra no front lever",
              sets: 4,
              reps: "1-2",
              rest: "2-3 min",
              video: "https://youtu.be/nOB5hcmXksQ",
              note: "Front Lever Pull-up"
            },
            {
              name: "Barra com um braço",
              sets: 4,
              reps: "1 por braço",
              rest: "2-3 min",
              video: "https://youtu.be/mTJHClMQPM8",
              note: "One-Arm Pull-up"
            }
          ]
        },
        {
          id: "av1d2",
          title: "Dia 2: Empurrar em Alavanca",
          exercises: [
            {
              name: "Planche aberta",
              sets: 5,
              reps: "3-5 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/IP-Vs4jfSyc",
              note: "Straddle Planche"
            },
            {
              name: "Flexão na planche",
              sets: 4,
              reps: "1-2",
              rest: "2-3 min",
              video: "https://youtu.be/8z2Jmgf8GH8",
              note: "Planche Push-up"
            },
            {
              name: "Sustentação a 90 graus",
              sets: 4,
              reps: "3-5 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/w_ZN19S5Gpk",
              note: "90-Degree Hold"
            },
            {
              name: "Flexão com um braço",
              sets: 4,
              reps: "2-3 por braço",
              rest: "2-3 min",
              video: "https://youtu.be/IlWN4SNqaEM",
              note: "One-Arm Push-up"
            }
          ]
        },
        {
          id: "av1d3",
          title: "Dia 3: Equilíbrio",
          exercises: [
            {
              name: "Parada de mão livre",
              sets: 5,
              reps: "10 segundos",
              rest: "60-90 s",
              video: "https://youtu.be/lGIFTWsBXdw",
              note: "Freestanding Handstand"
            },
            {
              name: "Flexão na parada de mão livre",
              sets: 4,
              reps: "1-2",
              rest: "2-3 min",
              video: "https://youtu.be/tQhrk6WMcKw",
              note: "Freestanding Handstand Push-up"
            },
            {
              name: "Bandeira humana",
              sets: 4,
              reps: "3-5 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/y4Vwwz8vV2U",
              note: "Human Flag"
            }
          ]
        },
        {
          id: "av1d4",
          title: "Dia 4: Core e Força Máxima",
          exercises: [
            {
              name: "Bandeira do dragão",
              sets: 4,
              reps: "3-5",
              rest: "2-3 min",
              video: "https://youtu.be/pvz7k5gO-DE",
              note: "Dragon Flag"
            },
            {
              name: "V-sit",
              sets: 4,
              reps: "8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/XblDyJlfe3k",
              note: "V-Sit"
            },
            {
              name: "Planche",
              sets: 4,
              reps: "1-2 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/LgPG0MZPI84",
              note: "Full Planche"
            },
            {
              name: "Barra com um braço",
              sets: 4,
              reps: "1 por braço",
              rest: "2-3 min",
              video: "https://youtu.be/mTJHClMQPM8",
              note: "One-Arm Pull-up"
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
          id: "av2d1",
          title: "Dia 1: Puxar em Alavanca",
          exercises: [
            {
              name: "Front lever",
              sets: 5,
              reps: "5-6 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/5g8-sj-8snc",
              note: "Full Front Lever"
            },
            {
              name: "Barra no front lever",
              sets: 4,
              reps: "2",
              rest: "2-3 min",
              video: "https://youtu.be/nOB5hcmXksQ",
              note: "Front Lever Pull-up"
            },
            {
              name: "Barra com um braço",
              sets: 4,
              reps: "1-2 por braço",
              rest: "2-3 min",
              video: "https://youtu.be/mTJHClMQPM8",
              note: "One-Arm Pull-up"
            }
          ]
        },
        {
          id: "av2d2",
          title: "Dia 2: Empurrar em Alavanca",
          exercises: [
            {
              name: "Planche aberta",
              sets: 5,
              reps: "5-8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/IP-Vs4jfSyc",
              note: "Straddle Planche"
            },
            {
              name: "Flexão na planche",
              sets: 4,
              reps: "2-3",
              rest: "2-3 min",
              video: "https://youtu.be/8z2Jmgf8GH8",
              note: "Planche Push-up"
            },
            {
              name: "Sustentação a 90 graus",
              sets: 4,
              reps: "5-8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/w_ZN19S5Gpk",
              note: "90-Degree Hold"
            },
            {
              name: "Flexão com um braço",
              sets: 4,
              reps: "3-4 por braço",
              rest: "2-3 min",
              video: "https://youtu.be/IlWN4SNqaEM",
              note: "One-Arm Push-up"
            }
          ]
        },
        {
          id: "av2d3",
          title: "Dia 3: Equilíbrio",
          exercises: [
            {
              name: "Parada de mão livre",
              sets: 5,
              reps: "15 segundos",
              rest: "60-90 s",
              video: "https://youtu.be/lGIFTWsBXdw",
              note: "Freestanding Handstand"
            },
            {
              name: "Flexão na parada de mão livre",
              sets: 4,
              reps: "2-3",
              rest: "2-3 min",
              video: "https://youtu.be/tQhrk6WMcKw",
              note: "Freestanding Handstand Push-up"
            },
            {
              name: "Bandeira humana",
              sets: 4,
              reps: "5-8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/y4Vwwz8vV2U",
              note: "Human Flag"
            }
          ]
        },
        {
          id: "av2d4",
          title: "Dia 4: Core e Força Máxima",
          exercises: [
            {
              name: "Bandeira do dragão",
              sets: 4,
              reps: "4-6",
              rest: "2-3 min",
              video: "https://youtu.be/pvz7k5gO-DE",
              note: "Dragon Flag"
            },
            {
              name: "V-sit",
              sets: 4,
              reps: "10 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/XblDyJlfe3k",
              note: "V-Sit"
            },
            {
              name: "Planche",
              sets: 4,
              reps: "2-3 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/LgPG0MZPI84",
              note: "Full Planche"
            },
            {
              name: "Barra com um braço",
              sets: 5,
              reps: "1 por braço",
              rest: "2-3 min",
              video: "https://youtu.be/mTJHClMQPM8",
              note: "One-Arm Pull-up"
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
          id: "av3d1",
          title: "Dia 1: Puxar em Alavanca",
          exercises: [
            {
              name: "Front lever",
              sets: 5,
              reps: "6-8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/5g8-sj-8snc",
              note: "Full Front Lever"
            },
            {
              name: "Barra no front lever",
              sets: 5,
              reps: "2",
              rest: "2-3 min",
              video: "https://youtu.be/nOB5hcmXksQ",
              note: "Front Lever Pull-up"
            },
            {
              name: "Barra com um braço",
              sets: 5,
              reps: "1-2 por braço",
              rest: "2-3 min",
              video: "https://youtu.be/mTJHClMQPM8",
              note: "One-Arm Pull-up"
            }
          ]
        },
        {
          id: "av3d2",
          title: "Dia 2: Empurrar em Alavanca",
          exercises: [
            {
              name: "Planche aberta",
              sets: 5,
              reps: "8-10 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/IP-Vs4jfSyc",
              note: "Straddle Planche"
            },
            {
              name: "Flexão na planche",
              sets: 5,
              reps: "2-3",
              rest: "2-3 min",
              video: "https://youtu.be/8z2Jmgf8GH8",
              note: "Planche Push-up"
            },
            {
              name: "Sustentação a 90 graus",
              sets: 5,
              reps: "6-8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/w_ZN19S5Gpk",
              note: "90-Degree Hold"
            },
            {
              name: "Flexão com um braço",
              sets: 5,
              reps: "3-5 por braço",
              rest: "2-3 min",
              video: "https://youtu.be/IlWN4SNqaEM",
              note: "One-Arm Push-up"
            }
          ]
        },
        {
          id: "av3d3",
          title: "Dia 3: Equilíbrio",
          exercises: [
            {
              name: "Parada de mão livre",
              sets: 5,
              reps: "20 segundos",
              rest: "60-90 s",
              video: "https://youtu.be/lGIFTWsBXdw",
              note: "Freestanding Handstand"
            },
            {
              name: "Flexão na parada de mão livre",
              sets: 5,
              reps: "2-3",
              rest: "2-3 min",
              video: "https://youtu.be/tQhrk6WMcKw",
              note: "Freestanding Handstand Push-up"
            },
            {
              name: "Bandeira humana",
              sets: 5,
              reps: "6-8 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/y4Vwwz8vV2U",
              note: "Human Flag"
            }
          ]
        },
        {
          id: "av3d4",
          title: "Dia 4: Core e Força Máxima",
          exercises: [
            {
              name: "Bandeira do dragão",
              sets: 5,
              reps: "5-6",
              rest: "2-3 min",
              video: "https://youtu.be/pvz7k5gO-DE",
              note: "Dragon Flag"
            },
            {
              name: "V-sit",
              sets: 5,
              reps: "12 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/XblDyJlfe3k",
              note: "V-Sit"
            },
            {
              name: "Planche",
              sets: 5,
              reps: "3 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/LgPG0MZPI84",
              note: "Full Planche"
            },
            {
              name: "Barra com um braço",
              sets: 5,
              reps: "1-2 por braço",
              rest: "2-3 min",
              video: "https://youtu.be/mTJHClMQPM8",
              note: "One-Arm Pull-up"
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
          id: "av4d1",
          title: "Dia 1: Puxar em Alavanca",
          exercises: [
            {
              name: "Front lever",
              sets: 5,
              reps: "8-10 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/5g8-sj-8snc",
              note: "Full Front Lever"
            },
            {
              name: "Barra no front lever",
              sets: 5,
              reps: "2-3",
              rest: "2-3 min",
              video: "https://youtu.be/nOB5hcmXksQ",
              note: "Front Lever Pull-up"
            },
            {
              name: "Barra com um braço",
              sets: 5,
              reps: "2 por braço",
              rest: "2-3 min",
              video: "https://youtu.be/mTJHClMQPM8",
              note: "One-Arm Pull-up"
            }
          ]
        },
        {
          id: "av4d2",
          title: "Dia 2: Empurrar em Alavanca",
          exercises: [
            {
              name: "Planche aberta",
              sets: 5,
              reps: "8-10 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/IP-Vs4jfSyc",
              note: "Straddle Planche"
            },
            {
              name: "Flexão na planche",
              sets: 5,
              reps: "3-4",
              rest: "2-3 min",
              video: "https://youtu.be/8z2Jmgf8GH8",
              note: "Planche Push-up"
            },
            {
              name: "Flexão a 90 graus",
              sets: 4,
              reps: "2-4",
              rest: "2-3 min",
              video: "https://youtu.be/hLKoKIAp6Eg",
              note: "90-Degree Push-up"
            },
            {
              name: "Flexão com um braço",
              sets: 5,
              reps: "4-6 por braço",
              rest: "2-3 min",
              video: "https://youtu.be/IlWN4SNqaEM",
              note: "One-Arm Push-up"
            }
          ]
        },
        {
          id: "av4d3",
          title: "Dia 3: Equilíbrio",
          exercises: [
            {
              name: "Parada de mão livre",
              sets: 5,
              reps: "20-30 segundos",
              rest: "60-90 s",
              video: "https://youtu.be/lGIFTWsBXdw",
              note: "Freestanding Handstand"
            },
            {
              name: "Flexão na parada de mão livre",
              sets: 5,
              reps: "3-4",
              rest: "2-3 min",
              video: "https://youtu.be/tQhrk6WMcKw",
              note: "Freestanding Handstand Push-up"
            },
            {
              name: "Bandeira humana",
              sets: 5,
              reps: "8-10 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/y4Vwwz8vV2U",
              note: "Human Flag"
            }
          ]
        },
        {
          id: "av4d4",
          title: "Dia 4: Core e Força Máxima",
          exercises: [
            {
              name: "Bandeira do dragão",
              sets: 5,
              reps: "6-8",
              rest: "2-3 min",
              video: "https://youtu.be/pvz7k5gO-DE",
              note: "Dragon Flag"
            },
            {
              name: "Manna",
              sets: 5,
              reps: "3-5 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/BC2KQnTVkiE",
              note: "Manna"
            },
            {
              name: "Planche",
              sets: 5,
              reps: "3-5 segundos",
              rest: "2-3 min",
              video: "https://youtu.be/LgPG0MZPI84",
              note: "Full Planche"
            },
            {
              name: "Barra com um braço",
              sets: 5,
              reps: "2 por braço",
              rest: "2-3 min",
              video: "https://youtu.be/mTJHClMQPM8",
              note: "One-Arm Pull-up"
            }
          ]
        }
      ]
    }
      ]
    }
  ]
};