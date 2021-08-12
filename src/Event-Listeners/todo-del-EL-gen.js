export default function delTodoGen(user, todoDomBuilder, todoDelBtnS, Save, todoDate) {
  if ( todoDelBtnS != undefined ) {

    todoDelBtnS.forEach((btn, i) => {
      btn.addEventListener('click', (e) => {

        let ulId = btn.parentElement.parentElement.parentElement.parentElement.id
        let projectNo = ulId[ulId.length-1]
        let projectTodos = user.state['projects'][projectNo].state['todos'];
        let todoMarker = btn.classList[2]
        let element = projectTodos.filter(todo => {
          return todo['marker'] != todoMarker
        })
        user.state['projects'][projectNo].state['todos'] = element;


        todoDomBuilder(user, projectNo, todoDate);
        let ulTodoDelBtnS = document.getElementById(`todos-${projectNo}`).querySelectorAll('.todo-del')

        Save(user);
        delTodoGen(user, todoDomBuilder, ulTodoDelBtnS, Save, todoDate);
      })
    })
  }
}