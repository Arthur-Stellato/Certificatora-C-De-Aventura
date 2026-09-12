# C de Aventura

### Aprendendo Lógica de Programação Construindo um RPG de Texto em C

Projeto de Extensão — Disciplina Certificadora de Competência Comum
Curso-base: **Introdução à Programação** (Bloco 1)

---

## Equipe

- Arthur Gabriel Teotonio Stellato
- Conrado Henrique Lima Da Mata
- João Felipe Aleixo de Melo
- Reinan Cordeiro Morais

---

## Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| **C (GCC)** | Linguagem principal do projeto — todo o RPG é implementado em C, compilado com `gcc -Wall` |
| **Git & GitHub** | Controle de versão e hospedagem do repositório aberto (código, histórico de commits) |
| **Kanban Via GitHub** | https://github.com/users/Arthur-Stellato/projects/3 |
| **GitHub Pages** | Hospedagem desta página e do texto teórico de cada módulo |
| **Markdown** | Formatação do conteúdo textual do REA |
| **Google Meet** | Gravação das videoaulas, aproveitando a legenda automática nativa para acessibilidade |

O projeto é desenvolvido majoritariamente com a biblioteca padrão do C (`stdio.h`). Outras bibliotecas padrão (como `string.h` ou `stdlib.h`) poderão ser incorporadas conforme a necessidade de módulos específicos, sempre priorizando simplicidade e poucas dependências, para que qualquer pessoa com um compilador C consiga rodar o código sem complicações.

---

## 1. Objetivo Geral

Desenvolver um Recurso Educacional Aberto (REA) que ensine os fundamentos da programação em C para pessoas sem experiência prévia, usando como fio condutor a construção progressiva de **um RPG de texto rodando no terminal**. Cada conceito técnico da ementa vira, na prática, uma peça funcional do jogo — o aluno-espectador não apenas assiste, ele constrói o jogo junto, módulo a módulo.

Essa escolha atende diretamente à exigência de que o código seja o núcleo do ensino, e não um acessório: aqui, o próprio jogo sendo construído é o material didático.

## 2. Objetivos Específicos

- Produzir 7 videoaulas curtas (5–7 min), uma por módulo, gravadas no Google Meet.
- Publicar o texto teórico de cada módulo nesta página (GitHub Pages), narrando o conceito antes da prática.
- Manter este repositório com o código do RPG evoluindo commit a commit.
- Garantir acessibilidade em 100% do material (legendas, alt-text, navegação por teclado, labels).

---

## 3. Mapeamento de Conteúdo → Mecânica do Jogo

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

## 4. O Tripé do Projeto (Texto + Vídeo + Código)

Cada módulo segue o mesmo padrão:

- **Texto** (nesta página): explica o conceito, o problema que ele resolve no jogo e os pré-requisitos.
- **Vídeo** (5–7 min): tela compartilhada, código escrito ao vivo, legenda revisada.
- **Código**: commit correspondente no [repositório](.), com o trecho do RPG funcionando ao final do módulo.

---

## 5. Acessibilidade

Este projeto segue um checklist de acessibilidade em todos os módulos:

- [x] Legendas revisadas manualmente em todos os vídeos
- [x] Alt-text em todas as imagens e diagramas
- [x] Navegação 100% via teclado nesta página
- [x] Labels em todo campo, link e botão do site

---

## 6. Equipe e Distribuição de Horas (120h por pessoa)

**Atividades compartilhadas (77h para cada integrante):**
Reuniões semanais, planejamento, estudo da ementa, codificação dos 7 módulos, revisão final.

**Atividades individuais (43h cada):**

| Responsável | Frente |
|---|---|
| Arthur | A Definir |
| Conrado | A Definir |
| João | A Definir |
| Reinan | A Definir |

---

## 7. Cronograma

| Fase | Período | Entrega |
|---|---|---|
| Planejamento | até 06/09/2026 | Proposta e repositório |
| Desenvolvimento | 07/09 a 22/11/2026 | Módulos 1 a 7 (código + vídeo + texto) |
| Apresentação parcial | 16/10/2026 | Módulos 1 a 4 |
| Entrega final | 30/11/2026 | Projeto completo |

---

## Estrutura do Repositório

```
/
├── index.md          → esta página
├── rpg.c             → código-fonte do RPG (evolui a cada módulo)
├── modulos/          → texto teórico de cada um dos 7 módulos
└── videos/           → links para as videoaulas
```

## Como Compilar e Rodar

```bash
gcc -Wall -o rpg rpg.c
./rpg
```

---

*Projeto de extensão vinculado ao tema "Ensino Lúdico de Lógica e Programação".*
