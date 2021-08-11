export default function(title, description, dueDate, priority, complete = 'false') {
  let state = {
    title,
    description,
    dueDate,
    priority,
    complete,
  }
  return Object.assign(
    {},
    state
  )
}