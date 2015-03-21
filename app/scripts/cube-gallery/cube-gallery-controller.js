'use strict';

/**
 * @ngdoc function
 * @name imagesGalleryApp.cubeGallery:CubeGalleryCtrl
 * @description
 *
 * @requires imageService
 * # CubeGalleryCtrl
 * Controller of the imagesGalleryApp
 */
angular.module('imagesGalleryApp.cubeGallery')
  .controller('CubeGalleryCtrl', function($scope, imageService) {
    $scope.currentPageIndex = 0;
    $scope.mediaPages = [];
    $scope.loading = true;
    $scope.results = 10;

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

    $scope.nextPage = _.partial(getPage, +1);
    $scope.prevPage = _.partial(getPage, -1);
    $scope.firstPage = _.partial(getPage, $scope.currentPageIndex * -1);
    $scope.currentPage = _.partial(getPage, 0);

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
