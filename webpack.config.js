const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',  
  entry: './src/js/plurals.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'main.js'
  }
};