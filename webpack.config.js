const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',  
  entry: {
    plurals: './src/js/plurals.js',
    adjectives: './src/js/adjectives.js',
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
        vue: 'vue/dist/vue.js'
    },
  },
};