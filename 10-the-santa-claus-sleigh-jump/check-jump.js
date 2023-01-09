export function checkJump (heights) {
  const max = Math.max(...heights)
  const left = heights.splice(0, heights.indexOf(max))

  const leftCondition = left
    .slice(1)
    .every((height, index) => height >= left[index])

  const rightCondition = heights
    .slice(1)
    .every((height, index) => height <= heights[index])

  const sideCondition = leftCondition && rightCondition
  const isValidJump = sideCondition && !!left.length && heights.length > 1
  return isValidJump
}
