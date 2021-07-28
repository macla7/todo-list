export default function(user) {

  console.log('hello')
  console.log(user)

  const newProject = document.getElementById('new-project')
  const range = document.getElementById('priority')
  const priorityDiv = document.getElementById('priority-div')
  const priorityText = document.getElementById('priority-text')

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
    console.log(e)
    if (!document.getElementById('project-form').contains(e.target)) {
      bringUpForm();
    }
  });


  newProject.addEventListener('click', (e) =>{
    
  })

  range.addEventListener('click', (e) => {
    const rangeValue = document.getElementById('priority').value;
    priorityDiv.classList = ''
    switch(rangeValue) {
      case '1':
        priorityDiv.classList.add('low-priority')
        priorityText.innerHTML = 'Low Priority'
        break;
      case '2':
        priorityDiv.classList.add('medium-priority')
        priorityText.innerHTML = 'Medium Priority'
        break;
      case '3':
        priorityDiv.classList.add('high-priority')
        priorityText.innerHTML = 'High Priority'
        break;
      case '4':
        priorityDiv.classList.add('urgent-priority')
        priorityText.innerHTML = 'Urgent Priority'
        break;
    }

  })







}