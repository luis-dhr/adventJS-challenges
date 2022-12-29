export function howManyReindeers (reindeerTypes, gifts) {
  return gifts.map((gift) => {
    let max = gift.weight
    const reindeers = reindeerTypes
      .filter((reindeer) => reindeer.weightCapacity < max)
      .map((reindeer) => [reindeer.type, reindeer.weightCapacity])
      .sort((a, b) => a[1] - b[1])

    const result = reindeers.map(([type]) => ({ type, num: 0 }))

    reindeers.forEach((_, i) => {
      const sliced = reindeers.slice(0, reindeers.length - i)
      const total = sliced.reduce((acc, [_, weight]) => acc + weight, 0)

      sliced.forEach((_, j) => {
        result[j].num += Math.floor(max / total)
      })

      max %= total
    })

    return { country: gift.country, reindeers: result.reverse() }
  })
}
