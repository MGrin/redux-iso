'use strict';

const path = require('path');

const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const nodemon = require('gulp-nodemon');
const named = require('vinyl-named');

// const sync = require('gulp-sync')(gulp);

gulp.task('compile-server', () => {
  const stream = gulp.src(['src/server/**/*.js', 'src/common/**/*.js'])
    .pipe(babel({
      presets: ['es2015'],
      plugins: ['add-module-exports']
    })).pipe(gulp.dest('dist/server'));

    return stream;
});

gulp.task('compile-client', () => {
  const stream = gulp.src(['src/client/**/*.js', 'src/common/**/*.js'])
    .pipe(babel({
      presets: ['es2015', 'react'],
      plugins: ['add-module-exports']
    })).pipe(gulp.dest('dist/client-compiled'))

    return stream;
});

gulp.task('webpack', () => {
  const stream =  gulp.src('dist/client-compiled/**/*.js')
    .pipe(named(function (file) {
      return path.relative(__dirname + "/dist/client-compiled/", file.path.substring(0, file.path.length - 3));
    }))
    .pipe(webpack())
    .pipe(gulp.dest('dist/client'));
  return stream
});

gulp.task('copy-assets', () => {
  const assets = ['src/**/*.jade', 'src/**/*.img', 'src/**/*.css'];
  return gulp.src(assets).pipe(gulp.dest('dist'));
});

gulp.task('default', ['compile-server', 'compile-client', 'webpack', 'copy-assets'], () => {
  const stream = nodemon({
     script: 'dist/server/index.js',
     watch: ['src/**/*', 'gulpfile.js'],
     tasks: ['compile-server', 'compile-client', 'webpack', 'copy-assets']
   });

  return stream;
});