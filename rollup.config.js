import uglify from 'rollup-plugin-uglify';

export default {
    input: 'src/index.js',
    output: {
        file: 'index.js',
        format: 'umd'
    },
    name: 'moment-is-zero',
    plugins: [
        uglify()
    ]
};