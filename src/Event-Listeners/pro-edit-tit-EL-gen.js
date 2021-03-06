export default function(user, ediProTitS, Save) {
  if (ediProTitS != undefined) {
    ediProTitS.forEach((btn, i) => {
      let title = btn.parentElement.children[1];

      title.addEventListener('focusout', (e) => {
        title.contentEditable = 'false'
        user.state['projects'][i].state['title'] = title.innerHTML
        Save(user);
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
};