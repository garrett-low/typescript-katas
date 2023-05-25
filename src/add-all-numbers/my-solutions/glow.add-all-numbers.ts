export function getTotal(numbers: number[]): number {
  let sum = 0
  numbers.forEach(element => {
    sum += element
  })

  return sum
}
