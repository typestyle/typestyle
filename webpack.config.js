var path = require('path')
var webpack = require('webpack')

module.exports = [
  {
    // unminified
    entry: {
      'typestyle': './lib/index.js'
    },
    output: {
      filename: './umd/typestyle.js',
      libraryTarget: 'umd',
      library: 'typestyle'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ 
            compress: false,
            comments: true
        })
    ]
  },
  {
    // minified
    entry: {
      'typestyle.min': './lib/index.js'
    },
    output: {
      filename: './umd/typestyle.min.js',
      libraryTarget: 'umd',
      library: 'typestyle'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ 
            compress: true 
        })
    ]
  }
]
