module.exports = {
  presets: [ [ 'es2015', { loose: true, modules: false } ], 'stage-2' ],
  plugins: [ [ 'transform-react-jsx', { pragma: 'h' } ] ],
  env: {
    test: {
      plugins: [
        [ 'transform-es2015-modules-commonjs', { loose: true } ],
        [ 'transform-react-jsx', { pragma: 'h' } ]
      ]
    }
  }
};
