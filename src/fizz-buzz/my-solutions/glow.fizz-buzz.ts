type numberOrString = number | string

export function fizzBuzz(input: number): numberOrString[] {
  const output: numberOrString[] = []
  const fizzMap = new Map<number, string>([
    [3, 'fizz'],
    [5, 'buzz']
  ])

  for (let i = 0; i < input; i++) {
    for (const divisorKey of fizzMap.keys()) {
      if ((i + 1) % divisorKey !== 0) {
        continue
      }

      if (!output[i]) {
        output[i] = fizzMap.get(divisorKey) ?? ''
      } else {
        output[i] += fizzMap.get(divisorKey) ?? ''
      }
    }
    if (!output[i]) {
      output[i] = i + 1
    }
  }

  return output
}
