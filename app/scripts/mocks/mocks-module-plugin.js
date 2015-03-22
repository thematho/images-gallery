'use strict';

(function(isNode, isAngular) {

  var mockModules = [
    'ngMockE2E',
    'imagesGalleryMocks.utils',
    'imagesGalleryMocks.imageService'
  ];

  function addAngularMockModule() {
    angular.module('imagesGalleryMocks', mockModules)
      .run(function($http, $httpBackend) {
        // Pass through all request
        $httpBackend.whenGET(/.*/).passThrough();
        $httpBackend.whenPOST(/.*/).passThrough();
        $httpBackend.whenPUT(/.*/).passThrough();
        $httpBackend.whenDELETE(/.*/).passThrough();
      });

    //add imagesGalleryMocks as dependency of the app's main
    // module so it gets loaded
    angular.module('imagesGalleryApp')
      .requires.push('imagesGalleryMocks');
  }

  if (isAngular) {
    addAngularMockModule();
  } else if (isNode) {
    //TODO: configure hooks.js for support of mocks on E2E test
    module.exports.MOCK_MODULES = mockModules;
  } else {
    throw new Error('Error injecting mock module');
  }

})(typeof module !== 'undefined' && module.exports,
  typeof angular !== 'undefined');
