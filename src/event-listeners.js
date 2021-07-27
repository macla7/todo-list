export default function(user) {

  console.log('hello')
  console.log(user)

  const newProject = document.getElementById('new-project')
  const range = document.getElementById('priority')
  


  newProject.addEventListener('click', (e) =>{
    
  })

  range.addEventListener('click', (e) => {
    const rangeValue = document.getElementById('priority').value;
    console.log(rangeValue);
  })
}