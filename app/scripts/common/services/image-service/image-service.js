'use strict';

/**
 * @ngdoc service
 * @name imagesGalleryApp.services.imageService
 *
 * @requires $resource
 * @requires $q
 *
 * @description
 * Provides Media information
 *
 */
angular.module('imagesGalleryApp.services.imageService', [])

.factory('imageService', function($resource) {
  var imageURL = '\/services\/images';
  var imagesResource = $resource(imageURL, {}, {
    getImages: {
      cache: false,
      method: 'GET',
      responseType: 'json'
    }
  });

  function getImages(pageIndex, results) {
    return imagesResource
      .getImages({
        'page': pageIndex || 0,
        'results': results || 10
      })
      .$promise
      .then(function(response) {
        return response.images;
      });
  }

  return {
    getImages: getImages,

  };
});
