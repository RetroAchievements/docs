## Dicas Específicas do Console

**Link para texto em inglês:** [Console Specific Tips](/developer-docs/console-specific-tips)

---

Ao escavar a memória desses antigos consoles, ajuda saber em primeiro lugar com o que os criadores originais dos jogos estavam trabalhando. Se você se familiarizar com as peculiaridades do seu console favorito, a configuração será mais fácil e precisa.

## NES (RANes)

![NES memory mirror](/public/nes-mem-mirror.png)

## Game Boy (RAVBA)

### Mapa de memória

Determinadas variedades de valores significam coisas diferentes no contexto do hardware do Game Boy, portanto, ter um mapa pode ajudá-lo a eliminar endereços inúteis. Aqui está o resumo:

- ❌ **0x0000 - 0x7FFF: Dados da ROM** (normalmente não há razão para usar. Se você for um desenvolvedor super dedicado, poderá usar o valor de 16 bits em 0x14E junto com os grupos alt para oferecer suporte a várias versões / regiões da ROM)
- ❌ **0x8000 - 0x9FFF: Dados gráficos** (algumas coisas aqui podem estar correlacionadas com o que você está procurando, se você estiver tentando encontrar uma ID ou animação de mapa, mas sempre haverá uma maneira melhor de lidar com o que você está fazendo do que usando qualquer um deles)
- ✔️ **0xA000 - 0xBFFF: Cartridge RAM** (ou seja, salvar dados. Às vezes, usar esses endereços será inevitável, mas o seu conjunto pode ser propenso a fazer batota ao carregar arquivos salvos em 100%. Mais informações sobre como proteger contra arquivos salvos)
- ✔️ **0xC000 - 0xDFFF: RAM de trabalho** (as coisas boas; quase tudo que você deve usar cairá dentro deste intervalo)
- ❌ **0xE000 - 0xFDFF: ECHO RAM** (não use, veja abaixo)
- ❌ **0xFE00 - 0xFE9F: Mais dados gráficos** (igual aos dados gráficos acima)
- ❌ **0xFEA0 - 0xFFFF: Diversos** (não use)

Para mais informações, consulte: [http://gameboy.mongenel.com/dmg/asmmemmap.html](http://gameboy.mongenel.com/dmg/asmmemmap.html) `texto em inglês`

### ECHO RAM

![Echo RAM](/public/echo-ram.png)

Similarmente ao NES, certas variáveis podem aparecer duas vezes ao pesquisar no Memory Inspector. O segundo resultado está no que é chamado de RAM ECHO, que é um espelho da memória real. Como alguns emuladores tendem a ignorar essa área ou emular incorretamente, recomenda-se NÃO usá-la e sempre usar o primeiro resultado.

O Game Boy tem 4KB de RAM a partir de 0xC000. ECHO RAM começa em 0xE000, então se o seu endereço começar com um E você vai querer substituir o primeiro caractere diferente de zero por um C. Lembre-se: C está correto, E é echo!

## Nintendo 64 (RAP64)

### Usando códigos GameShark para endereços

Os códigos GameShark podem ser um recurso valioso para encontrar endereços que você não pode ou não deseja encontrar. Eles têm 12 caracteres por linha e são fáceis de analisar.

`[AA] [BBBBBB] [CCCC]`

[AA] é o tipo de código. Esta é uma breve instrução para o GameShark que define o que fazer com o próximo valor. Se você entende o código do GameShark, você pode usá-lo para ajudar na criação de condições.

- **80, 88:** O endereço é de 8 bits. Define o valor [00CC] para o endereço [BBBBBB].
- **81, 89:** O endereço é de 16 bits. Define o valor [CCCC] para o endereço [BBBBBB].
- **D0:** o endereço é de 8 bits. Verifica se [00CC] é igual ao valor no endereço [BBBBBB] e, em seguida, executa a próxima linha, se for.
- **D2:** o endereço é de 8 bits. Verifica se [00CC] é DIFERENTE para o valor no endereço [BBBBBB] e, em seguida, executa a próxima linha, se for.
- **D1:** o endereço é de 16 bits. Verifica se [CCCC] é igual ao valor no endereço [BBBBBB] e executa a próxima linha, se for.
- **D3:** o endereço é de 16 bits. Verifica se [CCCC] é DIFERENTE para o valor no endereço [BBBBBB] e, em seguida, executa a próxima linha, se for.

aqui estão alguns exemplos:

- Paper Mario: HP infinito:

`[80] [10F292] [0032]`

Define o valor de 8 bits em 0x10F292 para 0x32 (50). Então, isso significa que o HP de Mario é um valor de 8 bits em 0x10F292.

- Donkey Kong 64: Jogando com Rambi:

`[80][74E77C] [0006]`

Define o valor de 8 bits em 0x74E77C para 6. Portanto, isso significa que o caractere que você está jogando é um valor de 8 bits em 0x74E77C.

- Chameleon Twist 2: Seguro L para Moon Jump:

`[D0][18BAB5] [0020] <- Looking at this one`

`[81][18B9E0] [4200]`

Verifica se o valor de 8 bits em 0x18BAB5 é igual a 0x20. Isso significa que 0x18BAB5 contém uma variável de pressionamento de botão e Bit5 (0x20) corresponde a L.

[Anti-GSC](https://viper.shadowflareindustries.com/antigsc/index.php?codes&dev=gs&system=n64) e [GameHacking](https://gamehacking.org/system/n64) ambos são bons recursos para encontrar códigos de GameShark.
