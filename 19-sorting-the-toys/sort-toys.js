export function sortToys (toys, positions) {
  toys.sort((a, b) => {
    return positions[toys.indexOf(a)] - positions[toys.indexOf(b)]
  })
  return toys
}
