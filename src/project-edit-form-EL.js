export default function(user, project) {
  const form = document.getElementById('project-form')
  let ediProTitS = document.querySelectorAll('.edit-button')
  let hidProDesS = document.querySelectorAll('.hide-button')

  // New project
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.getElementById('project-title').value
    let description = document.getElementById('project-description').value
    let priority = document.getElementById('priority').value

    user.newProject(project(title, description, priority))

    user.printProject();

    user.domPrinter();

    ediProTitS = document.querySelectorAll('.edit-button')
    hidProDesS = document.querySelectorAll('.hide-button')
    editProTitELGen(ediProTitS);
    showProDesELGen(hidProDesS);
  })

  // Editing Project Title
  function editProTitELGen(ediProTitS) {
    ediProTitS.forEach((btn, i) => {
      let title = btn.parentElement.firstChild;

      title.addEventListener('focusout', (e) => {
        title.contentEditable = 'false'
        console.log(title.innerHTML)
        user.state['projects'][i].state['title'] = title.innerHTML
      })

      btn.addEventListener('click', (e) => {

        // Not allow enter to cause a <br >
        title.contentEditable = 'true'
        title.addEventListener('keydown', (evt) => {
          if (evt.keyCode === 13) {
              evt.preventDefault();
          }
        });
        const selection = window.getSelection();
        selection.removeAllRanges();
      
        // Select paragraph
        const range = document.createRange();
        range.selectNodeContents(title);
        selection.addRange(range);
        selection.collapseToEnd();
      })
    })
  }

  function showProDesELGen(hidProDesS) {
    hidProDesS.forEach((btn) => {
      let des = btn.parentElement.lastChild;
      btn.addEventListener('click', (e) => {
        des.classList.toggle('project-des-show');
        btn.innerHTML = btn.innerHTML == '⇩' ? '⇧' : '⇩'
      })
    })
  }

  editProTitELGen(ediProTitS);
  showProDesELGen(hidProDesS);
}