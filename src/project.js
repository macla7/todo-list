export default function(title, description, priority) {
  let state = {
    title,
    description,
    priority
  }
  return Object.assign(
    {},
    { state }
  )
}