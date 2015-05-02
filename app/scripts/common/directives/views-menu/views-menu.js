'use strict';

angular.module('imagesGalleryApp.directives.viewsMenu', [])
  .directive('viewsMenu', function() {
    return {
      restrict: 'E',
      templateUrl: 'scripts/common/directives/views-menu/views-menu.tpl.html',
      replace: true,
      scope: {
        options: '='
      },
      link: function($scope) {
        $scope.toggleMenu = function() {
          $scope.showMenu = !$scope.showMenu;
        };
      }
    };
  });
