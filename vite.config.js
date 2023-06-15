import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { EsLinter, linterPlugin } from 'vite-plugin-linter'
import * as packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    linterPlugin({
      include: ['./src}/**/*.{js,jsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.js'),
      name: 'spoty-fire-ui',
      formats: ['es', 'umd'],
      fileName: (format) => `spoty-fire-ui.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    testMatch: ['./tests/**/*.test.jsx'],
    globals: true,
  },
}))
