import path from 'path'
import ts from 'rollup-plugin-typescript2'
// import replace from '@rollup/plugin-replace'
// import json from '@rollup/plugin-json'
const packagesDir = path.resolve(__dirname, 'packages')
const packageDir = path.resolve(packagesDir, process.env.TARGET)
const resolve = (p) => path.resolve(packageDir, p)
const pkg = require(resolve(`package.json`))
const name = path.basename(packageDir)
console.log(process.env.TYPES)
const outputConfigs = {
  'esm-bundler': {
    file: resolve(`dist/${name}.esm-bundler.js`),
    format: `es`
  },
  'esm-browser': {
    file: resolve(`dist/${name}.esm-browser.js`),
    format: `es`
  },
  cjs: {
    file: resolve(`dist/${name}.cjs.js`),
    format: `cjs`
  },
  global: {
    file: resolve(`dist/${name}.global.js`),
    format: `iife`
  }
}
const defaultFormats = ['esm-bundler', 'cjs']
const packageConfigs = defaultFormats.map((format) => createConfig(format, outputConfigs[format]))
module.exports = packageConfigs
function createConfig(format, output, plugins = []) {
  output.sourcemap = !!process.env.SOURCE_MAP
  output.externalLiveBindings = false
  const shouldEmitDeclarations = process.env.TYPES != null
  const tsPlugin = ts({
    check: process.env.NODE_ENV === 'production',
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
    tsconfigOverride: {
      compilerOptions: {
        sourceMap: output.sourcemap,
        declaration: shouldEmitDeclarations,
        declarationMap: shouldEmitDeclarations
      },
      exclude: ['**/__tests__']
    }
  })
  const entryFile = `src/index.ts`
  const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...['path', 'url', 'stream']
  ]
  return {
    input: resolve(entryFile),
    external,
    plugins: [tsPlugin],
    output,
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    },
    treeshake: {
      moduleSideEffects: false
    }
  }
}
