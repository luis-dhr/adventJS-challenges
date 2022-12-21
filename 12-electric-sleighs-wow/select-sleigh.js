export function selectSleigh (distance, sleighs) {
  const maxWattConsumption = 20

  const usableSleighs = sleighs
    .map((sleigh) => ({
      name: sleigh.name,
      consumption: (sleigh.consumption * distance)
    }))
    .filter((wattConsumption) => {
      return (wattConsumption.consumption <= maxWattConsumption)
    })

  if (usableSleighs.length > 0) {
    return usableSleighs.at(-1).name
  }

  return ''
}
