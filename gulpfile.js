"use strict";

var gulp = require('gulp'),
    sync = require('browser-sync'),
    scss = require('gulp-sass'),
    watch = require('gulp-watch'),
    del = require('del'),
    babel = require('gulp-babel'),
    browserSync = require('browser-sync');

gulp.task('scss', function () {
    return gulp.src('app/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    return gulp.src('app/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
    return gulp.src('app/js/**/*')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
    return gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img/'))
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        notify: false
    });
});

gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('watch', ['clean', 'js', 'images', 'scss', 'html', 'browser-sync'], function() {
    gulp.watch('app/*.scss', ['scss', browserSync.reload]);
    gulp.watch('app/*.html', ['html', browserSync.reload]);
    gulp.watch('app/js/*.js', ['js', browserSync.reload]);
});

gulp.task('default', ['watch']);