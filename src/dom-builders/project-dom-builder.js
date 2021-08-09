export default function(title, description, ii) {
  const main = document.getElementsByTagName('main')[0];

  const proSec = document.createElement('section');
  const proDesHidBtn = document.createElement('button')
  const proSecTit = document.createElement('section');
  const proTit = document.createElement('h2');
  const proDesEdiBtn = document.createElement('button')
  const proDesCont = document.createElement('div');
  const proDes = document.createElement('p');
  const todSec = document.createElement('section');
  const todList = document.createElement('ul')
  const todAddBtn = document.createElement('button')

  // const todFormCont = document.createElement('section')
  // const todForm = document.createElement('form')
  
  proSec.classList.add('project', `pro-${ii}`);
  proSecTit.classList.add('project-title-area');
  proDesHidBtn.classList.add('hide-button', 'project-btns')
  proTit.classList.add('project-title');
  proDesEdiBtn.classList.add('edit-button', 'project-btns');
  proDesCont.classList.add('des');
  todSec.classList.add('project-todos');
  todList.setAttribute('id', `todos-${ii}`);
  todAddBtn.classList.add('todo-add-btn')

  main.appendChild(proSec);
  proSec.appendChild(proSecTit);
  proSecTit.appendChild(proDesHidBtn);
  proSecTit.appendChild(proTit);
  proSecTit.appendChild(proDesEdiBtn);
  proSec.appendChild(proDesCont);
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