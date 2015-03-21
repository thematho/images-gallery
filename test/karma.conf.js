// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-03-19 using
// generator-karma 0.8.3

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['mocha', 'chai', 'sinon'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'app/scripts/app.js',
      'app/scripts/main/main.js',
      'app/scripts/common/services/services.js',
      'app/scripts/common/directives/directives.js',
      'app/scripts/**/*.js',
      'app/mocks/mocks-module-plugin.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-coverage',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/scripts/**/*.tpl.html': ['ng-html2js']
    },
    // optionally, configure the reporter
    coverageReporter: {
      reporters: [{
        type: 'html',
        dir: 'build/coverage/'
      }, {
        type: 'cobertura',
        dir: 'build/coverage/',
        file: 'coverage.xml'
      }]
    },

    junitReporter: {
      outputFile: 'build/junit/test-results.xml',
      suite: ''
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
    }
    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
