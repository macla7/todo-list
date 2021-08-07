export default function() {

  const newProjectBtn = document.getElementById('new-project')
  const projectFormCont = document.getElementById('project-form-cont');
  const formClose = document.getElementById('close');

  const bringUpForm = () => {
    projectFormCont.classList.toggle('show-form')
  }
  
  newProjectBtn.addEventListener('click', (e) => {
    bringUpForm()
  });
  
  formClose.addEventListener('click', (e)=> {
    bringUpForm();
  });
  
  projectFormCont.addEventListener('click', (e)=> {
    if (!document.getElementById('project-form').contains(e.target)) {
      bringUpForm();
    }
  });
  
}