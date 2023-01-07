export function createCube (size) {
  const cube = new Array(size).fill('').reduce(
    (acc, _, i) => {
      const spaces = ' '.repeat(i)
      const top = `${spaces}${'/\\'.repeat(size - i)}${'_\\'.repeat(size)}`
      const bottom = `${spaces}${'\\/'.repeat(size - i)}${'_/'.repeat(size)}`

      return `${top}\n${acc}${bottom}\n`
    }
    , ''
  )

  return cube.trimEnd()
}
