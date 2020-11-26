'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/sum.cjs.prod.js')
} else {
  module.exports = require('./dist/sum.cjs.js')
}
