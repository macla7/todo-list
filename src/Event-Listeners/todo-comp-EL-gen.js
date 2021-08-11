export default function delTodoGen(user, todoCompBtnS, Save) {
  if ( todoCompBtnS != undefined ) {

    todoCompBtnS.forEach((btn) => {
      btn.addEventListener('click', (e) => {

        let ulId = btn.parentElement.parentElement.parentElement.parentElement.parentElement.id
        let projectNo = ulId[ulId.length-1]
        let btnMarker = btn.classList[1]

        let compMark = user.state['projects'][projectNo].state['todos'][btnMarker]['complete']
        console.log(compMark)
        if (compMark == 'true' ) {
          user.state['projects'][projectNo].state['todos'][btnMarker]['complete'] = 'false'
        } else {
          user.state['projects'][projectNo].state['todos'][btnMarker]['complete'] = 'true'
        }

        Save(user);
      })
    })
  }
}