export default function(title, description, dueDate, priority, marker) {
  let state = {
    title,
    description,
    dueDate,
    priority,
    marker,
    complete: false
  }
  return Object.assign(
    {},
    state
  )
}