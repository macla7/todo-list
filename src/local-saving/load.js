export default function(user, Project, Todo) {
  let projectCounter = localStorage.getItem('projectCounter')
  let todoCounter;
  let pName;
  let pDescription;
  let pMarker;
  let pTodoMarker;
  let tTitle;
  let tDescription;
  let tDueDate;
  let tPriority;
  let tMarker;
  let tComplete;
  let project;
  
  for (let i = 0; i < projectCounter; i++) {
    pName = localStorage.getItem(`p${i}Name`)
    pDescription = localStorage.getItem(`p${i}Description`)
    pMarker = localStorage.getItem(`p${i}Marker`)
    pTodoMarker = localStorage.getItem(`p${i}TodoMarker`)

    project = Project(pName, pDescription, pMarker, pTodoMarker)
    user.newProject(project);

    todoCounter = localStorage.getItem(`p${i}TodoCounter`)
    for (let j = 0; j < todoCounter; j++) {
      tTitle = localStorage.getItem(`p${i}t${j}Title`)
      tDescription = localStorage.getItem(`p${i}t${j}Description`)
      tDueDate = localStorage.getItem(`p${i}t${j}DueDate`)
      tPriority = localStorage.getItem(`p${i}t${j}Priority`)
      tMarker = localStorage.getItem(`p${i}t${j}Marker`)
      tComplete = localStorage.getItem(`p${i}t${j}Complete`)

      project.newTodo(Todo(tTitle, tDescription, tPriority, tMarker, tComplete))
    }
  }
}