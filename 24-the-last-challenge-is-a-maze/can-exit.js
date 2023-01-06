export function canExit (maze) {
  const startRow = maze.findIndex(row => row.includes('S'))
  const start = { row: startRow, col: maze[startRow].indexOf('S') }

  const endRow = maze.findIndex(row => row.includes('E'))
  const end = { row: endRow, col: maze[endRow].indexOf('E') }

  const visited = new Set()
  const queue = [start]

  while (queue.length > 0) {
    const { row, col } = queue.shift()

    if (visited.has(`${row}-${col}`)) continue

    visited.add(`${row}-${col}`)

    if (row === end.row && col === end.col) return true

    const right = maze[row][col + 1]
    if (right && right !== 'W') queue.push({ row, col: col + 1 })

    const left = maze[row][col - 1]
    if (left && left !== 'W') queue.push({ row, col: col - 1 })

    const up = maze[row - 1]
    if (up && up[col] !== 'W') queue.push({ row: row - 1, col })

    const down = maze[row + 1]
    if (down && down[col] !== 'W') queue.push({ row: row + 1, col })
  }

  return false
}
