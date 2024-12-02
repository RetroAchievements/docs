---
title: Trabalhando com a ROM Correta
description: Diretrizes para selecionar as ROMs ideais para RetroAchievements, cobrindo considerações sobre região, revisão e formato, com dicas sobre como preservar a compatibilidade e garantir gatilhos precisos para conquistas.
---

# Trabalhando com a ROM Correta

**Relacionado:** [Conquistas para ROM Hacks](achievements-for-rom-hacks), [Subconjuntos](/guidelines/content/subsets)

[[toc]]

Apenas um conjunto de conquistas é permitido por jogo por sistema. Isso é válido para revisões oficiais existentes (ex. Rev 1), patches de correções oficiais e não oficiais e regiões alternativas.

[Subconjuntos](/guidelines/content/subsets) são uma exceção a essa regra, mas são considerados uma extensão de um conjunto padrão e seguem regras diferentes sobre os tipos de conquistas permitidas.

Exceções regionais podem existir _raramente_ quando variações regionais mudam drasticamente o jogo.

## Seleção de ROM

Quase todos os jogos têm múltiplas versões de ROM disponíveis, às vezes dezenas. Frequentemente, existem diferenças significativas que impedem a compatibilidade de conquistas entre versões. Por isso, encontrar a melhor ROM para conquistas é fundamental e deve ser feito com cuidado.

- **Seleção de Região**: Para consoles conectados à TV, escolha ROMs No-Intro (cartucho) ou Redump (disco) `NTSC USA` sempre que possível, pois 60Hz oferecem uma experiência de jogo mais suave e geralmente correspondem à velocidade de jogo pretendida. Lançamentos `PAL Europeus` funcionam a 50Hz e devem ser evitados na maioria dos casos. Lançamentos `NTSC Japoneses` também rodam a 60Hz, sendo a melhor opção apenas se o jogo foi lançado exclusivamente no Japão. Lançamentos `PAL Europeus` devem ser usados apenas como último recurso (exclusivos da Europa) e são geralmente limitados a poucos jogos _únicos_ do console. Consoles portáteis não possuem diferenças de tempo regionais, então opções de idioma devem ser priorizadas quando possível.

- **Seleção de Revisão**: Como revisões geralmente contêm correções de bugs e erros de digitação, escolha sempre a revisão final, a menos que tenha um motivo _específico_ para não fazê-lo. Isso geralmente poupa dores de cabeça para jogadores e desenvolvedores a longo prazo. Antes de trabalhar em um jogo, faça uma pesquisa rápida sobre mudanças conhecidas nas revisões e consulte o [TCRF](https://tcrf.net/) para verificar se há motivos para preferir uma revisão anterior.

- **Códigos de Anel**: Alguns sistemas, como o Sega Saturn, possuem múltiplas versões do jogo com diferentes "códigos de anel". Esses são identificadores alfanuméricos estampados no anel interno dos discos físicos. Na maioria dos casos, isso não terá efeito funcional no jogo ou no hash, mas, conforme mencionado nas revisões, verifique se há diferenças conhecidas primeiro.

- **Formato**: Para a maioria dos sistemas, isso não será um problema se você usou dumps verificados. Para o N64, em particular, os jogos podem existir em três formatos com base na ordem dos bytes no arquivo: n64 (little endian), v64 (bytes invertidos) e z64 (big endian). Apesar de produzirem hashes exclusivos, esses três formatos são idênticos para o mesmo dump. Como big endian é a representação mais precisa dos cartuchos do N64, o hash big endian (z64) _deve_ ser vinculado para qualquer jogo do N64, além do formato que você desejar usar pessoalmente como desenvolvedor. Isso garante que um único conjunto de ROMs possa ser consistentemente usado. Se necessário, [Tool64](https://gbatemp.net/download/tool-64.32494/) pode ser usado para alterar a ordem dos bytes.

- **Arcade**: ROMs de arcade são um caso especial porque o FBNeo exige o conteúdo exato do arquivo do jogo. Quando existem diferentes versões, a versão base do nome deve ser preferida em geral (por exemplo, mslug2 deve ser preferido a mslug2dg ou mslug2t). Isso é apenas uma diretriz, pois podem haver vários motivos para preferir uma versão diferente.

- **Sem Mods**: Use uma ROM limpa. Não use uma ROM com uma tela de inicialização modificada/personalizada, como Mode7 e RisingSun, pois isso altera os valores de RAM e complica a habilidade dos usuários de usar suas próprias ROMs legalmente extraídas.

- **Sem Trainers**: Não use uma ROM que inclua um recurso de trapaça integrado. Essas são frequentemente referidas como `ROM trainers` aftermarket, não são oficiais e não são de forma alguma suportadas pelo RetroAchievements. Essas ROMs não podem ser vinculadas nem como opções secundárias.

## Grupos de Preservação

[No-Intro](http://www.no-intro.org/) e [Redump](http://redump.org/) são os principais grupos responsáveis por verificar dumps limpos de jogos de console, excluindo todas as modificações e fontes não confiáveis no processo. Eles oferecem arquivos dat que podem ser usados para verificar seus próprios dumps por meio de um gerenciador de ROM. ROMs verificadas por esses grupos são preferidas sempre que possível e podem geralmente ser identificadas pelo seguinte esquema de nomeação:

**Nome do Jogo (Região) (Idiomas Disponíveis, se aplicável) (Revisão Atual, se aplicável)**  
_**Exemplo:** Diddy Kong Racing (USA) (En,Fr) (Rev 1)_

[TOSEC](https://www.tosecdev.org/) é outro grupo de preservação menos restritivo. Seus hashes frequentemente coincidem com o Redump para discos, mas contêm dumps menos minuciosamente verificados. Para disquetes, fitas cassetes e sistemas menos conhecidos, onde a verificação No-Intro e/ou Redump não está disponível, TOSEC é uma boa escolha alternativa.

Você pode verificar se o checksum da sua ROM corresponde aos bancos de dados da No-Intro, Redump ou TOSEC usando um gerenciador de ROM com um arquivo `.dat` fornecido pelo grupo preferido ou verificando o checksum manualmente e pesquisando o `.dat` em um editor de texto. Lembre-se de que, ao contrário de uma verificação manual, o gerenciador de ROM pode ignorar cabeçalhos externos para verificar a integridade com precisão. Opções recomendadas incluem [clrmamepro](https://mamedev.emulab.it/clrmamepro/) e [Romulus](https://romulus.cc/).

## Grupos Preferidos por Sistema

| ID do Sistema | Nome do Sistema                     | Grupo Preferido      |
| :-----------: | ----------------------------------- | :------------------: |
| 01            | Genesis<br>Mega Drive               | No Intro             |
| 02            | Nintendo 64                         | No Intro             |
| 03            | Super Nintendo<br>Super Famicom     | No Intro             |
| 03            | Sufami Turbo                        | No Intro             |
| 03            | Satellaview                         | No Intro             |
| 04            | Game Boy                            | No Intro             |
| 05            | Game Boy Advance                    | No Intro             |
| 06            | Game Boy Color                      | No Intro             |
| 07            | NES<br>Famicom                      | No Intro             |
| 07            | Famicom Disk System                 | No Intro             |
| 08            | TurboGrafx-16<br>PC Engine          | No Intro             |
| 08            | SuperGrafx                          | No Intro             |
| 09            | Sega CD<br>Mega CD                  | Redump               |
| 10            | Sega 32X                            | No Intro             |
| 11            | Master System<br>Mark III           | No Intro             |
| 12            | PlayStation                         | Redump               |
| 13            | Atari Lynx                          | No Intro             |
| 14            | Neo Geo Pocket                      | No Intro             |
| 14            | Neo Geo Pocket Color                | No Intro             |
| 15            | Game Gear                           | No Intro             |
| 16            | GameCube                            | Redump               |
| 17            | Atari Jaguar                        | No Intro             |
| 18            | Nintendo DS                         | No Intro             |
| 21            | PlayStation 2                       | Redump               |
| 23            | Magnavox Odyssey 2                  | No Intro             |
| 24            | Pokemon Mini                        | No Intro             |
| 25            | Atari 2600                          | No Intro             |
| 27            | Arcade                              | Final Burn Neo       |
| 28            | Virtual Boy                         | No Intro             |
| 29            | MSX (Cartuchos)                     | No Intro             |
| 29            | MSX (Disquetes)                     | TOSEC                |
| 29            | MSX2 (Cartuchos)                    | No Intro             |
| 29            | MSX2 (Disquetes)                    | TOSEC                |
| 33            | SG-1000                             | No Intro             |
| 37            | Amstrad CPC                         | Clean CPC            |
| 38            | Apple II                            | TOSEC                |
| 38            | Apple II                            | Woz A Day            |
| 39            | Sega Saturn                         | Redump               |
| 40            | Sega Dreamcast                      | Redump               |
| 41            | PlayStation Portable                | Redump               |
| 41            | PlayStation Portable                | No Intro             |
| 43            | 3DO Interactive Multiplayer         | Redump               |
| 44            | ColecoVision                        | No Intro             |
| 45            | Intellivision                       | No Intro             |
| 46            | Vectrex                             | No Intro             |
| 47            | NEC PC-8001                         | Neo Kobe             |
| 47            | NEC PC-8001                         | TOSEC                |
| 47            | NEC PC-8801                         | Neo Kobe             |
| 47            | NEC PC-8801                         | TOSEC                |
| 49            | NEC PC-FX                           | Redump               |
| 51            | Atari 7800                          | No Intro             |
| 53            | WonderSwan                          | No Intro             |
| 53            | WonderSwan Color                    | No Intro             |
| 57            | Fairchild Channel F                 | No Intro             |
| 56            | Neo Geo CD                          | Redump               |
| 63            | Watara Supervision                  | No Intro             |
| 69            | Mega Duck                           | No Intro             |
| 71            | Arduboy                             | No Intro             |
| 72            | WASM-4                              | Homebrew             |
| 72            | WASM-4                              | Lost Level Archive   |
| 73            | Arcadia 2001                        | No Intro             |
| 74            | Interton VC 4000                    | No Intro             |
| 75            | Elektor TV Games Computer           | -                    |
| 76            | TurboGrafx-CD<br>PC Engine CD       | Redump               |
| 77            | Atari Jaguar CD                     | Redump               |
| 78            | Nintendo DSi                        | No Intro             |
| 80            | Uzebox                              | Homebrew             |
| 80            | Uzebox                              | Lost Level Archive   |

## Patches de Tradução

(consulte também: [Política de Localização de ROMs](#Política-de-Localização-de-ROMs) abaixo)

O inglês é o idioma principal do RetroAchievements. Patches de tradução são às vezes aplicados por desenvolvedores a títulos não traduzidos para o inglês como o hash principal de um conjunto de conquistas quando não existe uma versão licenciada em inglês. Nesses casos, as instruções de aplicação do patch serão fornecidas no tópico do fórum desse título. Sempre que possível, a versão original sem o patch também deve ser suportada.

Às vezes, patches de tradução podem produzir diferenças críticas na memória em relação aos hashes vinculados. Todos os hashes vinculados devem ser totalmente compatíveis com _todo_ o conjunto de conquistas. Se você não puder garantir isso pessoalmente, não vincule o hash.

Se você não for o desenvolvedor original do conjunto em questão e o desenvolvedor estiver ativo, verifique a memória pessoalmente usando o modo de teste e entre em contato com o desenvolvedor antes de tentar adicionar uma nova tradução.

## Política de Localização de ROMs

Como o inglês é o idioma principal da comunidade, ROMs em inglês são preferidas. Ao escolher qual ROM usar para criar conquistas, damos prioridade a **ROMs dos EUA verificadas pelo No-Intro ou Redump para consoles não portáteis** e **ROMs europeias para consoles portáteis**.

Queremos continuar melhorando nosso suporte para todas as versões regionais, especialmente as japonesas (já que a maioria da nossa biblioteca de jogos foi criada no Japão). Alguns usuários também podem preferir uma versão regional específica de um jogo, e é melhor incluir suporte amplo para que qualquer boa ROM possa ser vinculada a uma entrada válida e conceder as conquistas apropriadas. Dito isso, variantes regionais ainda precisam ser totalmente suportadas, e problemas de lentidão em 50Hz precisam ser mitigados (via patches adicionais) ou provados como não problemáticos.

Quando analisamos como lidar com jogos que possuem versões regionais, nosso padrão é **uma entrada por jogo por sistema**. É ideal que, se um jogador carregar a versão dos EUA ou japonesa de Donkey Kong, Pac-Man ou Contra, ele ganhe as mesmas conquistas da mesma entrada. Conforme mencionado acima, há algumas situações extremamente raras em que é melhor para nossa biblioteca e jogadores dividir versões regionais em entradas exclusivas. Se a comunidade tiver motivos para acreditar que é melhor dividir uma entrada, ela poderá ser revisada e aprovada pela equipe do RetroAchievements.

**Dica:** Para jogos com conquistas acionadas por texto (especialmente RPGs), recomenda-se encontrar uma flag de evento em vez de vincular conquistas a texto ou IDs de texto. A apresentação de texto varia entre versões regionais, dificultando o suporte multirregional.

### Diferenças de Localização

Os tipos de alterações feitas durante a localização (mais comumente do japonês para o inglês) podem variar enormemente. Qualquer uma das seguintes mudanças pode ocorrer devido à localização:

- Pouca ou nenhuma alteração;
- Senhas substituindo baterias de salvamento;
- Correção de bugs;
- Traduções leves ou extensas;
- Alterações cosméticas leves ou extensas, incluindo censura de elementos "ofensivos", mudanças de efeitos sonoros, substituição de ativos licenciados por genéricos e/ou personagens desconhecidos sendo adaptados ao estilo da Nintendo (por exemplo, Tetris Attack, Super Mario Bros. 2);
- Fases adicionadas, modificadas ou removidas;
- Física do jogo e mecânicas de jogo modificadas;
- Modos de jogo, níveis de dificuldade e opções de jogo adicionados ou removidos;
- Códigos de trapaça ou modos de depuração adicionados ou removidos;
- Rebalanceamento do jogo resultando em uma experiência mais difícil ou mais fácil, às vezes significativamente;
- Dois jogos combinados em um;
- E mais.

Devido a essa variação e para evitar preencher o banco de dados com duplicatas desnecessárias, nosso objetivo é minimizar o número de conjuntos divididos. Para que um conjunto seja dividido, ele precisa de razões convincentes; tomamos muito cuidado ao determinar quando aprovar essas divisões.
