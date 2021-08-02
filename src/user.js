export default function() {
  let state = {
    projects: []
  }

  const newProject = p => {
    state.projects.push(p);
  }

  const printProject = () => {
    console.log(state.projects);
  }

  const _domCreator = (title, description) => {
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

    proSec.classList.add('project');
    proSecTit.classList.add('project-title-area');
    proTit.classList.add('project-title');
    proDesEdiBtn.classList.add('edit-button', 'sec-btns');
    proDesHidBtn.classList.add('hide-button', 'sec-btns')
    proDesCont.classList.add('project-des');
    todSec.classList.add('project-todos');
    todList.classList.add('todos');

    main.appendChild(proSec);
    proSec.appendChild(proSecTit);
    proSecTit.appendChild(proTit);
    proSecTit.appendChild(proDesEdiBtn);
    proSecTit.appendChild(proDesHidBtn);
    proSecTit.appendChild(proDesCont);
    proDesCont.appendChild(proDes);
    proSec.appendChild(todSec);
    todSec.appendChild(todList);

    proTit.innerHTML = title;
    proTit.contentEditable = 'true';
    proDes.innerHTML = description;
    proDes.contentEditable = 'true';
    proDesEdiBtn.innerHTML = '&#9998;';
    proDesHidBtn.innerHTML = '+';
  }

  const domPrinter = () => {
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML = '';
    let project;
    for (let ii = 0; ii < state['projects'].length; ii++) {
      project = state['projects'][ii]['state']
      _domCreator(project['title'], project['description']);
    }
  }

  return Object.assign(
    {},
    { state, newProject, printProject, domPrinter },
    
  )
};

