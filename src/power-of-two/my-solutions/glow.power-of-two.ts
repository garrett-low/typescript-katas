export function getPoweredByTwo(input: number[]): number[] {
  for (let index = 0; index < input.length; index++) {
    input[index] = input[index] * input[index]
  }

  return input
}
