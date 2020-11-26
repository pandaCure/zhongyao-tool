const baseWebpackConfig = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-typescript'],
              plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-optional-chaining'],
                ['@babel/plugin-proposal-nullish-coalescing-operator'],
                ['@babel/plugin-proposal-class-properties', { loose: true }]
              ]
            }
          }
        ]
      }
    ]
  }
}
module.exports = baseWebpackConfig
