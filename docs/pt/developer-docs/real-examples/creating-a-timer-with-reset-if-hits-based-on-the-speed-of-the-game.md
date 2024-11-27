---
title: Criando um Temporizador com `ResetIf` Hits Baseado na Velocidade do Jogo
description: Aprenda a criar temporizadores precisos no jogo usando a flag ResetIf para considerar a taxa de quadros do jogo, permitindo mecanismos de temporização precisos para conquistas em vários cenários de jogo.
---

# Criando um Temporizador com `ResetIf` Hits Baseado na Velocidade do Jogo

Neste exemplo, você aprenderá como criar um Temporizador no jogo baseado na taxa de quadros (framerate) do jogo.

Todo jogo tem um endereço que está constantemente aumentando, ele funciona como um motor em um carro que está constantemente em movimento, independentemente do que você faz, e começa assim que você inicia o jogo. O jogo em si é seu carro, e alguns carros são mais rápidos que outros.

> Por favor, note que jogos PAL (50hz) têm uma taxa de quadros menor que jogos NTSC (60hz) e não são compatíveis com este método. É recomendado criar todos os Temporizadores baseados na versão NTSC do jogo, a menos que a versão PAL seja a única existente e não haja Patch NTSC disponível.

## Endereços

- `0x19`: Modo Demo: `01`=Ativo, `00`=Inativo
- `0x1a`: Motor do Jogo (velocidade baseada na taxa de quadros)
- `0x25`: Jogo Pausado: `01`=Sim, `00`=Não
- `0x2c`: Progressão do Jogo: `03`=Antes do Estágio começar, `04`=Estágio iniciado, `08`=Estágio finalizado
- `0x30`: ID do Estágio (neste exemplo, Estágio 1)

![Configuração da conquista do temporizador de Contra no editor](/public/contra-timer-achievement-editor.png)

Link para a Conquista: [Contra Speedrun](https://retroachievements.org/achievement/65443)

YouTube: [ResetIfHits Demo: Contra Estágio 1 60 segundos Speedrun](https://youtu.be/6PpdG04tM4s)

## Conditions

1. Ativa o 'Hit' da Conquista ao entrar em um Estágio (`03` só aparece uma vez em cada Estágio).

2. Ativa a Conquista quando um Estágio foi finalizado.

3. Estágio Atual (neste exemplo, Estágio 1).

4. Pausa a Conquista se o Jogo estiver 'Pausado' (Para o Temporizador na Conquista).

5. Reseta a Conquista se `60` segundos `3600` Hits forem atingidos. `1` segundo = `60Hits` (NTSC 60fps), `50Hits` (PAL 50fps).

6. Reseta a Conquista se o `Modo Demo` estiver ativo.

7. Reseta o Temporizador da Conquista ao entrar em um novo Estágio.
