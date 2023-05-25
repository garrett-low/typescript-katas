export function getHighestNumber(numbers: number[]): number {
  let highest = -Number.MAX_VALUE
  numbers.forEach(element => {
    if (element > highest) {
      highest = element
    }
  })

  return highest
}
