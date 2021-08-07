export default function() {
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

  formClose.addEventListener('click', (e)=> {
    bringUpForm();
  });
  
  todoFormCont.addEventListener('click', (e)=> {
    if (!document.getElementById('todo-form').contains(e.target)) {
      bringUpForm();
    }
  });
}