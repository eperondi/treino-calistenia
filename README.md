# Treino Calistenia 4 Semanas

Site simples para acompanhar o plano de calistenia (Emerson e Esposa).
Marca séries concluídas, mostra vídeos e funciona offline depois de aberto uma vez.

## Estrutura
treino-calistenia/

├── index.html

├── manifest.json

├── sw.js

├── README.md

├── js/

│   ├── app.js

│   └── data.js

├── style/

│   └── styles.css

└── img/

└── icons/

├── icon-192.png

├── icon-512.png

├── icon-maskable-192.png

└── icon-maskable-512.pngTexto


O `sw.js` precisa ficar na raiz. Se ele for para outra pasta, o modo offline quebra.

## Publicar no GitHub Pages

1. Crie um repositório (ex.: `treino-calistenia`).
2. Envie todos os arquivos, incluindo a pasta `img/icons/`.
3. Em **Settings → Pages**, escolha a branch `main` e a pasta `/` (root).
4. Aguarde 1–2 minutos. O site fica em:

`https://seu-usuario.github.io/treino-calistenia/`

## Instalar no celular

**Android (Chrome)**  
Menu → Instalar app / Adicionar à tela inicial

**iPhone (Safari)**  
Botão compartilhar → Adicionar à Tela de Início

Abra o site uma vez com internet. Depois disso, treinos, progresso e interface ficam disponíveis offline. Vídeos do YouTube continuam precisando de conexão.

## Como usar

- Troque entre **Emerson** e **Esposa**. O progresso de cada um fica separado neste navegador.
- Toque no número da série para marcar como concluída.
- **▶ Vídeo** abre o YouTube dentro do site.
- **Marcar dia** completa (ou desfaz) todos os exercícios daquele dia.
- **Zerar progresso deste usuário** apaga só o progresso do perfil ativo.

Os dados ficam no `localStorage` deste navegador. Não sincronizam entre celular e computador.

## Editar os treinos

Abra [js/data.js](js/data.js). Cada exercício tem:

- `name` — nome
- `sets` — número de séries (botões clicáveis)
- `reps` — texto das repetições
- `rest` — descanso
- `video` — link do YouTube
- `note` — observação (pode ficar vazio)

Depois de alterar arquivos, suba a versão em `sw.js` (`treino-calistenia-v1` → `v2`) para o navegador atualizar o cache.