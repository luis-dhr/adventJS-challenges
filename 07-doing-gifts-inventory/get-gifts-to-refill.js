export function getGiftsToRefill (a1, a2, a3) {
  const giftsToRefill = new Set([...a1, ...a2, ...a3])

  return [...giftsToRefill].filter((gift) =>
    a1.includes(gift) +
    a2.includes(gift) +
    a3.includes(gift) === 1
  )
}
