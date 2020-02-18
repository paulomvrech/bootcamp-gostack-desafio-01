const express = require('express');
const server = express();
server.use(express.json());

//vetor para armazenzar os projetos
const projects = [];

//Middleware global usado para contar a quantidade de requisições
server.use((req, res, next) =>{
  console.count("Quantidade de requisições");

  return next();
})

//Middleware local usado nas rotas com ID passado por parâmetro, verifica se o ID existe
function checkProjectExists(req, res, next){
  const { id } = req.params;
  const project = projects.find(proj => proj.id == id);
  if(!project){
    return res.status(400).json({ error: 'Project does not exists'});
  }

  return next();
}

//Rota para lisar todas os projetos
server.get('/projects', (req, res) => {

  return res.json(projects);
})

//Rota para criar um novo projeto
server.post('/projects', (req, res) => {
  const { id } = req.body;
  const { title } = req.body;

  const project = {
    id,
    title,
    tasks : []
  };
  projects.push(project);

  return res.json(projects);
})

//Rota para alterar o titulo de um projeto específico
server.put('/projects/:id', checkProjectExists,  (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(proj => proj.id == id);
  project.title = title;

  return res.json(projects);
})

//Rota para excluir um projeto específico
server.delete('/projects/:id', checkProjectExists,  (req, res) => {
  const { id } = req.params;

  const projIndex = projects.findIndex(proj => proj.id == id);
  projects.splice(projIndex, 1);

  return res.send();
})

//Rota para criar uma nova tarefa em um determinado projeto
server.post('/projects/:id/tasks', checkProjectExists,  (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const projIndex = projects.find(proj => proj.id == id);
  projIndex.tasks.push(title);
  
  return res.json(projects);
})

server.listen(3000);