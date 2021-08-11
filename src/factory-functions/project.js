export default function(title, description) {
  let state = {
    title,
    description,
    projectMarker: '',
    todos: []
  }

  const newTodo = p => {
    state.todos.push(p);
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