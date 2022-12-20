export function wrapping (gifts) {
  const wrapped = gifts.map((gift) => {
    const giftWrappingPaper = '*'.repeat(gift.length + 2)
    return `${giftWrappingPaper}\n*${gift}*\n${giftWrappingPaper}`
  })

  return wrapped
}
