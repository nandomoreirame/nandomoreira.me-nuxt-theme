'use strict';

var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();
var bourbon = require('node-bourbon');
var config  = require('./gulp.config.js');
var fs      = require('fs');

gulp.task('stylesheets', () => {
  gulp.src([`${config.stylesheets}/main.sass`])
    .pipe($.plumber(config.plumberErrorHandler))
    .pipe($.sass({ includePaths: [ bourbon.includePaths ] }))
    .pipe($.autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe($.combineMq())
    .pipe($.cssnano())
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.size({ title: 'Build and Minify Stylesheets', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.stylesheets))
    .pipe($.plumber.stop());
});

gulp.task('replace', () => {
  gulp.src([`${config.partials}/_replace-stylesheets.html`])
    .pipe($.plumber(config.plumberErrorHandler))
    .pipe($.replace('__STYLESHEET__HERE__', function(s) {
      var style = fs.readFileSync(`${config.stylesheets}/main.min.css`, 'utf8');
      return 'css:\n  ' + style;
    }))
    .pipe($.rename('_replace-stylesheets.html.slim'))
    .pipe($.size({ title: 'Replace stylesheets', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.partials))
    .pipe($.plumber.stop());
});

gulp.task('watch', () => {
  gulp.watch(`${config.stylesheets}/**/*.{sass,scss}`, ['stylesheets', 'replace']);
});

gulp.task('default', [ 'watch' ]);
