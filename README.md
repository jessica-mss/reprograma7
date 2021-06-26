# Reprograma - Semana 7

Repositório destinado à atividade da semana 7

Tema: Introdução à API: GET // Servidor, Endpoints, Rotas, Status Code, curl, postman

---------------- RESUMO --------------------------

Principais comandos para criação de um servidor local:
  1. NPM INIT - torna a pasta destino um servidor (para iniciar pela primeira um projeto com node.js). Esse comando inicializa o servidor, faz algumas perguntas e por fim cria o     arquivo package.json.
                * É por meio desse arquivo que o NPM tem autonomia para gerenciar tudo o que ficará disponível dentro do servidor.
  2. NPM i nodemon - Fornece o ambiente de backend para o javascript (dependencias).
  3. NPM i express - Fornece dependências para a criação de um servidor de maneira mai simplificada.
                * Nesta fase é necessário modificar nossos scripts de start dentro do package.json ("start": "nodemon server.js")
  4. NPM start - Roda o servidor.
                * Para instalar dependências de um projeto com node.js que já foi iniciado é necessário usar apenas o comando npm install no git bash.
