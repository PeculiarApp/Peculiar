import commonjs from '@rollup/plugin-commonjs'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import svelte from 'rollup-plugin-svelte'
import autoPreprocess from 'svelte-preprocess'
import copy from 'rollup-plugin-copy'

export default {
  input: "src/plugin/main.ts",
  output: {
    file: "build/plugin/main.js",
    format: "cjs",
    exports: "default",
  },
  external: ["obsidian"],
  plugins: [
    svelte({ emitCss: false, preprocess: autoPreprocess() }),
    nodeResolve({ browser: true }),
    typescript(),
    commonjs(),
    copy({
      targets: [
        { src: 'src/plugin/statics/*', dest: 'build/plugin' },
        { src: 'src/backend/*', dest: 'build/backend' },
      ]
    })
  ],
};