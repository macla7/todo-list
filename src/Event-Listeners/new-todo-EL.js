export default function(user, todo, todoDomBuilder, todoDelBtnGen) {
  const form = document.getElementById('todo-form')
  const priorityText = document.querySelectorAll('.priority-text')
  let todoDelBtnS = document.querySelectorAll('.todo-del');

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

    todoDelBtnS = document.querySelectorAll('.todo-del');
    
    todoDelBtnGen(user, todoDelBtnS, projectNo, todoDomBuilder);

    priorityText[1].innerHTML = ''
    form.reset();
  })

  todoDelBtnGen(user, todoDelBtnS, 0, todoDomBuilder);
}