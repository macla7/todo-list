export default function(user, addTodoBtns) {
  let todoFormCont = document.getElementById('todo-form-cont');
  let formClose = document.getElementById('close');

  const bringUpForm = (i = '') => {
    if (todoFormCont.classList[2]) {
      todoFormCont.classList = ''
      todoFormCont.classList.add('form-cont')
    } else {
      todoFormCont.classList.add('show-form',`${i}`)
    }
  }

  if ( addTodoBtns != undefined ) {

    addTodoBtns.forEach((btn, i) => {
      btn.addEventListener('click', (e) => {
        bringUpForm(i)
      })
    });
  }
};