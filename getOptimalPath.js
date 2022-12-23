function getOptimalPath (path = []) {
  const optimalPath = path.reduceRight((prev, curr) => {
    const newRow = curr.map((val, idx) => {
      return val + Math.min(prev[idx], prev[idx + 1])
    })
    return newRow
  })

  return optimalPath[0]
}

getOptimalPath([[0], [2, 3]]) // 2
// 0 -> 2

getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5
// 0 -> 4 -> 1

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
/*
    0
   / \
  7   4
 / \ / \
2   4   6
*/
// 1 -> 1 -> 5 -> 1
