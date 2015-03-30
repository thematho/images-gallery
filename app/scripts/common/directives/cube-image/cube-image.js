'use strict';
/**
 * @ngdoc directive
 * @name imagesGalleryApp.directives.cubeImage:cubeImage
 *
 * @description
 * Used to place a Cube that displays one image on each side
 */
angular.module('imagesGalleryApp.directives.cubeImage', [])
  .directive('cubeImage', function() {
    return {
      restrict: 'E',
      templateUrl: 'scripts/common/directives/cube-image/cube-image.tpl.html',
      replace: true,
      scope: {
        mediaPage: '='
      }
    };
  });
