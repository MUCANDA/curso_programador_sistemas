# Guia para Iniciantes: Git

## Seção 1: Configurações do Git

1. **Instalação do Git:**
   - **Windows:**
     - Baixe o Git do site oficial [Git SCM](https://git-scm.com/).
     - Siga as instruções de instalação, usando as opções padrão.
   - **MacOS:**
     - Use o Homebrew: `brew install git`.
   - **Linux:**
     - Use o gerenciador de pacotes da sua distribuição, por exemplo, `sudo apt-get install git` para Debian/Ubuntu.

2. **Configuração Inicial:**
   - Abra o terminal ou prompt de comando.
   - Configure seu nome de usuário global (associado aos seus commits):
     ```bash
     git config --global user.name "Seu Nome"
     ```
   - Configure seu e-mail (associado à sua conta do GitHub/GitLab/etc.):
     ```bash
     git config --global user.email "seuemail@exemplo.com"
     ```

3. **Verificação das Configurações:**
   - Verifique se as configurações foram aplicadas corretamente:
     ```bash
     git config --global --list
     ```
   - Isso exibirá uma lista com as configurações definidas.

## Seção 2: Criação de um Repositório

1. **Escolha o Local de Criação:**
   - Navegue até o diretório onde deseja criar o repositório, usando o terminal:
     ```bash
     cd /caminho/para/sua/pasta
     ```

2. **Inicie um Novo Repositório:**
   - Crie um novo repositório Git no diretório atual:
     ```bash
     git init
     ```

3. **Adicione Arquivos ao Repositório:**
   - Adicione os arquivos que deseja versionar:
     ```bash
     git add .
     ```

4. **Faça seu Primeiro Commit:**
   - Confirme as mudanças no repositório com um commit:
     ```bash
     git commit -m "Primeiro commit - adiciona todos os arquivos iniciais"
     ```

5. **Criação de um Repositório Remoto (GitHub, GitLab, etc.):**
   - **GitHub:** Acesse [GitHub](https://github.com), faça login e crie um novo repositório.

6. **Conecte o Repositório Local ao Repositório Remoto:**
   - Adicione o repositório remoto:
     ```bash
     git remote add origin https://github.com/seuusuario/nomedorepositorio.git
     ```

## Seção 3: Acessar um Repositório Salvo no GitHub

1. **Clonar um Repositório Existente:**
   - Para acessar um repositório já existente no GitHub:
     ```bash
     git clone https://github.com/seuusuario/nomedorepositorio.git
     ```

2. **Navegar até o Diretório Clonado:**
   - Após clonar o repositório, entre no diretório clonado:
     ```bash
     cd nomedorepositorio
     ```

## Seção 4: Envio de Alterações para um Repositório Remoto

1. **Fazer Modificações no Repositório Local:**
   - Adicione, modifique ou exclua arquivos conforme necessário.

2. **Adicionar Arquivos ao Staging Area:**
   - Adicione os arquivos modificados:
     ```bash
     git add .
     ```

3. **Fazer um Commit das Alterações:**
   - Confirme as mudanças:
     ```bash
     git commit -m "Descrição das alterações realizadas"
     ```

4. **Enviar as Alterações para o Repositório Remoto:**
   - Envie as mudanças para o repositório remoto:
     ```bash
     git push origin master
     ```

## Seção 5: Atualização do Repositório Local

1. **Atualizar o Repositório Local com as Alterações Remotas:**
   - Para garantir que seu repositório local está atualizado com as alterações feitas remotamente:
     ```bash
     git pull origin master
     ```

2. **Gerenciar Conflitos de Merge (se houver):**
   - Se houver conflitos, o Git pedirá que você os resolva manualmente.
   - Após resolver os conflitos, finalize com:
     ```bash
     git add .
     git commit -m "Resolução de conflitos"
     git push origin master
     ```

## Seção 6: Referências

- [Documentação Oficial do Git](https://git-scm.com/doc)
- [GitHub - Guia de Início Rápido](https://docs.github.com/en/get-started/quickstart)
- [Pro Git Book](https://git-scm.com/book/en/v2) - Livro gratuito sobre Git
- [Artigo git commit](https://www.atlassian.com/br/git/tutorials/saving-changes/git-commit)