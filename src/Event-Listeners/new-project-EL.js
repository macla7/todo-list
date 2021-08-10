export default function(user, project, editProTitELGen, showProDesELGen, todoEL, todoDomBuilder, todoDelELGen, projectDelELGen, Save) {
  const form = document.getElementById('project-form')
  let ediProTitS = document.querySelectorAll('.edit-button')
  let hidProDesS = document.querySelectorAll('.hide-button')
  let addTodoBtnS = document.querySelectorAll('.todo-add-btn')
  let todoDelBtnS = document.querySelectorAll('.todo-del')
  let projectDelBtnS = document.querySelectorAll('.project-del')

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
    projectDelBtnS = document.querySelectorAll('.project-del');

    editProTitELGen(user, ediProTitS, Save);
    showProDesELGen(user, hidProDesS);
    todoEL(user, addTodoBtnS);
    projectDelELGen(user, projectDelBtnS, Save);
    todoDelELGen(user, todoDomBuilder, todoDelBtnS, Save);

    form.reset();

    Save(user);

  })

  editProTitELGen(user, ediProTitS, Save);
  showProDesELGen(user, hidProDesS);
  projectDelELGen(user, projectDelBtnS, Save);
  todoEL(user, addTodoBtnS);
}