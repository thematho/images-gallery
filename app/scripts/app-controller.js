'use strict';

/**
 * @ngdoc controller
 * @name imagesGalleryApp.controller:AppCtrl
 * @description
 *
 * # AppCtrl
 */
angular
  .module('imagesGalleryApp')
  .constant('GALLERY_LIST', [
    {
      name: 'cube-page',
      url: 'url',
      enable: true
    }
  ])
  .controller('AppCtrl', function($scope, GALLERY_LIST) {
    $scope.options = _.filter(GALLERY_LIST, {
      enable: true
    });
  });
