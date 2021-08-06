export default function(user, addTodoBtns) {
  let todoFormCont = document.getElementById('todo-form-cont');
  let formClose = document.getElementById('close');

  const bringUpForm = () => {
    todoFormCont.classList.toggle('show-form')
  }

  if ( addTodoBtns != undefined ) {

    addTodoBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        bringUpForm()
        console.log('helolllll')
      })
    });
  }
};