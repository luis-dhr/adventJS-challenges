export function getCompleted (part, total) {
  const [partInSeconds, totalInSeconds] = [part, total].map(time => {
    const [hours, minutes, seconds] = time.split(':').map(Number)
    return (hours * 60 * 60) + (minutes * 60) + seconds
  })

  if ([partInSeconds, totalInSeconds].every(time => time === 0)) {
    return '0/0'
  }

  if (partInSeconds > totalInSeconds) {
    return '1/1'
  }

  let [divisor, remainder] = [partInSeconds, totalInSeconds]

  while (remainder !== 0) {
    const temp = remainder
    remainder = divisor % remainder
    divisor = temp
  }

  return `${partInSeconds / divisor}/${totalInSeconds / divisor}`
}
