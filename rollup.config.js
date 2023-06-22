import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default [
  {
    preserveModules: true,
    input: './src/index.js',
    output: [
      {
        name: 'spoty-fire-ui',
        dir: './build',
        format: 'es',
      }
    ],
    external: [
      ...Object.keys(pkg.peerDependencies || {}),
      ...Object.keys(pkg.devDependencies || {})
    ],
    plugins: [
      nodeResolve({
        extensions: ['.js',  '.jsx', '.css']
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      postcss({
        plugins: [autoprefixer()],
        sourceMap: true,
        minimize: true
      }),
      terser() // minifies generated bundles
    ]
  }
];