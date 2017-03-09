import uglify from 'rollup-plugin-uglify'
import license from 'rollup-plugin-license'

export default {
  entry: 'src/fetch-inject.js',
  format: 'iife',
  moduleName: 'fetchInject',
  plugins: [
    uglify(),
    license({
      banner: `Copyright (c) <%= moment().format('YYYY') %> Josh Habdas\n@licence MIT`
    })
  ],
  dest: 'dist/fetch-inject.js'
}
