export function countHours (year, holidays) {
  return holidays.reduce((acc, holiday) => {
    const dayOfTheWeek = new Date(`${holiday}/${year}`).getDay()

    if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
      return acc
    }

    return acc + 2
  }, 0)
}
