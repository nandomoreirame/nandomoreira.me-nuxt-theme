'use strict';

var notify = require('gulp-notify');

var config = {
  source: './source',
  partials: './source/partials',
  stylesheets: './source/assets/stylesheets',
  plumberErrorHandler: {
    errorHandler: notify.onError({
      title   : 'Gulp',
      message : 'Error: <%= error.message %>'
    })
  }
};

module.exports = config;