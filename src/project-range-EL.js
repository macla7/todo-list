export default function() {
  const range = document.getElementById('priority')
  const priorityDiv = document.getElementById('priority-div')
  const priorityText = document.getElementById('priority-text')
  
  function rangeChange() {
    const rangeValue = document.getElementById('priority').value;
    console.log(rangeValue)
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
  }

  range.addEventListener('touchend', rangeChange)
  range.addEventListener('click', rangeChange);

}