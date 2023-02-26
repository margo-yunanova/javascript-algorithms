const humanReadable = (number) => {
  const seconds = number % 60;
  const minutes = (number - seconds)%3600/60;
  const hours = Math.floor(number/3600)

  return [hours, minutes, seconds].map(item => item.toString().padStart(2, '0')).join(':')
}

console.log(humanReadable(59))
