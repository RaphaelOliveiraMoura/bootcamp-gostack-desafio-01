const routes = require('express').Router();

const ProjectsController = require('./controllers/ProjectsController');
const TasksController = require('./controllers/TasksController');

const ProjectsValidator = require('./validators/ProjectsValidator');

routes.post(
  '/projects',
  ProjectsValidator.verifyTitleParam,
  ProjectsController.store
);

routes.get('/projects', ProjectsController.index);

routes.get(
  '/projects/:id',
  ProjectsValidator.verifiIfProjectExists,
  ProjectsController.show
);

routes.put(
  '/projects/:id',
  ProjectsValidator.verifiIfProjectExists,
  ProjectsController.update
);

routes.delete(
  '/projects/:id',
  ProjectsValidator.verifiIfProjectExists,
  ProjectsController.destroy
);

routes.post(
  '/projects/:id/tasks',
  ProjectsValidator.verifiIfProjectExists,
  ProjectsValidator.verifyTitleParam,
  TasksController.store
);

module.exports = routes;
