export default function(user) {

  localStorage.clear();

  user.state['projects'].forEach((pro, i) => {
    localStorage.setItem(`p${i}Name`, pro.state['title'] )
    localStorage.setItem(`p${i}Description`, pro.state['description'] )
    localStorage.setItem(`p${i}Marker`, String(pro.state['projectMarker']) )

    localStorage.setItem('projectCounter', String(i+1))

    if (pro.state['todos'] != []) {
      pro.state['todos'].forEach((todo, ii) => {
        localStorage.setItem(`p${i}t${ii}Title`, todo['title'])
        localStorage.setItem(`p${i}t${ii}Description`, todo['description'])
        localStorage.setItem(`p${i}t${ii}DueDate`, todo['dueDate'])
        localStorage.setItem(`p${i}t${ii}Priority`, String(todo['priority']))
        localStorage.setItem(`p${i}t${ii}Complete`, String(todo['complete']))

        localStorage.setItem(`p${i}TodoCounter`, ii+1)
      })
    }
  })
}