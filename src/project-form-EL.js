export default function() {

  const newProjectBtn = document.getElementById('new-project')
  const projectFormCont = document.getElementsByClassName('project-form-cont');
  const formClose = document.getElementById('close');

  const bringUpForm = () => {
    projectFormCont[0].classList.toggle('show-form')
  }
  
  newProjectBtn.addEventListener('click', (e) => {
    bringUpForm()
  });
  
  formClose.addEventListener('click', (e)=> {
    bringUpForm();
  });
  
  projectFormCont[0].addEventListener('click', (e)=> {
    if (!document.getElementById('project-form').contains(e.target)) {
      bringUpForm();
    }
  });
  
}