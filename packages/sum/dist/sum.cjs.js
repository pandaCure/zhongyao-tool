'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

var dec = require('@zhongyao/dec')

/**
 * @param  a - number 数字1
 * @param  b - number 数字2
 * @returns number
 */
const sum = (a, b) => a + b
const name = {
  name: 'zzy',
  age: 10
}
// Warning: src/sum.ts:2:4 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
// Warning: src/sum.ts:2:12 - (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'

console.log(dec.dec(0, 1))
/**
 * (!) Entry module "packages/sum/src/index.ts" is implicitly using "default" export mode, which means for CommonJS output that its default export is assigned to "module.exports". For many tools, such CommonJS output will not be interchangeable with the original ES module. If this is intended, explicitly set "output.exports" to either "auto" or "default", otherwise you might want to consider changing the signature of "packages/sum/src/index.ts" to use named exports only.
 */

exports.name = name
exports.sum = sum
