export default function() {
  let todoFormCont = document.getElementById('todo-form-cont');
  let formClose = document.getElementById('close');

  const bringUpForm = () => {
    todoFormCont.classList.toggle('show-form')
  }

  formClose.addEventListener('click', (e)=> {
    bringUpForm();
  });
  
  todoFormCont.addEventListener('click', (e)=> {
    if (!document.getElementById('todo-form').contains(e.target)) {
      bringUpForm();
      console.log('hel')
    }
  });
}