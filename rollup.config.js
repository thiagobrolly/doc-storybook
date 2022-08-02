import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDeps from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

export const rollupConfig = [
  {
    input: './src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['styled-components', 'react', 'react-dom'],
    plugins: [
      peerDeps(),
      resolve(),
      commonjs(),
      terser(),
      typescript({
        tsconfig: `./tsconfig.json`,
      }),
      postcss({
        extensions: ['.css'],
      })
    ],
  },
];
