export default function(user, todoDelBtnS, projectNo, todoDomBuilder) {
  if ( todoDelBtnS != undefined ) {
    todoDelBtnS.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        let projectTodos = user.state['projects'][projectNo].state['todos'];
        let todoMarker = btn.classList[2]
        let element = projectTodos.filter(todo => {
          return todo['marker'] != todoMarker
        })
        user.state['projects'][projectNo].state['todos'] = element;

        todoDomBuilder(user, projectNo);
      })
    })
  }
}