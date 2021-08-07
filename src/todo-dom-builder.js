export default function(user, projectNo) {
  let ul = document.getElementById(`todos-${projectNo}`)
  console.log(user.state)
  let project = user.state['projects'][projectNo]

  ul.innerHTML = '';

  project.state['todos'].forEach((todo) => {
    const todoLi = document.createElement('li')
    const todoTitCont = document.createElement('section');
    const todoTit = document.createElement('h3')
    const todoActions = document.createElement('div')
    const compForm = document.createElement('form')
    const compInput = document.createElement('input')
    const priorityFlag = document.createElement('p')
    const todoDes = document.createElement('p')

    compInput.setAttribute('type', 'checkbox')
    compInput.setAttribute('value', 'completed')
    todoTitCont.classList.add('todo-tit-cont')
    todoActions.classList.add('todo-actions')

    todoTit.innerHTML = todo['title'];
    todoDes.innerHTML = todo['description'];
    priorityFlag.innerHTML = `${todo['priority']} ⚑`

    ul.appendChild(todoLi);
    todoLi.appendChild(todoTitCont);
    todoTitCont.appendChild(todoTit);
    todoTitCont.appendChild(todoActions);
    todoActions.appendChild(compForm);
    compForm.appendChild(compInput);
    todoActions.appendChild(priorityFlag);
    todoLi.appendChild(todoDes);
    
  })


}