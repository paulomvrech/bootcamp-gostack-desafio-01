const express = require('express');
const server = express();
server.use(express.json());

//vetor para armazenzar os projetos
const projects = [];

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
server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(proj => proj.id == id);
  project.title = title;

  return res.json(projects);
})

//Rota para excluir um projeto específico
server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  const projIndex = projects.findIndex(proj => proj.id == id);
  projects.splice(projIndex, 1);

  return res.send();
})

//Rota para criar uma nova tarefa em um determinado projeto
server.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const projIndex = projects.find(proj => proj.id == id);
  projIndex.tasks.push(title);
  
  return res.json(projects);
})



server.listen(3000);