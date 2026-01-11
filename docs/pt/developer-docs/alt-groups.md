---
title: Utilizando Grupos Alternativos para Requisitos de Conquistas
description: Aprenda a usar Grupos Alternativos para criar requisitos alternativos para desbloquear conquistas, incluindo exemplos, fatos e técnicas avançadas para resets condicionais.
---

# Grupos Alternativos (Grupos Alt)

As conquistas podem ter grupos adicionados a elas que permitem requisitos alternativos para desbloquear uma conquista. Estes são chamados de _Grupos Alt_.

Ao usar _Grupos Alt_, para que a conquista seja ativada, todas as condições no _Grupo Core_ DEVEM ser verdadeiras. E então todas as condições de QUALQUER _Grupo Alt_ devem ser verdadeiras. Em outras palavras, cada _Grupo Alt_ usa lógica `OR` (OU).

## Exemplo

Neste exemplo fictício para Contra (NES), a conquista requer "Enquanto estiver em um estágio, olhe para cima ou agache". Vamos ver o que está no _Grupo Core_ e nos _Grupos Alt_:

![Alt Groups: Core](/public/alt-groups-core.png)
No grupo core: `0x18 = 5`. Isso verifica se o jogador está em um estágio.

![Alt Groups: Alt1](/public/alt-groups-alt1.png)
No `Alt 01`: `0xbc = 1`. Isso verifica se o jogador está olhando para cima.

![Alt Groups: Alt2](/public/alt-groups-alt2.png)
No `Alt 02`: `0xbc = 2`. Isso verifica se o jogador está agachado.

Desde que o jogador esteja em um estágio, o grupo core é verdadeiro. Se o jogador olhar para cima, Alt 01 é verdadeiro. Se o jogador agachar, Alt 02 é verdadeiro. Se core + Alt 01 OU Alt 02 forem verdadeiros, a conquista será ativada.

## Fatos sobre Grupos Alt

- Para adicionar ou remover _Grupos Alt_, clique no botão `+` ou `-` no canto inferior esquerdo do editor de conquistas.  
  ![Alt Groups: Add or remove](/public/alt-groups-add.png)

- Se você quiser simplesmente testar **isto** `OU` **aquilo**, você pode deixar o grupo core vazio e adicionar **isto** no `Alt 01` e **aquilo** no `Alt 02`.

- Não importa quantos `Grupos Alt` uma conquista tenha, se o Grupo Core for verdadeiro, apenas um Alt precisa ser verdadeiro para a conquista ser ativada.

- Ao usar [ResetIf](#resetif) e [PauseIf](#pauseif), PauseIf só pausa o grupo em que está, mas ResetIf reinicia os contadores de hits em todos os grupos e impede que as conquistas sejam ativadas enquanto o reset estiver ativo.

## Usando Grupos Alt para Resets Condicionais

**Avançado:** Um _Grupo Alt_ pode ser usado para criar uma condição ResetIf que só está ativa em alguns momentos.

Se você criar um _Grupo Alt_ contendo uma condição PauseIf e uma condição ResetIf, você pode usar a condição PauseIf para desabilitar a condição ResetIf em certas circunstâncias sem desabilitar a conquista inteira.

- O Reset ainda afetará todos os grupos, incluindo seu grupo core. O Pause só pausará o _Grupo Alt_ que contém o PauseIf.

- Esta lógica pode ser aplicada a vários _Grupos Alt_ na mesma conquista para proteger várias instruções Reset separadas.

- **Certifique-se** de ter pelo menos um _Grupo Alt_ que será verdadeiro ou a conquista não será ativada. A maneira mais fácil de fazer isso é criar um grupo alt extra que tenha uma condição que seja `Value 1 = Value 1`.

- **Cuidado**: Se sua condição Pause for falsa, e a condição Reset também for falsa, o grupo será considerado verdadeiro a menos que você tenha outra condição sempre falsa no grupo. Ao usar um _Grupo Alt_ para segregar um PauseIf, certifique-se de incluir uma condição sempre falsa como `Value 1 = Value 0`.
