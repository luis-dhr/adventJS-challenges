export function getOptimalPath (path = []) {
  const optimalPath = path.reduceRight((prev, curr) => {
    const newRow = curr.map((val, idx) => {
      return val + Math.min(prev[idx], prev[idx + 1])
    })
    return newRow
  })

  return optimalPath[0]
}

/*
    0
   / \
  7   4
 / \ / \
2   4   6
*/
// 1 -> 1 -> 5 -> 1
