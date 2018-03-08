import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
    input: 'src/flv.js',
    output: {
        file: 'dist/flv.min.js',
        format: 'umd',
        name: 'flvjs',
        sourcemap: true,
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
        nodeResolve({
            jsnext: true,
        }),
        commonjs({
            sourcemap: true,
        }),
        uglify({
            warnings: false,
        }),
    ]
};
