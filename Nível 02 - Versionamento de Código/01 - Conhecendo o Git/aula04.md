# Instalando o Git no Mac

## Link
  https://git-scm.com/downloads/mac

## Comandos (Terminal)
  ### XCode
  * Tentar executar um comando git, e caso não esteja instalado, ele pedirá para instalar, confirme.

  ### Homebrew
  * `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` - Instala o Homebrew
  * `brew install git` - Instala o git

## Configurando Credenciais - Comandos (Git Bash)
  * `git -v` - Verifica a versão instalada do git na máquina
  * `git config --global user.name "<username>"` - Indica o usuário para os commits no repositório local
  * `git config --global user.name "<email@email.com>"` - Indica o email para os commits no repositório local
  