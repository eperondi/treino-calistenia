# Treino Calistenia

Acompanhamento do plano de calistenia de Emerson e Joselene. O site marca séries, mostra o vídeo do exercício, conta o tempo de descanso ou de isometria e sincroniza o progresso entre o computador e o celular.

Publicado em [eperondi.github.io/treino-calistenia](https://eperondi.github.io/treino-calistenia/).

## Estrutura

```
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
        └── icon-maskable-512.png
```

O `sw.js` fica na raiz. Em outra pasta, o modo offline deixa de funcionar.

## O plano

Cinco níveis, cada um com quatro semanas e quatro dias:

| Nível | Conteúdo |
|---|---|
| Básico | Plano original da planilha |
| Iniciante | Base, controle corporal e padrões |
| Intermediário | Empurrar e puxar com o peso do corpo |
| Intermediário-avançado | Transição, explosão e força unilateral |
| Avançado | Alavancas e força máxima |

O nome do exercício fica em português (`name`). O nome em inglês fica na anotação (`note`).

## Como usar

- **Emerson** e **Joselene** têm progresso separado.
- Escolha o nível e a semana.
- Toque no número da série para marcar ou desmarcar.
- **Descanso** conta o intervalo. **Tempo** aparece quando a repetição é em segundos.
- **▶ Vídeo** abre o YouTube dentro do site. Vídeos curtos podem não tocar sem login; use um tutorial normal (`https://youtu.be/...`).
- **Marcar dia** completa ou desfaz todos os exercícios daquele dia.
- **Zerar progresso deste usuário** apaga só o perfil ativo, também na nuvem.

O progresso fica no `localStorage` e é espelhado no Firestore (`progress/emerson` e `progress/joselene`). Sem internet, continua salvo no aparelho e sobe quando a conexão volta.

## Publicar

O GitHub Pages deste repositório usa a branch `master` e a pasta raiz. Depois do `git push`, espere a aba **Actions** ficar verde e recarregue o site. O service worker busca a versão nova e atualiza a página.

## Editar os treinos

Os treinos estão em [js/data.js](js/data.js), nesta ordem:

`levels` → `weeks` → `days` → `exercises`

Cada exercício tem:

- `name` — nome em português
- `sets` — número de séries
- `reps` — repetições, ou segundos (a palavra `segundos` liga o cronômetro de tempo)
- `rest` — descanso (o primeiro número liga o cronômetro)
- `video` — link do YouTube, ou vazio para esconder o botão
- `note` — nome em inglês

Não mude o `id` de um dia que já foi treinado. O progresso é gravado com esse id.

Ao alterar `js/app.js`, `js/data.js` ou `style/styles.css`, suba o `?v=` desses arquivos no [index.html](index.html) e o `CACHE_NAME` no [sw.js](sw.js) (`treino-calistenia-v3` → `v4`).
