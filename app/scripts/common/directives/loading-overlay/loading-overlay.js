'use strict';
/**
 * @ngdoc directive
 * @name imagesGalleryApp.directives.imageHolder:imageHolder
 *
 * @description
 * This directive loads an image and shows it only if the image
 * could be loaded correctly
 *
 * @example
 *  <loading-overlay
 *    loading="isProcessing"
 *  </loading-overlay>
 *
 * @param {Boolean} [loading="isLoading"] Boolean which indicates if the loading
 *   should be shown or not
 */
angular.module('imagesGalleryApp.directives.loadingOverlay', [])
  .directive('loadingOverlay', function() {
    return {
      restrict: 'E',
      templateUrl: 'scripts/common/directives/loading-overlay/loading-overlay.tpl.html',
      replace: true,
      scope: {
        loading: '='
      }
    };
  });
