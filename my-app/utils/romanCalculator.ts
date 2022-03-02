export const roman_values: any = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 500,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
}

export const numberToRoman = (numberInput: number) => {
  console.log(numberInput)
  if (numberInput > 9999) {
    console.log('number is to big to convert into a roman value')
    return 'number is to big to convert into a roman value'
  } else {
    let result = ''

    for (let key of Object.keys(roman_values)) {
      result += key.repeat(Math.floor(numberInput / roman_values[key]))
      numberInput %= roman_values[key]
    }

    console.log(result)
    return result
  }
}
