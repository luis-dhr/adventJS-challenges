export function checkPart (part) {
  const checkForPalindrome = (str = '') => {
    const strLength = str.length
    const strMiddle = Math.floor(strLength / 2)

    return [...str].every((char, index) => {
      const charIndex = strLength - index - 1
      return char === str[charIndex] || index >= strMiddle
    })
  }

  const originalIsPalindrome = checkForPalindrome(part)
  if (originalIsPalindrome) return true

  return [...part].some((char) => {
    const newPart = part.replace(char, '')
    const isPalindrome = checkForPalindrome(newPart)
    return isPalindrome
  })
}
