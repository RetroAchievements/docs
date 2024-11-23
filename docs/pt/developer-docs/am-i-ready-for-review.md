---
title: Estou Pronto para Revisão Código?
description: Diretrizes abrangentes para o Programa de Desenvolvedor Júnior, incluindo regras, diretrizes e esclarecimentos.
---

# Estou Pronto para Revisão Código?

[[toc]]

Agora que você enviou seu conjunto para revisão (ou talvez ainda esteja tentando decidir se está pronto para fazê-lo), você pode estar se perguntando o que pode fazer enquanto espera ou decide.

Percorra esta lista e verifique todas as suas condições para garantir que você está seguindo estas melhores práticas e evitando estes erros comuns. Por favor, faça tudo isso enquanto espera sua revisão ser escolhida (ou antes de enviar), fazendo todas as alterações necessárias. Dessa forma, quando sua revisão for escolhida, você terá muito menos problemas para resolver e sua revisão será mais rápida.

Parece muito? Bem, a maioria dos desenvolvedores vai fazer essas coisas enquanto desenvolve conquistas, ou antes de promover seu conjunto para o core. Aborde cada parte uma por vez e avance lentamente. Sinta-se à vontade para nos fazer perguntas no `#jr-devs` sobre qualquer um dos tópicos se tiver problemas com eles.

## Use o `#jr-dev-forum`

- Toda interação com a criação, aprovação e manutenção do seu conjunto deve ser tratada por você mesmo ou através dos Revisores de Código no fórum.
- Desenvolvedores que não são Revisores de Código não podem rebaixar/promover seu trabalho ou resolver tickets para você.

## Verifique seus títulos e descrições quanto à boa formatação e gramática

Leia a [Política de Escrita](/guidelines/content/writing-policy) e certifique-se de que seus títulos, descrições e outros elementos escritos estejam em conformidade.

::: tip ASSISTÊNCIA DE ESCRITA ESTÁ DISPONÍVEL
Gramática e capitalização não são seu forte? Tendo dificuldade para criar uma descrição concisa? Passe pelo `#writing-requests-forum` no Discord e peça para eles analisarem suas conquistas enquanto você aguarda sua revisão. Eles ficarão felizes em ajudar.
:::

## Você tem badges?

- Suas conquistas precisarão de badges antes de serem adicionadas à fila.
- Eles não devem ser badges temporárias.

## Você tem boas notas de código?

Leia as diretrizes de [Notas de Código](/guidelines/content/code-notes) e certifique-se de estar seguindo todos os conselhos.

- Verifique se você tem tamanhos e valores específicos anotados (quando apropriado).
- Certifique-se de que todos os endereços usados em conquistas e leaderboards tenham uma nota de código.

## Você configurou a ordem das suas conquistas?

- No menu Dev na página do jogo, selecione Conquistas Não Oficiais, depois selecione Gerenciar Conquistas Não Oficiais no menu Dev. Você pode configurar a ordem lá.
- Ter as conquistas na ordem desejada frequentemente ajuda os revisores a analisar suas conquistas mais rapidamente, e também nos ajuda a ver melhor os pontos fortes do seu design de conjunto.

## Em quais Hubs seu jogo se encaixa?

Existe uma variedade de hubs de Gênero, Subgênero, Publicadora, Desenvolvedora, Série, Idioma e outros metadados que podem ser vinculados ao conjunto. Pense sobre quais se encaixam.

- Um revisor de código pode adicioná-los para você. Suas entradas de Publicadora, Desenvolvedora e Gênero devem corresponder aos nomes dos hubs, então faça quaisquer edições para corresponder aos hubs agora.
- Esteja preparado para discutir quaisquer outros hubs possíveis durante sua revisão.

## Seu conjunto tem Rich Presence (RP)?

**Se não tiver**, adicione! Esperamos que os Desenvolvedores Juniores ganhem experiência com Rich Presence desde seu primeiro conjunto.

- Leia o documento sobre [Rich Presence](/pt/developer-docs/rich-presence) para saber mais.
- [Sintaxe de Condições](/developer-docs/condition-syntax.html) também será útil.

### Ele tem tanto macros de lookup quanto condicionais?

- Se não, você vai querer usar pelo menos um de cada para ganhar habilidades básicas de RP.
- Macros são usados para transformar valores de endereço em texto com base no valor de um endereço e são o bloco de construção básico de um bom RP dinâmico.
- Condicionais são usados para exibir diferentes tipos de strings de RP com base no contexto do jogo.
   - O mais simples é para quando um usuário está na tela de título; você pode usar um condicional para exibir isso; geralmente os dados do jogo são inválidos quando na tela de título e podem fazer parecer estranho.
   - Se um jogo tem múltiplos modos de jogabilidade, você pode querer exibir dados completamente diferentes por modo. Condicionais permitem que você faça isso.

### Você testou seu Rich Presence?

Certifique-se de testá-lo em todos os contextos do jogo (menus, título, no jogo, em diferentes modos de jogo, início de jogo, fim de jogo) para ver se alguma vez ele exibe algo estranho.

## Alguma das suas condições usa um único endereço (ou até mesmo uma única condição total)?

Ter um único endereço pode tornar sua conquista propensa a gatilhos falsos, especialmente se um emulador inicializa a memória de forma estranha, ou se a memória tem alguma oscilação. Como resultado, queremos evitar lógica excessivamente simples.

- **Sempre** tenha mais de uma condição. Encontre um estado válido do jogo para combinar com a lógica, como "No jogo" ou "jogador tem controle". Você quer ter certeza de que o jogador está realmente em um ponto onde as outras condições são válidas.
- Se você tem mais de uma condição, mas apenas um endereço está sendo usado, fique atento às transições *"ligado para desligado"*. `Delta < X` seguido por `Mem >= X` é efetivamente ir de "ligado para desligado" com X sendo tratado como o limiar.
  - Encontre algumas outras condições para adicionar a isso para tornar esse tipo de coisa mais robusto e garantir que o jogador esteja realmente em um bom estado do jogo quando elas acontecerem.

## Você está usando Hits Armazenados (às vezes chamados de Hits Alvo)? Você tem uma maneira de Resetar esses hits armazenados?

### O que são e não são Hits Armazenados

**Hits armazenados são**: quando você especifica uma quantidade específica de hits em uma condição (ou cadeia) e a condição não é considerada verdadeira até que essa quantidade alvo de hits tenha sido atingida.

**Hits armazenados não são**: o número rolante de hits no editor de conquistas que aparece em condições sem um alvo. Esses são para rastrear quantos frames uma condição já foi verdadeira e são puramente informativos.

- Hits armazenados devem sempre ter uma maneira de serem resetados, como quando um desafio falha, quando um jogador não está mais no nível relevante, ou o jogador sofre um game over. Caso contrário, esses hits podem permanecer e causar um gatilho falso no contexto errado.
- **Solução**: Adicione uma condição ou cadeia de condições (como Com And Próximo) marcada com a flag Reset If. Quando a(s) condição(ões) for(em) verdadeira(s), os hits armazenados serão limpos.

### Você está usando hits armazenados para ajudar a verificar quando um valor muda de uma coisa para outra?

Isso é algo que você vê em conjuntos antigos de quando o kit de ferramentas era menor. Isso é quase sempre a maneira errada de fazer isso.

- **Solução**: Use a flag Delta!
  - Delta representa o valor de um endereço no frame anterior.
  - Você pode combinar `Delta address = Value valorOriginal` em uma condição e `Mem address = Value novoValor` na próxima condição e isso capturará o momento exato em que o endereço muda de *valorOriginal* para *novoValor.*

### Você está usando hits armazenados porque tem várias condições que você quer que sejam verdadeiras ao mesmo tempo para ativar a conquista?

- Os hits armazenados extras podem levar a gatilhos falsos se um deles se tornar falso, levando a tickets.
- Todas as condições sendo verdadeiras ao mesmo tempo é o comportamento padrão da lógica de conquista.
- **Solução**: Remova quaisquer hits alvo a menos que você absolutamente precise lembrar que algo aconteceu anteriormente (antes do frame atual ou anterior).

## Você Está Usando Reset If? Deveria?

Reset If é usado para limpar todos os hits armazenados (alvo). Ele não é necessário e não deve ser usado se você não estiver usando hits. Flags Reset If podem afetar o desempenho do emulador e por isso não queremos ter *"Uso Desnecessário de Reset If."*

- Usar Reset If quando você não tem hits armazenados (alvo) torna mais difícil para a equipe CR saber se você entende como hits e resets são usados.
- Se você não tem hits alvo, você não deve usar flags Reset If.
   - Reset If neste caso é usado como uma verificação "impedir que a conquista aconteça se esta condição for atendida", mas o que você quer é o equivalente "permitir que a conquista aconteça se a condição oposta for verdadeira."
  - **Solução**: Mude `Reset If Mem address = Value X` para `Mem address != X`. Esta é uma lógica equivalente e funcionará da mesma maneira.
  - Outras comparações podem ser invertidas de forma similar. > se torna <=, etc.
  - Faça isso sempre como uma melhor prática. Evite flags Reset If desnecessárias!
- Se você tem hits alvo, verifique se você **está** usando Resets para limpá-los sob condições apropriadas.

## Você está usando uma condição Pause If onde a condição Pause If não tem hits alvo?

Pause If é usado apenas para impedir que hits alvo em outras condições aumentem. Pause If pode afetar o desempenho do emulador e por isso não queremos ter *"Uso Desnecessário de Pause If."*

### Você tem outras condições com hits alvo?

- Usar Pause If quando você não tem hits armazenados (alvo) em outras condições torna mais difícil para a equipe CR saber se você entende como hits e resets são usados.
- Se você não tem hits alvo, você não deve usar flags Pause If.
   - Pause If neste caso é usado como uma verificação "impedir que a conquista aconteça se esta condição for atendida", mas o que você quer é o equivalente "permitir que a conquista aconteça se a condição oposta for verdadeira."
   - **Solução**: Mude `Pause If Mem address = Value X` para `Mem address != X`. Esta é uma lógica equivalente e funcionará da mesma maneira.
   - Outras comparações podem ser invertidas de forma similar. > se torna <=, etc.
   - Faça isso sempre como uma melhor prática. Evite flags Pause If desnecessárias.
- Se você tem hits alvo, verifique se suas condições Pause If estão sendo usadas para impedir que hits armazenados aumentem.

### O Pause If faz parte de um bloco de lógica de proteção usado em todas as suas conquistas?

Você pode estar usando Pause If em um dos seguintes tipos de proteção: proteção de save, proteção contra trapaças, proteção contra demo, etc.

- Se algumas das conquistas precisam das condições Pause If para impedir que os hits aumentem, então é aceitável deixá-las em todas as conquistas, para facilidade de manutenção e consistência.
   - Se você precisa fazer uma alteração, ela pode ser aplicada consistentemente a todas as conquistas.
   - No entanto, é uma boa ideia considerar remover as flags Pause If das conquistas onde elas não são necessárias, especialmente se o conjunto sofre com problemas de desempenho na emulação.
- Se nenhuma conquista usa hits armazenados (alvo), então você deve remover as flags Pause If.
   - **Solução**: Mude `Pause If Mem address = Value X` para `Mem address != X`. Esta é uma lógica equivalente e funcionará da mesma maneira.
   - Outras comparações podem ser invertidas de forma similar. > se torna <=, etc.
- Se não faz parte de um bloco de proteção, consulte as partes anteriores desta seção.

## Você está usando um Pause Lock?

### O que é um Pause Lock?

Um Pause Lock é uma condição (ou cadeia de condições) onde a linha Pause If tem uma quantidade alvo de hits. Quando este valor de hits é travado, o grupo (Core, Alt1, etc) não aumentará mais nenhum hit alvo e nunca será verdadeiro até que os hits na linha Pause If sejam resetados.

### Você tem uma maneira de Resetar o Pause Lock?

1. Sim, eu estou Resetando usando um Reset If no mesmo grupo (Core, Alt1, etc)
   - Infelizmente isso não vai resetar seu pause lock. Pause If tem uma prioridade maior que Reset If, então o Reset If nunca funcionará enquanto o grupo estiver travado.
   - Solução A: Mova sua(s) condição(ões) Reset If para um grupo Alt. Se você não tem grupos alt, você pode criar um único alt (deletar o segundo alt extra) e colocá-lo lá. Esse alt sempre será verdadeiro enquanto sua condição de reset não for atendida, então a conquista ainda pode ser ativada normalmente.
   - Solução B: Coloque uma condição Reset Next If (ou cadeia de condições) imediatamente antes da sua condição Pause Lock (ou cadeia de condições que termina em um Pause Lock). Reset Next If tem uma prioridade maior que a condição (ou cadeia de condições) e vai resetar esse pause lock específico.
   - Informação Bônus: Reset Next If também pode resetar os hits em outros tipos de cadeias, então você pode resetar apenas alguns hits, mas não outros.

2. Sim, eu tenho uma maneira de Resetar, seja com um Reset em outro grupo (Core, Alt1, etc) ou um Reset Next If antes do Pause Lock.
   - Ótimo! Certifique-se de ter testado que ele reseta no momento apropriado.

3. Não, eu não tenho uma maneira de Resetar o Pause Lock.
   - Eita! Se você não resetar o pause lock, a conquista ficará para sempre impossível de ser obtida a menos que o usuário resete o jogo usando o reset do console ou a menos que ele recarregue o jogo. Isso é quase sempre ruim, então queremos ter certeza de que temos um momento lógico para resetar o pause lock de uma conquista. Isso pode ser simplesmente no game over, ou morrendo e reiniciando um nível, ou na tela de título.
   - Solução A: Coloque uma condição Reset If (ou cadeia de condições) em um grupo Alt. Se você não tem grupos alt, você pode criar um único alt (deletar o segundo alt extra) e colocá-lo lá. Esse alt sempre será verdadeiro enquanto sua condição de reset não for atendida, então a conquista ainda pode ser ativada normalmente.
   - Solução B: Coloque uma condição Reset Next If (ou cadeia de condições) imediatamente antes da sua condição Pause Lock (ou cadeia de condições que termina em um Pause Lock). Reset Next If tem uma prioridade maior que a condição (ou cadeia de condições) e vai resetar esse pause lock específico.

## Você procurou por códigos de trapaça e bloqueou seu uso?

Na maioria dos casos, códigos de trapaça fornecem um benefício que torna as conquistas mais fáceis. E então você está realmente conquistando algo?

- Adicione código às suas conquistas para bloquear o uso de códigos de trapaça se você ainda não estiver fazendo isso.
- Às vezes, um código de trapaça como seleção de fase faz sentido permitir, especialmente para desafios. Exemplos: "Complete a Fase 3 sem tomar dano." A seleção de fase geralmente deve ser bloqueada para conquistas de progressão onde o jogo espera que um playthrough normal comece do início.

## Você tem conquistas para inserir um código de trapaça?

Considere fortemente removê-las colocando [VOID] no início do título delas. Estas são quase sempre designs ruins para conquistas e seu revisor de código vai sugerir o mesmo.

- Exceções: um código de trapaça que causa um efeito legal.
   - Nesses casos, você vai querer ter uma conquista que seja ativada pelo efeito legal que acontece durante a jogabilidade e não por inserir o código em si.
   - Existe um jogo do Batman para Game Boy com um código de trapaça que faz o Robin aparecer nas lutas contra chefes para te curar. Uma conquista legal foi feita para o Robin fazendo isso.

## Seu jogo tem arquivos de save ou senhas? Certifique-se de que há proteção!

- Se sim, você testou que carregar um arquivo de save (especialmente um arquivo de save do final do jogo) ou carregar de uma senha não ativa nenhuma conquista?
   1. Carregue o jogo, então ative todas as conquistas.
   2. Carregue seu arquivo de save ou insira sua senha.
   3. Algo é ativado?
      - Se sim, você precisará adicionar código para impedi-las de serem ativadas ao carregar o save.
      - Certifique-se de testar que elas ainda disparam normalmente
      - Geralmente, carregar um arquivo de save ou senha não deve impedir alguém de ganhar conquistas. Estamos apenas procurando que o carregamento do save/senha não cause a ativação das conquistas.
- Se houver arquivos de save, você testou que sua lógica funciona com todos os slots de save? Isso é um requisito para um conjunto de conquistas.
   - Se não, faça isso agora.
   - Se não funcionar com todos os slots de save, você precisará revisar sua lógica para que funcione. Geralmente há pelo menos um endereço de "slot de save ativo", e frequentemente os dados de save ativos são copiados para um local comum. Ambos os casos devem ser tratados.
- Se o sistema usa um save em um memory card, você testou que sua lógica funciona se o jogador não tiver um memory card "inserido" no emulador?

## Alguma das condições em suas conquistas depende de texto tendo um valor específico?

Se sim, é fortemente recomendado que você encontre uma alternativa. Texto pode ser instável e frequentemente varia entre versões e hashes. Isso também quase sempre torna impossível adicionar suporte a patches de tradução.

## Existem ideias de conquistas que você não incluiu por não saber como implementá-las?

- Aproveite suas habilidades melhoradas com o kit de ferramentas e familiaridade com o jogo e considere adicioná-las ao seu conjunto se for apropriado.
- Tudo bem se você não publicá-las como Não Oficiais, mas mencione-as durante sua revisão se você ainda estiver tendo problemas e ficaremos felizes em ajudá-lo a realizar suas ideias.

## Você testou todas as suas conquistas?

Sempre certifique-se de que suas conquistas podem disparar!

- Se você não é habilidoso o suficiente para fazer o desafio, você pode testar partes individuais criando conquistas fictícias para partes delas, como conclusão de nível, iniciando o desafio, tomando dano.
  - Frequentemente você também pode congelar frames de invencibilidade ou outras coisas para ajudar a testar
- Sempre certifique-se de que suas condições de falha (Reset If, Pause Locks, etc) só acontecem quando você espera.
- Tente abordar seus desafios e conquistas de direções erradas e ações malucas. Jogadores fazem todo tipo de coisa estranha. Talvez um jogador faça algo em uma ordem diferente do usual. Talvez eles atirem em algo que você não percebeu que podia ser atingido e a conquista falha inesperadamente.
   - Basicamente: **Tente quebrar suas conquistas.**
- Até que seu conjunto seja lançado, é bom escolher algumas conquistas por dia e testá-las novamente. Quanto mais você testar, menos problemas haverá quando o conjunto estiver ativo.