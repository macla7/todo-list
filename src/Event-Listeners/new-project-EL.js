export default function(user, project, editProTitELGen, showProDesELGen, todoEL) {
  const form = document.getElementById('project-form')
  let ediProTitS = document.querySelectorAll('.edit-button')
  let hidProDesS = document.querySelectorAll('.hide-button')
  let addTodoBtns = document.querySelectorAll('.todo-add-btn')
  const priorityText = document.querySelectorAll('.priority-text')

  // New project
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.getElementById('project-title').value
    let description = document.getElementById('project-description').value
    let priority = document.getElementById('project-priority').value

    user.newProject(project(title, description, priority))
    user.printProject();
    user.domPrinter();

    ediProTitS = document.querySelectorAll('.edit-button');
    hidProDesS = document.querySelectorAll('.hide-button');
    addTodoBtns = document.querySelectorAll('.todo-add-btn');

    editProTitELGen(user, ediProTitS);
    showProDesELGen(user, hidProDesS);
    todoEL(user, addTodoBtns);

    priorityText[0].innerHTML = ''
    form.reset();
  })

  editProTitELGen(user, ediProTitS);
  showProDesELGen(user, hidProDesS);
  todoEL(user, addTodoBtns);
}