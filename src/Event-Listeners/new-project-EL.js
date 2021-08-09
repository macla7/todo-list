export default function(user, project, editProTitELGen, showProDesELGen, todoEL, todoDomBuilder, todoDelELGen, Save) {
  const form = document.getElementById('project-form')
  let ediProTitS = document.querySelectorAll('.edit-button')
  let hidProDesS = document.querySelectorAll('.hide-button')
  let addTodoBtnS = document.querySelectorAll('.todo-add-btn')
  const priorityText = document.querySelectorAll('.priority-text')
  let todoDelBtnS = document.querySelectorAll('.todo-del')

  // New project
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.getElementById('project-title').value
    let description = document.getElementById('project-description').value

    user.newProject(project(title, description, user.state['projectMarker']))
    // user.printProject();
    user.domPrinter();

    ediProTitS = document.querySelectorAll('.edit-button');
    hidProDesS = document.querySelectorAll('.hide-button');
    addTodoBtnS = document.querySelectorAll('.todo-add-btn');
    todoDelBtnS = document.querySelectorAll('.todo-del');

    editProTitELGen(user, ediProTitS);
    showProDesELGen(user, hidProDesS);
    todoEL(user, addTodoBtnS);
    todoDelELGen(user, todoDomBuilder, todoDelBtnS);

    form.reset();

    Save(user);

  })

  editProTitELGen(user, ediProTitS);
  showProDesELGen(user, hidProDesS);
  todoEL(user, addTodoBtnS);
}