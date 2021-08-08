export default function(todoDomBuilder, projectDomBuilder) {
  let state = {
    projects: []
  }

  const newProject = p => {
    state.projects.push(p);
  }

  const printProject = () => {
    console.log(state.projects);
  }



  const domPrinter = () => {
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML = '';
    let project;
    for (let ii = 0; ii < state['projects'].length; ii++) {
      project = state['projects'][ii]['state']
      projectDomBuilder(project['title'], project['description'], ii);
      todoDomBuilder({state}, ii);
    }
  }

  return Object.assign(
    {},
    { state, newProject, printProject, domPrinter },
  )
};

