export default function(user, projectNo) {
  let ul = document.getElementById(`todos-${projectNo}`)
  console.log(user.state)
  let project = user.state['projects'][projectNo]

  ul.innerHTML = '';

  project.state['todos'].forEach((todo) => {
    const todoLi = document.createElement('li')
    const todoTit = document.createElement('h3')
    const todoDes = document.createElement('p')

    todoTit.innerHTML = todo['title'];
    todoDes.innerHTML = todo['description'];

    ul.appendChild(todoLi);
    todoLi.appendChild(todoTit);
    todoLi.appendChild(todoDes);
  })


}