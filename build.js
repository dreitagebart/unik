import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']
const input = 'src/index.ts'
const external = [/@babel\/runtime/, 'react', 'styled-components']
const globals = {
  react: 'React',
  'styled-components': 'styled'
}

const plugins = [
  babel({
    extensions,
    exclude: 'node_modules/**',
    babelHelpers: 'runtime'
  }),
  commonjs(),
  nodeResolve({ extensions })
]

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
      globals
    },
    external,
    plugins
  },
  {
    input,
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      globals
    },
    external,
    plugins
  }
]
