'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import eslint from 'gulp-eslint';
import autoprefixer from 'gulp-autoprefixer';
import useref from 'gulp-useref';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

browserSync.create();

const scripts = './app/js/**/*.js';
const styles = './app/css/main.scss';
const templates = './app/html';


gulp.task('eslint', () => {
   return gulp.src(scripts)
      .pipe(eslint())
      .pipe(eslint.format());
});

gulp.task('browser-sync', () => {
   return browserSync.init({
      server: './dist',
      open : false
   });
});

gulp.task('html', function () {
   return gulp.src('./app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', () => {
   gulp.src('app/sw/*.js')
      .pipe(gulp.dest('dist/sw'));

   return browserify('app/js/boot.js', {debug: true})
            .transform('babelify', {presets: ['es2015']})
            .bundle()
            .pipe(source('js/bundle.js'))
            .pipe(buffer())
            .pipe(gulp.dest('dist'));
});

gulp.task('styles', () => {
   gulp.src('node_modules/materialize-css/font/roboto/*.*')
      .pipe(gulp.dest('dist/font/roboto'));

   gulp.src('node_modules/materialize-css/font/material-design-icons/*.*')
      .pipe(gulp.dest('dist/font/material-design-icons'));

   return gulp.src(styles)
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream());
});

gulp.task('reload', () => {
   browserSync.reload();
});

gulp.task('watch', () => {
   gulp.watch(styles, ['styles', 'reload']);
	gulp.watch(scripts, ['scripts', 'eslint', 'reload']);
	gulp.watch(templates, ['html']).on('change', browserSync.reload);
});

gulp.task('build', ['scripts', 'styles', 'html']);

gulp.task('default', ['build', 'browser-sync', 'watch']);
