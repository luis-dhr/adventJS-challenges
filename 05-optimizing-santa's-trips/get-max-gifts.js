export function getMaxGifts (giftsCities, maxGifts, maxCities) {
  return giftsCities
    .sort((a, b) => b - a)
    .reduce((acc, gift) => {
      const giftSum = acc + gift
      const isSumValid = (giftSum <= maxGifts) && (giftSum !== maxGifts - 1)

      if (maxCities !== 0 && isSumValid) {
        maxCities--
        acc += gift
      }

      return acc
    }, 0)
}
