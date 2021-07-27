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

  return Object.assign(
    {},
    { state, newProject, printProject },
    
  )
};

