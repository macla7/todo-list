export default function(user, hidProDesS) {
  if ( hidProDesS != undefined ) {
    hidProDesS.forEach((btn) => {
      let des = btn.parentElement.lastChild;
      btn.addEventListener('click', (e) => {
        des.classList.toggle('project-des-show');
        btn.innerHTML = btn.innerHTML == '⇩' ? '⇧' : '⇩'
      })
    })
  }
}