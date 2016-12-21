module.exports = {
    /** Build from built js file */
    entry: {
      typestyle: './lib/index.js',
    },
    output: {
        filename: './umd/typestyle.js',
        libraryTarget: 'umd',
        /** The library name on window */
        library: 'typestyle'
    }
};
