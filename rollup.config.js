import terser from '@rollup/plugin-terser';

export default [
  // UMD build for browsers
  {
    input: 'src/toster-js.js',
    output: {
      file: 'dist/toster-js.js',
      format: 'umd',
      name: 'Toster',
      exports: 'named'
    },
    plugins: [terser()]
  },
  // ES module build
  {
    input: 'src/toster-js.js',
    output: {
      file: 'dist/toster-js.esm.js',
      format: 'es'
    },
    plugins: [terser()]
  },
  // CommonJS build
  {
    input: 'src/toster-js.js',
    output: {
      file: 'dist/toster-js.cjs.js',
      format: 'cjs',
      exports: 'named'
    },
    plugins: [terser()]
  }
];
