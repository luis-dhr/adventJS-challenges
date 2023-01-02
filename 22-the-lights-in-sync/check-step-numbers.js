export function checkStepNumbers (systemNames, stepNumbers) {
  const systems = new Map()

  systemNames.forEach((name, index) => {
    const steps = systems.get(name) || []
    steps.push(stepNumbers[index])
    systems.set(name, steps)
  })

  const systemsArr = Array.from(systems.values())

  return systemsArr.every((steps) =>
    steps.every((step, index, arr) =>
      (index === 0) || (step > arr.at(index - 1))
    )
  )
}
