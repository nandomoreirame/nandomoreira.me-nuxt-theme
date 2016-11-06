'use strict';

import Gulp    from 'gulp';
import Plugins from 'gulp-load-plugins';
import Bourbon from 'node-bourbon';
import fs      from 'fs';

const $ = Plugins();

const isProduction = $.util.env.type === 'production' ? true : false;
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
const browsers = ['last 2 versions'];

Gulp.task('stylesheets', () => {
  return Gulp.src([`${config.sass}/*.sass`])
    .pipe($.plumber(config.plumberErrorHandler))
    .pipe($.sass({
      sourceComments: isProduction ? false : 'normal',
      includePaths: [
        config.sass,
        Bourbon.includePaths
      ]
    }))
    .pipe($.autoprefixer({ browsers }))
    .pipe($.combineMq())
    .pipe(isProduction ? $.cssnano() : $.jsbeautifier())
    .pipe(isProduction ? $.rename({ suffix: '.min' }) : $.util.noop())
    .pipe($.size({ title: 'Build and Minify Stylesheets', gzip: false, showFiles: true }))
    .pipe(Gulp.dest(config.css))
    .pipe($.plumber.stop());
})

.task('replace', ['stylesheets'], () => {
  Gulp.src([`${config.partials}/_inline-stylesheets.html`])
    .pipe($.plumber(config.plumberErrorHandler))
    .pipe($.replace('__INLINE_STYLESHEET__', function(s) {
      const file = isProduction ? 'inline.min.css' : 'inline.css';
      const style = fs.readFileSync(`${config.css}/${file}`, 'utf8');
      return 'css:\n  ' + style;
    }))
    .pipe($.rename('_inline-stylesheets.html.slim'))
    .pipe($.size({ title: 'Replace stylesheets', gzip: false, showFiles: true }))
    .pipe(Gulp.dest(config.partials))
    .pipe($.plumber.stop());
})

.task('build', ['replace'])
.task('watch', ['build'], () => {
  Gulp.watch(`${config.sass}/**/*.{sass,scss}`, ['stylesheets']);
})
.task('default', [ 'watch' ]);
