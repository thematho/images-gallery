angular
  .module('imagesGalleryApp')
  .constant('GALLERY_LIST', [{
      name: 'cube-page',
      state: 'main.cubeGallery',
      enable: true
    }, {
      name: 'cube-image',
      state: 'main.cubeImage ',
      enable: true
    }
  ]);
