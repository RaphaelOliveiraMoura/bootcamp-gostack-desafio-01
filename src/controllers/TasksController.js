function store(request, response) {
  const { title } = request.body;
  request.project.tasks.push(title);
  return response.json(request.project);
}

module.exports = {
  store
};
