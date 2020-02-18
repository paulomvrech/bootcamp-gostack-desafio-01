<h3 align="center">
  Resolução do <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-01">primeiro desafio</a> do Bootcamp <a href="https://rocketseat.com.br/bootcamp">GoStack</a> :rocket:
</h3>


<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 1: Conceitos do NodeJS
</h3>

<blockquote align="center">“Sua única limitação é você mesmo”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-01?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

<p align="center">
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-Pré-requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## Sobre o desafio

Criar uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### Rotas

- `POST /projects`: A rota deve receber `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;


### Middlewares

- Middleware local que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

- Middleware global chamado em todas requisições que imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação até então;

## :rocket: Tecnologias
-  [Node.js](https://nodejs.org)
-  [Express](https://expressjs.com/)
-  [Nodemon](https://nodemon.io/)

## :warning: Pré-requisitos
Para instalar essa aplicação é preciso ter o [Yarn](https://yarnpkg.com), o [Node na versão LTS](https://nodejs.org/en/) e o [git](https://git-scm.com) instalados em sua máquina.

## :information_source: Instalação
```bash
# Clone esse repositorio
$ git clone https://github.com/paulomvrech/bootcamp-gostack-desafio-01.git

# Entre na pasta do projeto
$ cd bootcamp-gostack-desafio-01

# Instale as dependencias
$ yarn

# Inicie o servidor que irá rodar na porta 3333
$ yarn dev
```

Feito por Paulo Muller Vrech :wave: [LinkedIn](https://www.linkedin.com/in/paulo-muller-vrech-8582b810a/)