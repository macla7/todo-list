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

  return Object.assign(
    {},
    { state, newTodo }
  )
}