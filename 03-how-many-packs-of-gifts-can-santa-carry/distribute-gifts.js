export function distributeGifts (packOfGifts, reindeers) {
  const packWeight = packOfGifts.reduce((acc, pack) => acc + pack.length, 0)

  const supportedWeight = reindeers.reduce(
    (acc, reindeer) => acc + 2 * reindeer.length,
    0
  )

  return Math.floor(supportedWeight / packWeight)
}
