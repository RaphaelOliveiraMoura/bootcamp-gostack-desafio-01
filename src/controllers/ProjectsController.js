let projects = require('../projects');

function show(request, response) {
  return response.json(request.project);
}

function index(request, response) {
  return response.json(projects);
}

function store(request, response) {
  const project = { ...request.body, tasks: [] };
  projects.push(project);
  return response.status(201).json(project);
}

function update(request, response) {
  const { title } = request.body;
  request.project.title = title;
  return response.json(request.project);
}

function destroy(request, response) {
  const { id } = request.params;
  projects = projects.filter(project => project.id != id);
  return response.send();
}

module.exports = {
  show,
  index,
  store,
  update,
  destroy
};
