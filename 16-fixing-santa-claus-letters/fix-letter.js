function fixLetter (letter = '') {
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

fixLetter(' hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  ')
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
