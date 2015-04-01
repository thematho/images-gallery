'use strict';

/**
 * @ngdoc function
 * @name imagesGalleryApp.rotatingCube:RotatingCubeCtrl
 * @description
 *
 * @requires imageService
 * # RotatingCubeCtrl
 * Controller of the imagesGalleryApp
 */
angular.module('imagesGalleryApp.rotatingCube')
  .controller('RotatingCubeCtrl', function($scope, imageService) {
    $scope.currentPageIndex = 0;
    $scope.mediaPages = [];
    $scope.loading = true;
    $scope.results = 6;

    function getPage(indexMod) {
      var pageIndex = $scope.currentPageIndex + indexMod;
      if (!$scope.mediaPages[$scope.currentPageIndex + indexMod]) {
        $scope.loading = true;
        imageService.getImages(pageIndex, $scope.results)
          .then(function(images) {
            var newPage;
            if (images.length) {
              newPage = {
                'images': images,
                'index': pageIndex
              };
              $scope.mediaPages[pageIndex] = newPage;
              $scope.currentPageIndex = pageIndex;
            }
            $scope.loading = false;
          });
      } else {
        $scope.currentPageIndex = pageIndex;
      }
    }

    $scope.addCube = _.partial(getPage, +1);

    imageService.getImages(0, $scope.results)
      .then(function(images) {
        var newPage = {
          'images': images,
          'index': 0
        };
        $scope.mediaPages[0] = newPage;
        $scope.loading = false;
      });
  });
