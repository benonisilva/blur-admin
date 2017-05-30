'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

var browserSync = require('browser-sync');

gulp.task('inject-reload', ['inject'], function () {
  browserSync.reload();
});

gulp.task('inject', ['scripts', 'styles', 'injectAuth', 'inject404', 'copyVendorImages'], function () {
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, '/serve/Scripts/app/main.css'),
    path.join('!' + conf.paths.tmp, '/serve/Scripts/app/vendor.css')
  ], {read: false});

  var injectScripts = gulp.src([
    path.join(conf.paths.src, '/Scripts/assets/js/**/*.js'),
    path.join(conf.paths.src, '/Scripts/app/**/*.module.js'),
    path.join(conf.paths.src, '/Scripts/app/**/*.js'),
    path.join('!' + conf.paths.src, '/Scripts/app/**/*.spec.js'),
    path.join('!' + conf.paths.src, '/Scripts/app/**/*.mock.js'),
  ])
    /*.pipe($.angularFilesort())*/.on('error', conf.errorHandler('AngularFilesort'));

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.src, '/index.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});

gulp.task('injectAuth', ['stylesAuth'], function () {
  return injectAlone({
    css: [path.join('!' + conf.paths.tmp, '/serve/Scripts/app/vendor.css'), path.join(conf.paths.tmp, '/serve/Scripts/app/auth.css')],
    paths: [path.join(conf.paths.src, '/auth.html'), path.join(conf.paths.src, '/reg.html')]
  })
});

gulp.task('inject404', ['styles404'], function () {
  return injectAlone({
    css: [path.join('!' + conf.paths.tmp, '/serve/Scripts/app/vendor.css'), path.join(conf.paths.tmp, '/serve/Scripts/app/404.css')],
    paths: path.join(conf.paths.src, '/404.html')
  })
});

var injectAlone = function (options) {
  var injectStyles = gulp.src(
    options.css
    , {read: false});

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp.src(options.paths)
    .pipe($.inject(injectStyles, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
};