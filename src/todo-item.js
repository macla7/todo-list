export default function(title, description, dueDate, priority) {
  let state = {
    title,
    description,
    dueDate,
    priority,
    complete: false
  }
  return Object.assign(
    {},
    state
  )
}