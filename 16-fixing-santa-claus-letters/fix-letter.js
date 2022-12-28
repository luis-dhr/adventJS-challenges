export function fixLetter (letter = '') {
  return letter
    .replace(/([,.?!])([^,.?!])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .replace(/([,.?!]{2,})/g, ($1) => $1[0])
    .replace(/(santa claus)/gi, 'Santa Claus')
    .trim()
    .replace(/\s([,.?!])/g, '$1')
    .replace(
      /(^|\.\s+|\?\s+|!\s+)([a-z])/g,
      (_, p1, p2) => p1 + p2.toUpperCase()
    )
    .replace(/([^.?!])$/g, '$1.')
}
