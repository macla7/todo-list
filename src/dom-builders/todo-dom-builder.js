export default function(user, projectNo) {
  let ul = document.getElementById(`todos-${projectNo}`)
  let project = user.state['projects'][projectNo]

  ul.innerHTML = '';

  project.state['todos'].forEach((todo) => {
    const todoLi = document.createElement('li')
    const todoTitCont = document.createElement('section');
    const todoDesHid = document.createElement('button');
    const todoTit = document.createElement('h3')
    const todoActions = document.createElement('div')
    const compForm = document.createElement('form')
    const compInput = document.createElement('input')
    const priorityFlag = document.createElement('p')
    const deleteBtn = document.createElement('button')
    const todoDes = document.createElement('p')

    compInput.setAttribute('type', 'checkbox')
    compInput.setAttribute('value', 'completed')
    todoTitCont.classList.add('todo-tit-cont')
    todoDesHid.classList.add('todo-btns', 'todo-hide-btn')
    todoActions.classList.add('todo-actions')
    compForm.classList.add('todo-btns')
    priorityFlag.classList.add('todo-btns')
    deleteBtn.classList.add('todo-btns', 'todo-del', `${todo['marker']}`);
    todoDes.classList.add('des');

    todoDesHid.innerHTML = '⇩';
    todoTit.innerHTML = todo['title'];
    todoDes.innerHTML = todo['description'];
    priorityFlag.innerHTML = `${todo['priority']}⚑`
    deleteBtn.innerHTML = '🗑'

    ul.appendChild(todoLi);
    todoLi.appendChild(todoTitCont);
    todoTitCont.appendChild(todoDesHid);
    todoTitCont.appendChild(todoTit);
    todoTitCont.appendChild(todoActions);
    todoActions.appendChild(compForm);
    compForm.appendChild(compInput);
    todoActions.appendChild(priorityFlag);
    todoActions.appendChild(deleteBtn);
    todoLi.appendChild(todoDes);
    
  })


}