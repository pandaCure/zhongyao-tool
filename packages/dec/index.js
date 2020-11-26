'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/dec.cjs.prod.js')
} else {
  module.exports = require('./dist/dec.cjs.js')
}
