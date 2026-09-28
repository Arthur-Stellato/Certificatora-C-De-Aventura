# Roteiro — Módulo 3: A Bifurcação da Masmorra (≈6 min)

**Arquivo:** trecho "A Bifurcação da Masmorra" do `rpg.c`

### Fala e ações

**[0:00–0:30]**
> "O herói andou pela masmorra e chegou numa bifurcação. Ele precisa escolher um caminho."

**[0:30–1:30]**
> "A gente lê a escolha do jogador com `scanf`, guardando num inteiro: 1 para esquerda, 2 para direita."

*(Ação: digitar `int escolha;` e o `scanf("%d", &escolha);`.)*

**[1:30–2:30]**
> "Com `if`, `else if` e `else`, a gente trata as três possibilidades: caminho 1, caminho 2, ou uma opção inválida."

*(Ação: digitar a estrutura `if (escolha == 1) {...} else if (escolha == 2) {...} else {...}`.)*

**[2:30–4:30]**
> "Repara numa coisa: dentro do caminho da esquerda, tem um segundo `if` — isso é decisão composta. O resultado não depende só da escolha do caminho, mas também da vida do herói naquele momento."

*(Ação: digitar o `if (vida >= 80) {...} else {...}` aninhado dentro do caminho 1.)*

**[4:30–5:30]**
> "Vamos rodar os três cenários: caminho 1 com vida alta, caminho 1 com vida baixa, e caminho 2."

*(Ação: rodar o programa três vezes, mudando a escolha.)*

**[5:30–6:00] Gancho**
> "Até agora só tivemos um golpe. Mas e se fosse uma batalha de verdade, com vários turnos? Isso é o próximo módulo."

