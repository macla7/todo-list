export default function(user, hidTodoDesS) {
  if ( hidTodoDesS != undefined ) {
    hidTodoDesS.forEach((btn) => {
      let des = btn.parentElement.parentElement.children[1]
      btn.addEventListener('click', (e) => {
        des.classList.toggle('todo-des-show');
        btn.innerHTML = btn.innerHTML == '⇩' ? '⇧' : '⇩'
      })
    })
  }
}