# Contribuindo para a Documentação

::: info Nota Importante

Nosso objetivo é ter todas as versões da documentação espelhadas. A documentação em inglês é a mais completa e serve como referência principal. Quaisquer novas páginas que não existam nas documentações de outros idiomas devem ser adicionadas primeiro na documentação em inglês para garantir a consistência em todas as traduções. Se você não estiver confiante no seu inglês, envie uma mensagem privada para "[WritingTeam](https://retroachievements.org/messages/create?to=WritingTeam)" no site da RetroAchievements. Eles ficarão felizes em ajudar.

:::

**Todas as contribuições para a documentação são bem-vindas.**

Agradecemos seu interesse em contribuir. Seja você novo no Git ou um desenvolvedor experiente, estamos aqui para ajudar. Veja como você pode melhorar nossa documentação:

## Edições Rápidas

Se você só quer fazer uma edição rápida em uma página existente, siga estes passos simples:

1. **Editar Esta Página**: Visite qualquer página no site da documentação, role até o final e clique no link "Edit this page".
2. **Fork do Repositório**: Clique no botão "Fork this repository". Isso criará sua própria cópia da documentação.
3. **Faça Suas Alterações**: Use o editor Markdown na tela para fazer e visualizar suas alterações.
4. **Enviar Alterações**: Clique no botão "Commit changes". Escreva um título e uma descrição para suas alterações e envie.
5. **Criar Pull Request**: Clique no botão "Create pull request". Escreva um título e uma descrição para sua pull request e envie para revisão.

## Contribuições Detalhadas

Se você quer criar novas páginas ou trabalhar em várias páginas, siga estes passos:

### 1. Fork do Repositório

- Vá para a [página do repositório](https://github.com/RetroAchievements/docs) e clique no botão "Fork". ![fork button](/fork-button.png)
- Pressione "Create fork" no formulário que aparece.

### 2. Abra no VSCode

- Uma vez que você esteja visualizando seu fork (geralmente em `github.com/seu-usuario-aqui/docs`), pressione a tecla ponto (".") no seu teclado para abrir o VSCode no seu navegador.
- Use a árvore de arquivos à esquerda para explorar a documentação, expandindo especificamente a pasta "docs".
- Use o atalho Ctrl+P para buscar arquivos, como "README".

![readme search](/readme-search.png)

### 3. Edite e Visualize

- Abra a paleta de comandos com Ctrl+Shift+P (ou F1 no Firefox), busque "markdown preview" e selecione "Markdown: Open Preview to the Side".
- Use a visualização de Markdown para ver suas alterações enquanto as escreve.

![markdown preview](/markdown-preview.png)

### 4. Crie um Branch

- Clique no nome do branch (geralmente `main`) no canto inferior esquerdo do VSCode.
- Clique em "Create branch", nomeie seu branch, pressione Enter e depois clique em "Switch to Branch".

![current branch](/current-branch.png)

![switch to branch](/switch-to-branch.png)

### 5. Salve e Faça o Commit

- Use Ctrl+S para salvar os arquivos enquanto trabalha.
- Clique no ícone de Controle de Código-Fonte à esquerda, clique com o botão direito nos arquivos que você alterou e clique em "Stage Changes".
- Escreva uma mensagem de commit, depois clique no botão "Commit & Push".

![commit changes](/commit-changes.png)

### 6. Crie um Pull Request

- Abra a paleta de comandos com Ctrl+Shift+P (ou F1 no Firefox) e use o comando "Create Pull Request".
- Preencha o formulário com um título e uma descrição, depois clique em "Create".

![create pull request](/create-pull-request.png)

![pr form](/pr-form.png)

## Adicionando Novas Páginas

Se você quer adicionar uma nova página, precisará atualizar a configuração do `sidebar` no arquivo [pt.ts](https://github.com/RetroAchievements/docs/blob/main/docs/.vitepress/config/en.ts). É assim que você pode conectar a navegação às novas páginas.

Por exemplo, se seu novo arquivo Markdown for _docs/general/my-file.md_, adicione isto a `sidebarGeneral()`:

```js
{
    text: "Minha Nova Página",
    link: "/general/my-file",
}
```

Também é uma boa prática adicionar isso às configurações dos outros idiomas para mantê-los sincronizados, mesmo que esteja comentado:

```js
// {
//     text: "Minha Nova Página",
//     link: "/general/my-file",
// }
```

## Executando o Site de Documentação Localmente

Para executar o site de documentação no seu computador:

1. [Baixe e instale Node.js v20](https://nodejs.org/en/download/prebuilt-installer).

2. Instale o Git. [Baixe e instale o Git](https://git-scm.com/download/win) se você for um usuário de Windows.

3. Abra um terminal e clone o repositório:

```bash
git clone https://github.com/RetroAchievements/docs.git
```

4. Navegue até o repositório clonado e execute o servidor de desenvolvimento local:

```bash
cd docs
npm install
npm run dev
```

É isso! Seu servidor local deve estar funcionando, permitindo que você visualize suas alterações.
