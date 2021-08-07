export default function(todoDomBuilder) {
  let state = {
    projects: []
  }

  const newProject = p => {
    state.projects.push(p);
  }

  const printProject = () => {
    console.log(state.projects);
  }

  // Creates Projects in the DOM
  const _domCreator = (title, description, ii) => {
    const main = document.getElementsByTagName('main')[0];

    const proSec = document.createElement('section');
    const proSecTit = document.createElement('section');
    const proTit = document.createElement('h2');
    const proDesEdiBtn = document.createElement('button')
    const proDesHidBtn = document.createElement('button')
    const proDesCont = document.createElement('div');
    const proDes = document.createElement('p');
    const todSec = document.createElement('section');
    const todList = document.createElement('ul')
    const todAddBtn = document.createElement('button')

    // const todFormCont = document.createElement('section')
    // const todForm = document.createElement('form')
    

    proSec.classList.add('project');
    proSecTit.classList.add('project-title-area');
    proTit.classList.add('project-title');
    proDesEdiBtn.classList.add('edit-button', 'sec-btns');
    proDesHidBtn.classList.add('hide-button', 'sec-btns')
    proDesCont.classList.add('project-des');
    todSec.classList.add('project-todos');
    todList.setAttribute('id', `todos-${ii}`);
    todAddBtn.classList.add('todo-add-btn')

    main.appendChild(proSec);
    proSec.appendChild(proSecTit);
    proSecTit.appendChild(proTit);
    proSecTit.appendChild(proDesEdiBtn);
    proSecTit.appendChild(proDesHidBtn);
    proSecTit.appendChild(proDesCont);
    proDesCont.appendChild(proDes);
    proSec.appendChild(todSec);
    todSec.appendChild(todList);
    todSec.appendChild(todAddBtn);

    proTit.innerHTML = title;
    proDes.innerHTML = description;
    proDesEdiBtn.innerHTML = '&#9998;';
    proDesHidBtn.innerHTML = '⇩';
    todAddBtn.innerHTML = 'Add Task'
  }

  const domPrinter = () => {
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML = '';
    let project;
    for (let ii = 0; ii < state['projects'].length; ii++) {
      project = state['projects'][ii]['state']
      _domCreator(project['title'], project['description'], ii);
      todoDomBuilder({state}, ii);
    }
  }

  return Object.assign(
    {},
    { state, newProject, printProject, domPrinter },
  )
};
