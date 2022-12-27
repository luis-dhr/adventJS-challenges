export function carryGifts (gifts = [], maxWeight = '') {
  const stringGifts = gifts.join(' ')
  const bags = stringGifts.match(
    new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, 'g')
  )
  return bags || []
}
