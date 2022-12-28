function dryNumber (dry, numbers) {
  const numbersArray = Array.from({ length: numbers }, (_, i) => i + 1)

  const dryNumbers = numbersArray.filter((number) => {
    const numberString = number.toString()
    return numberString.includes(dry)
  })

  return dryNumbers
}

dryNumber(1, 15) // [1, 10, 11, 12, 13, 14, 15]

dryNumber(2, 20) // [2, 12, 20]

// Challenge #18: We ran out of ink!
