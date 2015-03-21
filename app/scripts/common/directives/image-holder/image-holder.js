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
 *  <image-holder
 *    src="imageURL"
 *    holder-class="myHolderClass">
 *  </image-holder>
 *
 * @param {String} [src="/images/myImage.png"] String with the image URL
 *   to be shown
 * @param {String} [myHolderClass='myHolder'] optional class name for
 *   the holder that is shown until the image is loded properly
 */
angular.module('imagesGalleryApp.directives.imageHolder', [])
  .directive('imageHolder', function() {
    function getNonProminentRatio(imgElement) {
      return imgElement.width > imgElement.height ? 'full-height' : 'full-width';
    }
    return {
      restrict: 'E',
      templateUrl: 'scripts/common/directives/image-holder/image-holder.tpl.html',
      replace: true,
      scope: {
        src: '=',
        holderClass: '@'
      },
      link: function postLink(scope, iElement) {
        var imageEl = iElement.find('img');

        imageEl.on('load', function(e) {
          scope.$apply(function() {
            scope.fullSize = getNonProminentRatio(e.target);
            scope.isLoaded = true;
          });
        });

        scope.$on('$destroy', function() {
          imageEl.off('load');
        });
      }
    };
  });
