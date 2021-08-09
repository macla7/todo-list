export default function(user) {

  console.log(user)

  localStorage.clear();

  user.state['projects'].forEach((pro, i) => {
    localStorage.setItem(`p${i}Name`, pro.state['title'] )
    localStorage.setItem(`p${i}Description`, pro.state['description'] )
    localStorage.setItem(`p${i}Marker`, String(pro.state['projectMarker']) )
    localStorage.setItem(`p${i}TodoMarker`, String(pro.state['todoMarker']) )

    localStorage.setItem('projectCounter', String(i+1))

    if (pro.state['todos'] != []) {
      pro.state['todos'].forEach((todo, ii) => {
        console.log(todo)
        localStorage.setItem(`p${i}t${ii}Title`, todo['title'])
        localStorage.setItem(`p${i}t${ii}Description`, todo['description'])
        localStorage.setItem(`p${i}t${ii}DueDate`, todo['dueDate'])
        localStorage.setItem(`p${i}t${ii}Priority`, String(todo['priority']))
        localStorage.setItem(`p${i}t${ii}Marker`, String(todo['marker']))
        localStorage.setItem(`p${i}t${ii}Complete`, todo['complete'])
        
        localStorage.setItem(`p${i+1}TodoCounter`, ii+1)
      })
    }
  })
}