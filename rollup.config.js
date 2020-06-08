import path from 'path';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json'

// import buble from 'rollup-plugin-buble'; // 除非兼容ie11及以下
import { uglify } from 'rollup-plugin-uglify'
import { minify } from 'uglify-es';

/** @type {import('rollup').RollupOptions} */
const options = {
    input: 'src/main.ts',
    plugins:[
      resolve(),
      uglify({},minify)
    ],
    output: [{
        file: path.resolve(__dirname, pkg.main),
        format: 'cjs'
    }, {
        file:  path.resolve(__dirname, pkg.module),
        format: 'es',
    }, {
        file: path.resolve(__dirname, pkg.unpkg),
        format: 'umd',
        name:'lzu_js_sdk',
        plugins: [terser()]
    }],
    plugins: [resolve(),commonjs(),typescript()]
};
export default options;
