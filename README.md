# <a id="begin"> Desafio Energin

## [1. Introdução](#intro)
## [2. O que foi usado](#uso)
## [3. Banco de dados](#db)
## [4. Script para inicialização do banco](#antes)
## [5. Executando o projeto](#run)


## <a id="intro">1. Introdução

Este projeto é para avaliação técnica de uma desafio FullStack para a Energin.

Este projeto foi desenvolvido em NodeJS (v16.10.0) com Angular v14.2.0

## <a id="uso"> 2. O que foi usado

A seguir, serão apresentados os principais pacotes que foram usados no projeto

**NO BACKEND**

* <b>Express</b>

Framework NodeJS para a criação de servidor 

* <b>Json-server</b>

Pacote para simular o banco de dados

* md5

Para criptografia de senha


**NO FRONTEND**

* Angular v14.2.0


[Voltar ao inicio](#begin)

## <a id="db"> 3. O Banco de Dados

O Banco de dados utilizado no projeto foi o [json-server](https://www.npmjs.com/package/json-server) que na verdade não é banco de dados e sim um arquivo .json


[Voltar ao inicio](#begin)

## <a id="antes"> 4. Script para inicialização do banco

Antes de iniciar o projeto primeiro inicie o "banco de dados"

Instale globalmente o pacote com o seguinte comando:

    npm install -g json-server

Após instalado acesse a pasta da api em `web-api` via terminal

Execute o seguinte comando para deixar o banco de dados online

    json-server --watch db/db.json

Lembre-se que para o projeto funcionar esses passos precisam ser executado antes

[Voltar ao inicio](#begin)

## <a id="run"> 5. Executando o projeto

**BACKEND**

Após o banco de dados estiver em execução, os pacotes estiverem instalados, o script de base ser executado, aí o projeto poderá entrar em operação. Para isso, dê o comando:

Execute o comando 

    npm i

Para executar a instalação das dependências

Para executar o projeto, execute o comando

    npm run dev

**FRONTEND**

Depois que a API estiver inicializada e em execução, dentro da raíz do frontend é necessário rodar o comando:

        ng serve

Existe uma pasta chamada **Compilado** onde estão os arquivos gerados ao ser compilado o projeto, caso tenha algum servidor web configurado é preciso colocar os arquivos na raiz do servidor web para executar o projeto


[Voltar ao inicio](#begin)



