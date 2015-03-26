'use strict';

/**
 * @ngdoc controller
 * @name imagesGalleryApp.controller:AppCtrl
 * @description
 * @description
 *
 * # AppCtrl
 * Controller of the Application handles globan events and
 * the views enabled on the MenuSS
 */
angular
  .module('imagesGalleryApp')
  .constant('GALLERY_LIST', [
    {
      name: 'cube-page',
      state: 'main.cubeGallery',
      enable: true
    }
  ])
  .controller('AppCtrl', function($scope, GALLERY_LIST) {
    $scope.options = _.filter(GALLERY_LIST, {
      enable: true
    });
  });
