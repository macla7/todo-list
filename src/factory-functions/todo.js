export default function(title, description, dueDate, priority, marker, complete = false) {
  let state = {
    title,
    description,
    dueDate,
    priority,
    marker,
    complete
  }
  return Object.assign(
    {},
    state
  )
}