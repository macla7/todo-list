export default function delProjectGen(user, projectDelBtnS, Save) {
  if ( projectDelBtnS != undefined ) {

    projectDelBtnS.forEach((btn) => {
      btn.addEventListener('click', (e) => {

        let pro = btn.parentElement.parentElement.classList[1]
        let projectNo = pro[pro.length-1]
        let projects = user.state['projects']
        console.log(btn)
        console.log(pro);
        console.log(projectNo);
        let filtered = projects.filter(pro => {
          console.log(pro.state['projectMarker'])
          return pro.state['projectMarker'] != projectNo
        })
        user.state['projects'] = filtered;
        console.log(filtered);

        user.domPrinter();
        let newProjectDelBtnS = document.querySelectorAll('.project-del')
        
        Save(user);
        delProjectGen(user, newProjectDelBtnS, Save);
      })
    })
  }
}