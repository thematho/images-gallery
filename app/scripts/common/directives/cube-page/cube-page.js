'use strict';
/**
 * @ngdoc directive
 * @name imagesGalleryApp.directives.cubePage:cubePage
 *
 * @description
 * Used to place a slide that displays several images and descriptions
 * with a cube effect display
 *
 * @example
 *
 * @param {Object} mediaPages And object with the following structure:
 * {
 *   '0': {photoMediaObject},
 *   '1': {photoMediaObject},
 *   '2': {photoMediaObject},
 *   '-1': {photoMediaObject}
 * }
 * @param {Numeric} [currentPageIndex='0'] the current position of
 *   the slider pagination
 * @param {Boolean} [loading='true'] A boolean that indicates if
 *   the loading overlay should be displayed or not
 * @param {prevPage} [prev-page='function(){}'] a callback wich
 *  is executed when the user navigates to the previous page
 * @param {nextPage} [next-page='function(){}'] a callback wich
 *  is executed when the user navigates to the next page
 *
 */
angular.module('imagesGalleryApp.directives.cubePage', [])
  .directive('cubePage', function() {
    return {
      restrict: 'E',
      templateUrl: 'scripts/common/directives/cube-page/cube-page.tpl.html',
      replace: true,
      scope: {
        mediaPages: '=',
        prevPage: '=',
        nextPage: '=',
        current: '=',
        loading: '='
      }
    };
  });
