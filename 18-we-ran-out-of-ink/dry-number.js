export function dryNumber (dry, numbers) {
  const numbersArray = Array.from({ length: numbers }, (_, i) => i + 1)

  const dryNumbers = numbersArray.filter((number) => {
    const numberString = number.toString()
    return numberString.includes(dry)
  })

  return dryNumbers
}
