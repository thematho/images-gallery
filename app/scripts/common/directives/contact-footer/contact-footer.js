'use strict';

angular.module('imagesGalleryApp.directives.contactFooter', [])
  .directive('contactFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'scripts/common/directives/contact-footer/contact-footer.tpl.html',
      replace: true
    };
  });
