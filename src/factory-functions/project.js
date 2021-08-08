export default function(title, description, priority, projectMarker) {
  let state = {
    title,
    description,
    priority,
    projectMarker,
    todoMarker: 0,
    todos: []
  }

  const newTodo = p => {
    state.todos.push(p);
    state.todoMarker++;
  }

  const domPrinter = (ulId) => {
    const ul = document.getElementById(ulId);
    ul.innerHTML = '';
    let todo;
    for (let ii = 0; ii < state['todos'].length; ii++) {
      todo = state['todos'][ii]['state']
      todoDomBuilder(todo['title'], project['description'], ii);
      todoDomBuilder({state}, ii);
    }
  }

  return Object.assign(
    {},
    { state, newTodo }
  )
}