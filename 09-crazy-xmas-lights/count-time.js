export function countTime (leds) {
  const arr = leds.join('').split('1')
  const first = arr.shift()
  arr.unshift(first + arr.pop())
  return (Math.max(...arr.map(led => led.length)) * 7)
}
