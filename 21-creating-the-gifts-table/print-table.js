export function printTable (gifts) {
  const giftLength = 'Gift'.length
  const quantityLength = 'Quantity'.length

  const maxGiftLength = Math.max(...gifts.map((gift) => gift.name.length))
  const maxQuantityLength = Math.max(
    ...gifts.map((gift) => gift.quantity.toString().length)
  )

  const giftColumnLength = Math.max(maxGiftLength, giftLength)
  const quantityColumnLength = Math.max(maxQuantityLength, quantityLength)
  const tableWidth = giftColumnLength + quantityColumnLength + 7

  const topBorder = '+'.repeat(tableWidth)
  const bottomBorder = '*'.repeat(tableWidth)
  const horizontalLine = `| ${'-'.repeat(giftColumnLength)} | ${'-'.repeat(
    quantityColumnLength
  )} |`

  const title = `| ${'Gift'.padEnd(giftColumnLength)} | ${'Quantity'.padEnd(
    quantityColumnLength
  )} |`

  const rows = gifts.map((gift) => {
    const giftName = gift.name.padEnd(giftColumnLength)
    const giftQuantity = gift.quantity.toString().padEnd(quantityColumnLength)
    return `| ${giftName} | ${giftQuantity} |`
  })

  const header = `${topBorder}\n${title}\n${horizontalLine}`
  const body = rows.join('\n')
  const footer = `\n${bottomBorder}`

  return `${header}\n${body}${footer}`
}
