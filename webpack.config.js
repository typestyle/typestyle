var webpack = require('webpack');
var minimize = process.argv.indexOf('--minimize') !== -1;

module.exports = {
    /** Build from built js file */
    entry: {
      typestyle: './lib/index.js',
    },
    output: {
        filename: minimize?'./umd/typestyle.min.js':'./umd/typestyle.js',
        libraryTarget: 'umd',
        /** The library name on window */
        library: 'typestyle'
    },
    plugins:minimize?[new webpack.optimize.UglifyJsPlugin({ minimize: true })]:[]
};
