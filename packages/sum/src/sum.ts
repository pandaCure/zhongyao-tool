/**
 * @param  a - number 数字1
 * @param  b - number 数字2
 * @returns number
 */
const sum = (a: number, b: number): number => a + b
export interface IName {
  name: string
  age: number
}
const name: IName = {
  name: 'zzy',
  age: 10
}
export { sum, name }
// Warning: src/sum.ts:2:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
// Warning: src/sum.ts:2:12 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
