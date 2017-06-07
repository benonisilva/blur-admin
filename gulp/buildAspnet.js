'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var gulpsync = require('gulp-sync')(gulp);
var del = require('del');

gulp.task('asp-copy-app', function () {
    var allGlob = "/**/*";
    return gulp.src([conf.paths.devDist+'/Scripts'+allGlob,conf.paths.devDist+'/fonts/'])
    .pipe(gulp.dest(conf.paths.aspPath+'/Scripts'));
});

gulp.task('asp-copy-app-lib', function () {
    var allGlob = "/**/*";
    return gulp.src([conf.paths.devDist+'/lib'+allGlob])
    .pipe(gulp.dest(conf.paths.aspPath+'/Scripts/lib/'));
});

gulp.task('asp-concat-index',function () {
    return gulp.src([conf.paths.devDist+'/Index.cshtml',conf.paths.devDist+'/tmp/index.html'])
     .pipe(concat('Index.cshtml'))
     .pipe(gulp.dest(conf.paths.aspPath+'/Views/Home'));
});

gulp.task('asp-concat-login',function () {
    return gulp.src([conf.paths.devDist+'/Index.cshtml',conf.paths.devDist+'/tmp/auth.html'])
     .pipe(concat('Index.cshtml'))
     .pipe(gulp.dest(conf.paths.aspPath+'/Views/Account'));
});

gulp.task('asp-replace-ref', function () {
    return gulp.src(conf.paths.devDist+'/index.html')
    .pipe(replace('\"lib\/','"~/Scripts/lib/'))
    .pipe(replace(/\"\.\.\/bower_components\/.*\/([aA-zZ][aA-zZ]*.*\.js)/g,'"~/Scripts/lib/$1'))
    .pipe(replace('\"app\/','"~/Scripts/app/'))
    .pipe(replace('\"assets\/','"~/Scripts/assets/'))
    .pipe(gulp.dest(conf.paths.devDist+'/tmp'));
});

gulp.task('asp-replace-ref-login', function () {
    return gulp.src(conf.paths.devDist+'/auth.html')
    .pipe(replace('\"lib\/','"~/Scripts/lib/'))
    .pipe(replace(/\"\.\.\/bower_components\/.*\/([aA-zZ][aA-zZ]*.*\.js)/g,'"~/Scripts/lib/$1'))
    .pipe(replace('\"app\/','"~/Scripts/app/'))
    .pipe(replace('\"assets\/','"~/Scripts/assets/'))
    .pipe(gulp.dest(conf.paths.devDist+'/tmp'));
});

gulp.task('build-asp', gulpsync.sync( 
    [
         
        'asp-replace-ref',
        'asp-replace-ref-login',
        'asp-concat-login',
        'asp-concat-index',
        'asp-copy-app',
        'asp-copy-app-lib'
    ]
    ));
gulp.task('clean-asp', function () {
  return del([path.join(conf.paths.aspPath, '/Scripts/'), 
    path.join(conf.paths.aspPath, '/Views/Home/'), path.join(conf.paths.aspPath, '/Views/Account/')]);
}); 
   