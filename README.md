<div align="center">

<img src="img/logo.jpg" alt="Logo do C de Aventura: mapa do tesouro" width="120">

# C de Aventura — Site

Branch `pages`: código do site do projeto.

**[Acessar o site](https://arthur-stellato.github.io/Certificatora-C-De-Aventura/)** · **[Repositório principal](https://github.com/Arthur-Stellato/Certificatora-C-De-Aventura/tree/main)** · **[YouTube](https://www.youtube.com/channel/UCHi5oqUjh3_k1XFBpOWMyuA)**

</div>

---

## O que tem no site

- As 7 videoaulas em um mapa, cada uma em um local, com player embutido.
- Textos teóricos dos 7 módulos.
- Objetivos, identidade visual, trajetória e equipe.
- Modo claro e escuro.

Feito com HTML, CSS e JavaScript puros, sem dependências para instalar nem etapa de build.

## Como rodar localmente

O site usa módulos JavaScript, então abrir o `index.html` direto no navegador não funciona. Na pasta do projeto:

```bash
python -m http.server 8000
```

Depois acesse <http://localhost:8000>.

## Estrutura

```
/
├── index.html        → página, incluindo os textos teóricos
├── css/style.css     → estilos e cores
├── img/logo.jpg      → logo
└── js/
    ├── main.js       → ponto de entrada
    ├── aulas.js      → links e descrições das videoaulas
    ├── alunos.js     → equipe
    ├── trajetoria.js → linha do tempo
    ├── config.js     → locais e ícones do mapa
    ├── ui.js         → cartões das aulas
    ├── modal.js      → janela com o player
    ├── theme.js      → modo claro e escuro
    ├── about.js      → seção Sobre
    ├── contact.js    → seção Time
    ├── admin.js      → Painel do Mestre
    ├── api.js        → comunicação com o servidor
    ├── state.js      → estado compartilhado
    └── utils.js      → funções auxiliares
```

## Como atualizar o conteúdo

| O que mudar | Onde |
|---|---|
| Vídeo, título ou descrição de uma aula | `js/aulas.js` |
| Texto teórico | `index.html`, seção `teoria` |
| Integrantes e links | `js/alunos.js` |
| Linha do tempo | `js/trajetoria.js` |
| Cores | variáveis no início de `css/style.css` |

> [!NOTE]
> O Painel do Mestre precisa de um servidor com as rotas `api/`, que não faz parte desta branch. Sem ele, como no GitHub Pages, o painel fica escondido e o site usa as aulas de `js/aulas.js`.

## Licença

Código sob [MIT](https://github.com/Arthur-Stellato/Certificatora-C-De-Aventura/blob/main/LICENSE). Conteúdo sob [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.pt-br).
