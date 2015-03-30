angular
  .module('imagesGalleryApp')
  .constant('GALLERY_LIST', [{
      name: 'cube-page',
      state: 'main.cubeGallery',
      enable: true
    }, {
      name: 'rotating-cube',
      state: 'main.rotatingCube ',
      enable: true
    }
  ]);
