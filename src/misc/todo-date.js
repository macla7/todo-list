export default function(parseISO, format, formatDistance, isBefore) {
  return function(date) {
    console.log(date)
    if (date == '') { return '' }
    if (isBefore(Date.now(), parseISO(date))) {
      return formatDistance(parseISO(date), Date.now());
    } else {
      return formatDistance(parseISO(date), Date.now()) + ' late'
    }
  }
}