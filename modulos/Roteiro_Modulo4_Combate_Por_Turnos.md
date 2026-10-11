# Roteiro — Módulo 4: Combate por Turnos (≈7 min)

**Arquivo:** trecho "Combate por Turnos" do `rpg.c`

### Fala e ações

**[0:00–0:30]**
> "Agora vem a parte mais divertida: o combate de verdade, turno a turno."

**[0:30–1:30]**
> "Primeiro, uma contagem regressiva antes da batalha. Isso usa o `for` — um laço que repete um número fixo de vezes, que a gente já sabe de antemão."

*(Ação: digitar `for (int contagem = 3; contagem >= 1; contagem--) {...}` e rodar essa parte.)*

**[1:30–2:30]**
> "Agora declaramos a vida do inimigo. O dano de cada um vem de uma divisão simples do poder por dois — conceito que já vimos no Módulo 1."

*(Ação: digitar `int vidaInimigo = 50;` e a variável `LIMITE_TURNOS`.)*

**[2:30–5:00]**
> "Aqui entra o `while` — ele repete enquanto uma condição for verdadeira, sem saber de antemão quantas vezes vai rodar. Nesse caso: enquanto os dois personagens tiverem vida."

*(Ação: digitar o `while (vida > 0 && vidaInimigo > 0 && turno <= LIMITE_TURNOS) {...}` e rodar o programa até o fim do combate, mostrando a saída turno a turno.)*

**[5:00–6:00]**
> "Por que esse `LIMITE_TURNOS`? Porque se o dano de alguém fosse zero, o `while` nunca ia parar — isso se chama loop infinito, e é um erro comum quando a gente esquece de garantir que a condição vai mudar."

**[6:00–7:00]**
> "Vamos rodar até o fim e ver quem venceu."

*(Ação: mostrar o resultado final do combate.)*

