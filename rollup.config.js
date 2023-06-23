import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import rename from 'rollup-plugin-rename';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default [
  {
    preserveModules: true,
    input: './src/index.js',
    output: [
      {
        dir: './dist',
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
        minimize: true
      }),
      terser(), // minifies generated bundles
      rename({
        include: 'src/index.js',
        map: (name) => name.replace('src', '.'),
      }),
      rename({
        include: ['**/*.js', '**/*.jsx', '**/*.css'],
        map: (name) => name.replace('src/components', 'components'),
      }),
      rename({
        include: 'public/**/*.jsx',
        map: (name) => name.replace('public/svg', 'svg'),
      })
    ]
  }
];