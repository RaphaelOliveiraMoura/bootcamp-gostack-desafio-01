const projects = require('../projects');

function verifiIfProjectExists(request, response, next) {
  const { id } = request.params;

  const project = projects.filter(item => item.id == id).pop();
  if (!project) {
    return response.json({ message: 'Project does not exists' });
  }

  request.project = project;

  next();
}

function verifyTitleParam(request, response, next) {
  const { title } = request.body;
  if (!title) {
    return response.json({ message: 'Title is required' });
  }
  next();
}

module.exports = {
  verifiIfProjectExists,
  verifyTitleParam
};
