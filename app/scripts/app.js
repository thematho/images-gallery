'use strict';

/**
 * @ngdoc overview
 * @name imagesGalleryApp
 * @description
 * # imagesGalleryApp
 *
 * Main module of the application.
 */
angular
  .module('imagesGalleryApp', [
    'imagesGalleryApp.templates',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'imagesGalleryApp.main',
    'imagesGalleryApp.cubeImage',
    'imagesGalleryApp.cubeGallery',
    'imagesGalleryApp.directives',
    'imagesGalleryApp.services'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise('/main/cubeGallery');
    //
    // Now set up the states
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'scripts/main/main.html',
        controller: 'MainCtrl'
      });

    $stateProvider.state('main.cubeGallery', {
      url: '/cubeGallery',
      templateUrl: 'scripts/cube-gallery/cube-gallery.html',
      controller: 'CubeGalleryCtrl',
      parent: 'main'
    });

    $stateProvider.state('main.cubeImage', {
      url: '/cubeImage',
      templateUrl: 'scripts/cube-image/cube-image.html',
      controller: 'CubeImageCtrl',
      parent: 'main'
    });

    $stateProvider.state('about', {
      url: '/about',
      templateUrl: 'scripts/about/about.html'
    });
  });
