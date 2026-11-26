<div align="center">

<img src="docs/logo.jpg" alt="Logo do C de Aventura: mapa do tesouro" width="160">

# C de Aventura

### Aprendendo Lógica de Programação Construindo um RPG de Texto em C

Projeto de Extensão — Disciplina Certificadora de Competência Comum<br>
Curso-base: **Introdução à Programação** (Bloco 1)

**[Site](https://arthur-stellato.github.io/Certificatora-C-De-Aventura/)** · **[YouTube](https://www.youtube.com/channel/UCHi5oqUjh3_k1XFBpOWMyuA)** · **[Videoaulas](#videoaulas)** · **[Como jogar](#como-compilar-e-rodar)** · **[Equipe](#equipe)**

</div>

---

## Videoaulas

| # | Módulo | Vídeo | Roteiro |
|---|---|---|---|
| 1 | Criação do Personagem | [Assistir](https://www.youtube.com/watch?v=_BRQOZ8YtFo) | [Ler](modulos/Roteiro_Modulo1_Criacao_de_personagem.md) |
| 2 | Teste de Sorte | [Assistir](https://www.youtube.com/watch?v=UgEmxTRcQ2o) | [Ler](modulos/Roteiro_Modulo2_Teste_de_sorte.md) |
| 3 | A Bifurcação da Masmorra | [Assistir](https://www.youtube.com/watch?v=K2Fxip7252g) | [Ler](modulos/Roteiro_Modulo3_Birfurca%C3%A7%C3%A3o.md) |
| 4 | Combate por Turnos | [Assistir](https://www.youtube.com/watch?v=cFLDoun_t8E) | [Ler](modulos/Roteiro_Modulo4_Combate_Por_Turnos.md) |
| 5 | Grimório de Habilidades | [Assistir](https://www.youtube.com/watch?v=NSq1FY9_Dgs) | [Ler](modulos/Roteiro_Modulo5_Funcoes.md) |
| 6 | Inventário e Mapa da Masmorra | [Assistir](https://www.youtube.com/watch?v=8f3cAccQje0) | [Ler](modulos/Roteiro_Modulo6_Inventario_e_Mapa.md) |
| 7 | Ficha Completa do Herói | [Assistir](https://www.youtube.com/watch?v=Jv1WXDK5dC4) | [Ler](modulos/Roteiro_Modulo7_Ficha_do_Heroi.md) |

---

## Como Compilar e Rodar

```bash
gcc -Wall -o rpg rpg.c
./rpg
```

> [!TIP]
> No Windows (PowerShell), execute com `.\rpg.exe`. Na masmorra, use `w`, `a`, `s`, `d` para andar até o tesouro (`T`).

---

## Objetivo Geral

Desenvolver um Recurso Educacional Aberto (REA) que ensine os fundamentos da programação em C para pessoas sem experiência prévia, usando como fio condutor a construção progressiva de **um RPG de texto rodando no terminal**. Cada conceito técnico da ementa vira, na prática, uma peça funcional do jogo — o aluno-espectador não apenas assiste, ele constrói o jogo junto, módulo a módulo.

Essa escolha atende diretamente à exigência de que o código seja o núcleo do ensino, e não um acessório: aqui, o próprio jogo sendo construído é o material didático.

---

## Objetivos Específicos

- Produzir 7 videoaulas curtas (5–7 min), uma por módulo, gravadas no Google Meet.
- Publicar o texto teórico de cada módulo no site (GitHub Pages), narrando o conceito antes da prática.
- Manter este repositório com o código do RPG evoluindo commit a commit.
- Garantir acessibilidade em 100% do material (legendas, alt-text, navegação por teclado, labels).

---

## Mapeamento de Conteúdo → Mecânica do Jogo

| # | Tópico da Ementa | Mecânica do RPG | Conceitos de C |
|---|---|---|---|
| 1 | Constantes, variáveis, tipos, E/S, expressões aritméticas | Criação do Personagem | `int`, `float`, `char`, `scanf`/`printf`, operadores aritméticos |
| 2 | Expressões relacionais e lógicas | Teste de Sorte | `>`, `<`, `==` |
| 3 | Estrutura de decisão simples e composta | A Bifurcação da Masmorra | `if`, `else if`, `else` |
| 4 | Estruturas de repetição (contador e condicional) | Combate por Turnos | `for`, `while` |
| 5 | Modularização: funções | Grimório de Habilidades | Funções com/sem retorno, parâmetros |
| 6 | Vetores e matrizes | Inventário e Mapa da Masmorra | Arrays 1D e 2D |
| 7 | Variáveis compostas heterogêneas | Ficha Completa do Herói | `struct Personagem` |

Ao final do módulo 7, o REA entrega um jogo funcional — o código guia a teoria de forma coesa, do início ao fim.

---

## O Tripé do Projeto (Texto + Vídeo + Código)

Cada módulo segue o mesmo padrão:

- **Texto** (no site): explica o conceito, o problema que ele resolve no jogo e os pré-requisitos.
- **Vídeo** (5–7 min): tela compartilhada, código escrito ao vivo, legenda revisada.
- **Código**: commit correspondente neste repositório, com o trecho do RPG funcionando ao final do módulo.

---

## Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| **C (GCC)** | Linguagem principal do projeto — todo o RPG é implementado em C, compilado com `gcc -Wall` |
| **Git & GitHub** | Controle de versão e hospedagem do repositório aberto (código, histórico de commits) |
| **Kanban Via GitHub** | [Quadro do projeto](https://github.com/users/Arthur-Stellato/projects/3) |
| **GitHub Pages** | Hospedagem do site do projeto |
| **YouTube** | Publicação das videoaulas |
| **Markdown** | Formatação do conteúdo textual do REA |
| **Google Meet** | Gravação das videoaulas, aproveitando a legenda automática nativa para acessibilidade |

O projeto é desenvolvido majoritariamente com a biblioteca padrão do C (`stdio.h`). Outras bibliotecas padrão (como `string.h` ou `stdlib.h`) poderão ser incorporadas conforme a necessidade de módulos específicos, sempre priorizando simplicidade e poucas dependências, para que qualquer pessoa com um compilador C consiga rodar o código sem complicações.

---

## Acessibilidade

Este projeto segue um checklist de acessibilidade em todos os módulos:

- [x] Legendas revisadas manualmente em todos os vídeos
- [x] Alt-text em todas as imagens e diagramas
- [x] Navegação 100% via teclado no site
- [x] Labels em todo campo, link e botão do site

---

## Equipe

- Arthur Gabriel Teotonio Stellato
- Conrado Henrique Lima Da Mata
- João Felipe Aleixo de Melo
- Reinan Cordeiro Morais

---

<details>
<summary><b>Equipe e Distribuição de Horas (120h por pessoa)</b></summary>
<br>

**Atividades compartilhadas (77h para cada integrante):**
Reuniões semanais, planejamento, estudo da ementa, codificação dos 7 módulos, revisão final.

**Atividades individuais (43h cada):**

| Responsável | Frente |
|---|---|
| Arthur | Gravação das 7 videoaulas, revisão e edição de legendas e testes de qualidade dos vídeos |
| Conrado | Criação e estilização do site (GitHub Pages), testes de acessibilidade e ajustes de responsividade |
| João | Estruturação e organização do repositório GitHub, documentação técnica e controle de versão |
| Reinan | Design do RPG, redação do texto teórico dos 7 módulos e roteiro dos vídeos |

</details>

<details>
<summary><b>Cronograma</b></summary>
<br>

| Fase | Período | Entrega |
|---|---|---|
| Planejamento | até 06/09/2026 | Proposta e repositório |
| Desenvolvimento | 07/09 a 22/11/2026 | Módulos 1 a 7 (código + vídeo + texto) |
| Apresentação parcial | 16/10/2026 | Módulos 1 a 4 |
| Entrega final | 30/11/2026 | Projeto completo |

</details>

<details>
<summary><b>Estrutura do Repositório</b></summary>
<br>

```
/
├── README.md         → este arquivo
├── docs/logo.jpg     → logo do projeto
├── rpg.c             → código-fonte do RPG (evolui a cada módulo)
├── modulos/          → roteiros dos 7 módulos
└── videos/           → links para as videoaulas
```

O código do site fica na branch `pages`.

</details>

---

<div align="center">

*Projeto de extensão vinculado ao tema "Ensino Lúdico de Lógica e Programação".*

</div>
