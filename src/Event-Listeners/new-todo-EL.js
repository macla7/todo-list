export default function(user, todo, todoDomBuilder, todoDelBtnGen, showProDesELGen, Save) {
  const form = document.getElementById('todo-form')
  const priorityText = document.querySelectorAll('.priority-text')
  let ulTodoDelBtnS = document.querySelectorAll('.todo-del');
  let hidTodoDesS = document.querySelectorAll('.todo-hide-btn')

  form.addEventListener('submit', (e)=> {
    e.preventDefault();

    let title = document.getElementById('todo-title').value
    let description = document.getElementById('todo-description').value
    let dueDate = document.getElementById('todo-due-date').value
    let priority = document.getElementById('todo-priority').value
    let projectNo = form.parentElement.classList[2]

    let project = user.state['projects'][projectNo]
    let todoMarker = project.state['todoMarker'];

    project.newTodo(todo(title, description, dueDate, priority, todoMarker))
    
    todoDomBuilder(user, projectNo);

    ulTodoDelBtnS = document.getElementById(`todos-${projectNo}`).querySelectorAll('.todo-del')
    hidTodoDesS = document.getElementById(`todos-${projectNo}`).querySelectorAll('.todo-hide-btn');
    
    todoDelBtnGen(user, todoDomBuilder, ulTodoDelBtnS, Save);
    showProDesELGen(user, hidTodoDesS)

    priorityText[0].innerHTML = ''
    form.reset();

    Save(user);
  })

  todoDelBtnGen(user, todoDomBuilder, ulTodoDelBtnS, Save);
  showProDesELGen(user, hidTodoDesS)
}