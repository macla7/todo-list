export default function(user, project) {
  const form = document.getElementById('project-form')

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.getElementById('project-title').value
    let description = document.getElementById('project-description').value
    let priority = document.getElementById('priority').value

    user.newProject(project(title, description, priority))

    user.printProject();

    user.domPrinter();
  })
}