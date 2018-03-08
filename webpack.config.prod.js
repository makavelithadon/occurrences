const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'lib'),
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    library: 'Occurrences',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
