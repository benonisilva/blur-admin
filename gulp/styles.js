'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('styles-reload', ['styles'], function () {
  return buildStyles()
    .pipe(browserSync.stream());
});

gulp.task('styles', function () {
  return buildStyles();
});

gulp.task('stylesAuth', function () {
  return buildSingleScss(path.join(conf.paths.src, '/Scripts/sass/auth.scss'));
});
gulp.task('styles404', function () {
  return buildSingleScss(path.join(conf.paths.src, '/Scripts/sass/404.scss'));
});

var buildStyles = function () {
  var sassOptions = {
    style: 'expanded'
  };

  var injectFiles = gulp.src([
    path.join(conf.paths.src, '/Scripts/sass/**/_*.scss'),
    '!' + path.join(conf.paths.src, '/Scripts/sass/theme/conf/**/*.scss'),
    '!' + path.join(conf.paths.src, '/Scripts/sass/404.scss'),
    '!' + path.join(conf.paths.src, '/Scripts/sass/auth.scss')
  ], {read: false});

  var injectOptions = {
    transform: function (filePath) {
      filePath = filePath.replace(conf.paths.src + '/Scripts/sass/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };

  return gulp.src([
    path.join(conf.paths.src, '/Scripts/sass/main.scss')
  ])
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/Scripts/app/')));
};

var buildSingleScss = function (paths) {
  var sassOptions = {
    style: 'expanded'
  };

  return gulp.src([paths])
    .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/Scripts/app/')));
};
