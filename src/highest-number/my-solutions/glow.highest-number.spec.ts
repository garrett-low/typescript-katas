import { getHighestNumber } from './glow.highest-number'

describe('getHighestNumber', () => {
  it('should get the highest number given an array of one number', () => {
    const given = [42]

    const actual = getHighestNumber(given)

    expect(actual).toBe(42)
  })

  it('should get the highest number given an array of several numbers', () => {
    const given = [1, 3, 2]

    const actual = getHighestNumber(given)

    expect(actual).toBe(3)
  })

  it('should get the only element in the list if there is only one element', () => {
    const given = [100]

    const actual = getHighestNumber(given)

    expect(actual).toBe(100)
  })

  it('should get the highest numbers amongst several numbers', () => {
    const given = [1, 2, 3]

    const actual = getHighestNumber(given)

    expect(actual).toBe(3)
  })

  it('should get the highest numbers amongst several negative numbers', () => {
    const given = [-1, -2, -3]

    const actual = getHighestNumber(given)

    expect(actual).toBe(-1)
  })
})
