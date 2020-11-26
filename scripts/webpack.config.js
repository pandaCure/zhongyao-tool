const path = require('path')
const baseWebpackConfig = require('./webpack.base.config.js')
const entryFile = path.resolve(process.cwd(), 'packages/sum/index.ts')
module.exports = {
  mode: 'development',
  entry: {
    sum: './packages/sum/index.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'packages/sum/dist')
  },
  ...baseWebpackConfig
}
