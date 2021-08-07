export default function(user, todo, todoDomBuilder) {
  const form = document.getElementById('todo-form')
  const priorityText = document.querySelectorAll('.priority-text')

  form.addEventListener('submit', (e)=> {
    e.preventDefault();

    let title = document.getElementById('todo-title').value
    let description = document.getElementById('todo-description').value
    let dueDate = document.getElementById('todo-due-date').value
    let priority = document.getElementById('todo-priority').value
    let projectNo = form.parentElement.classList[2]

    let project = user.state['projects'][projectNo]
    project.newTodo(todo(title, description, dueDate, priority))
    
    todoDomBuilder(user, projectNo);

    priorityText[1].innerHTML = ''
    form.reset();
  })
}