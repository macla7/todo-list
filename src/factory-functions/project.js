export default function(title, description, priority) {
  let state = {
    title,
    description,
    priority,
    todoMarker: 0,
    todos: []
  }

  const newTodo = p => {
    state.todos.push(p);
    state.todoMarker++;
  }

  return Object.assign(
    {},
    { state, newTodo }
  )
}