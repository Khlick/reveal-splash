const gulp = require('gulp');
const rollup = require('rollup');
const resolve = require('@rollup/plugin-node-resolve').nodeResolve;
const commonjs = require('@rollup/plugin-commonjs');
const { babel: rollupBabel } = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');

// Babel configuration for both UMD and ESM builds
const babelConfig = {
  babelHelpers: 'bundled',
  ignore: ['node_modules'],
  compact: false,
  extensions: ['.js'],
  plugins: [
    'transform-html-import-to-string'
  ],
  presets: [
    ['@babel/preset-env', {
      corejs: 3,
      useBuiltIns: 'usage',
      modules: false
    }]
  ]
};

// Specific Babel configuration for ES module build
const babelConfigESM = JSON.parse(JSON.stringify(babelConfig));
babelConfigESM.presets[0][1].targets = {
  browsers: [
    'last 2 Chrome versions',
    'last 2 Safari versions',
    'last 2 iOS versions',
    'last 2 Firefox versions',
    'last 2 Edge versions'
  ]
};

// Cache to improve build performance by reusing previous results
let cache = {};

// Task to build the reveal-preloader plugin
gulp.task('build:reveal-splash', () => {
  return rollup.rollup({
    cache: cache['src/plugin.js'],
    input: 'src/plugin.js',
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false,
        extensions: ['.js', '.json']
      }),
      commonjs(),
      rollupBabel({
        ...babelConfig,
        babelHelpers: 'bundled',
        extensions: ['.js'],
        exclude: 'node_modules/**',
      }),
      terser() // Minify the output
    ]
  }).then(bundle => {
    cache['src/plugin.js'] = bundle.cache;

    // Write ES module version
    bundle.write({
      file: 'dist/reveal-splash.esm.js',
      format: 'es',
      name: 'Splash'
    });

    // Write UMD version
    bundle.write({
      file: 'dist/reveal-splash.js',
      name: 'Splash',
      format: 'umd'
    });
  });
});

// Task to copy the built files to the tests directory
gulp.task('copy:dist', () => {
  return gulp.src('dist/*')
    .pipe(gulp.dest('tests/'));
});

// Default task: clean, build, and copy the files
gulp.task('default', gulp.series('build:reveal-splash'));
