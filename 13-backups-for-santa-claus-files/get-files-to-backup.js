export function getFilesToBackup (lastBackup = 1546300800, changes = []) {
  const latestChanges = changes
    .filter((change) => change[1] > lastBackup)
    .map((change) => change[0])

  if (latestChanges.length > 0) {
    return [...new Set(latestChanges)].sort((a, b) => a - b)
  }

  return []
}
