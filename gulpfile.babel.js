'use strict';

import Gulp    from 'gulp';
import Plugins from 'gulp-load-plugins';
import Bourbon from 'node-bourbon';
import fs      from 'fs';

const $ = Plugins();

const includePaths = [ Bourbon.includePaths ];
const browsers = ['last 2 versions'];
const config = {
  source: './source',
  partials: './source/partials',
  sass: './source/assets/_sass',
  css: './source/assets/stylesheets',
  plumberErrorHandler: {
    errorHandler: $.notify.onError({
      title   : 'Gulp',
      message : 'Error: <%= error.message %>'
    })
  }
};

Gulp.task('stylesheets', ['replace'], () => {
  Gulp.src([`${config.sass}/*.sass`])
    .pipe($.plumber(config.plumberErrorHandler))
    .pipe($.sass({ includePaths }))
    .pipe($.autoprefixer({ browsers }))
    .pipe($.combineMq())
    .pipe($.cssnano())
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.size({ title: 'Build and Minify Stylesheets', gzip: false, showFiles: true }))
    .pipe(Gulp.dest(config.css))
    .pipe($.plumber.stop());
});

Gulp.task('replace', () => {
  return Gulp.src([`${config.partials}/_inline-stylesheets.html`])
    .pipe($.plumber(config.plumberErrorHandler))
    .pipe($.replace('__INLINE_STYLESHEET__', function(s) {
      var style = fs.readFileSync(`${config.css}/inline.min.css`, 'utf8');
      return 'css:\n  ' + style;
    }))
    .pipe($.rename('_inline-stylesheets.html.slim'))
    .pipe($.size({ title: 'Replace stylesheets', gzip: false, showFiles: true }))
    .pipe(Gulp.dest(config.partials))
    .pipe($.plumber.stop());
});

Gulp.task('build', ['stylesheets']);

Gulp.task('watch', ['build'], () => {
  Gulp.watch(`${config.sass}/**/*.{sass,scss}`, ['stylesheets']);
});

Gulp.task('default', [ 'watch' ]);
