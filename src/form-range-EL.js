export default function() {
  const range = document.querySelectorAll('.priority')
  const priorityDiv = document.querySelectorAll('.priority-div')
  const priorityText = document.querySelectorAll('.priority-text')
  
  function rangeChange(i) {
    const rangeValue = range[i].value;
    if (priorityDiv != undefined) {
      priorityDiv[i].classList = 'priority-div'
      switch(rangeValue) {
        case '1':
          priorityDiv[i].classList.add('low-priority')
          priorityText[i].innerHTML = 'Low Priority'
          break;
        case '2':
          priorityDiv[i].classList.add('medium-priority')
          priorityText[i].innerHTML = 'Medium Priority'
          break;
        case '3':
          priorityDiv[i].classList.add('high-priority')
          priorityText[i].innerHTML = 'High Priority'
          break;
        case '4':
          priorityDiv[i].classList.add('urgent-priority')
          priorityText[i].innerHTML = 'Urgent Priority'
          break;
      }
    }
  }

  range.forEach((bar, i) => {
    bar.addEventListener('touchend', (e) => rangeChange(i));
    bar.addEventListener('click', (e) => rangeChange(i));
  });

}