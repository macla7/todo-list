export default function(title, description, priority) {
  let state = {
    title,
    description,
    priority,
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