export function fitsInOneBox (boxes) {
  return boxes
    .sort((a, b) => (a.l + a.w + a.h) - (b.l + b.w + b.h))
    .slice(1)
    .every((box, index) => {
      const prevBox = boxes[index]
      return (box.l > prevBox.l) && (box.w > prevBox.w) && (box.h > prevBox.h)
    })
}
