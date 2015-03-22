'use strict';

angular.module('imagesGalleryMocks.utils', [])
  .constant('DELAY_MILLIS', 500)
  .constant('INTERCEPTED_REQUEST', [
    /services\/images/
    ])
  .factory('DelayInterceptor', function($q, $timeout,
    DELAY_MILLIS, INTERCEPTED_REQUEST) {

    function interceptWithDelay(config) {
      var defer = $q.defer();
      $timeout(function() {
        return defer.resolve(config);
      }, DELAY_MILLIS);
      return defer.promise;
    }
    return {
      request: function(config) {
        return _.any(INTERCEPTED_REQUEST,
            function(regExp) {
              return regExp.test(config.url);
            }) ?
          interceptWithDelay(config) : config;
      }
    };
  })
  .config(['$httpProvider',
    function($httpProvider) {
      $httpProvider.interceptors.push('DelayInterceptor');
  }
]);
