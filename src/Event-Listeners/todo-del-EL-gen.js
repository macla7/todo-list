export default function delTodoGen(user, todoDomBuilder, todoDelBtnS) {
  if ( todoDelBtnS != undefined ) {
    console.log(todoDelBtnS)
    todoDelBtnS.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        console.log('jek')
        console.log(btn)
        console.log(btn.parentElement.parentElement.parentElement)
        console.log(user.state);
        let ulId = btn.parentElement.parentElement.parentElement.parentElement.id
        let projectNo = ulId[ulId.length-1]
        let projectTodos = user.state['projects'][projectNo].state['todos'];
        let todoMarker = btn.classList[2]
        let element = projectTodos.filter(todo => {
          return todo['marker'] != todoMarker
        })
        user.state['projects'][projectNo].state['todos'] = element;

        console.log(projectNo)

        todoDomBuilder(user, projectNo);
        let ulTodoDelBtnS = document.getElementById(`todos-${projectNo}`).querySelectorAll('.todo-del')
        delTodoGen(user, todoDomBuilder, ulTodoDelBtnS);
      })
    })
  }
}