var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    main: './main.js'
  },
  output: {
    path: path.join(__dirname, 'src'),
    filename: '[name].bundle.js'
  },
  devServer: {
    stats: 'errors-only'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node-modules/
      }
    ]
  }
}
