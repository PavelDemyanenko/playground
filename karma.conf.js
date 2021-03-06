module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'src/bower_components/angular/angular.js',
      'src/bower_components/angular-route/angular-route.js',
      'src/bower_components/angular-animate/angular-animate.js',
      'dist/scripts/*.js',

      'spec/unit/exampleSpec.js'
    ],

    exclude: [
    ],

    reportSlowerThan: 500,

    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    browsers: ['Chrome']
  });
};
