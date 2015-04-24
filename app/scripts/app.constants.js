angular
  .module('imagesGalleryApp')
  .constant('GALLERY_LIST', [{
      name: 'Cube Page',
      state: 'main.cubeGallery',
      enable: true
    }, {
      name: 'Rotating Cube',
      state: 'main.rotatingCube ',
      enable: true
    }, {
      name: 'Slider',
      state: 'main.slider',
      enable: true
    }
  ]);
