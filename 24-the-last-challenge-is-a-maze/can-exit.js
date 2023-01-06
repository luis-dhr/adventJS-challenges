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

// ¡Ha llegado el día!
// Hoy vamos a repartir los regalos…
// pero los almacenes son un labertinto y los elfos están perdidos.

// Indielfo Jones quiere escribir un programa que al recibir una matriz,
// sepa si puede salir o no del laberinto rápidamente desde su entrada a la salida.

// Los laberintos tienen las siguientes posiciones:

// W: Es una pared, no se puede pasar por ahí.
// S: Punto de entrada al almacén.
// E: Punto de salida del almacén.
// : Los espacios en blanco es por donde se puede pasar.
// Los movimientos válidos son de una posición hacia arriba, abajo, izquierda o derecha. No se puede mover en diagonal.

canExit([
  [' ', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]) // -> true

// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

canExit([
  [' ', ' ', 'W', 'W', 'S'],
  [' ', ' ', ' ', 'W', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]) // -> false

// No hay manera de llegar de [0, 4] a [4, 4]

// Recuerda que:

// Sólo tienes que devolver si se puede salir del laberinto con un booleano.
// Las paredes W no se pueden saltar.
// No se pueden salir de los límites de la matriz, siempre hay que seguir un camino interno.
