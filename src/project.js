export default function(title, description, priority) {
  let state = {
    title,
    description,
    priority,
    todos: []
  }
  return Object.assign(
    {},
    { state }
  )
}