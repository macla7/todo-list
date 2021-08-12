export default function(parseISO, format, formatDistance, isBefore) {
  return function(date, domElement) {
    console.log(date)
    if (date == '') { return '' }
    if (isBefore(Date.now(), parseISO(date))) {
      return formatDistance(parseISO(date), Date.now());
    } else {
      domElement.classList.add('late')
      return formatDistance(parseISO(date), Date.now()) + ' late'
    }
  }
}