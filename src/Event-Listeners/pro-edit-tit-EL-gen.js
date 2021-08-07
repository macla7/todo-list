export default function(user, ediProTitS) {
  if (ediProTitS != undefined) {
    ediProTitS.forEach((btn, i) => {
      let title = btn.parentElement.firstChild;

      title.addEventListener('focusout', (e) => {
        title.contentEditable = 'false'
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
};