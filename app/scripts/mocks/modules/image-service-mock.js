'use strict';

angular.module('imagesGalleryMocks.imageService', [])
  .run(function($httpBackend, urlParser, MOCKED_IMAGES) {

    function getImages(method, request) {
      var images = [],
        results = Number(urlParser.getQueryParamByName(request, 'results')) || 10,
        pageIndex = Number(urlParser.getQueryParamByName(request, 'page')) || 0;
      images = MOCKED_IMAGES.images.slice(pageIndex * results, pageIndex * results + results);
      return [200, {
        'images': images
      }, {}];
    }

    $httpBackend.whenGET(/\/services\/images/)
      .respond(getImages);
    // $httpBackend.whenGET().respond([200, MOCKED_IMAGES,{}]);
  });

angular.module('imagesGalleryMocks.imageService')
  .constant('MOCKED_IMAGES', {
    images: [{
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/1.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/2.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/3.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/4.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/5.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/6.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/7.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/8.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/9.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/10.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/11.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/12.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/13.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/14.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/15.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/16.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/17.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/18.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/19.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/20.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/21.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/22.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/23.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/24.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/25.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/26.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/27.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/28.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/29.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/30.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/31.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/32.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/33.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/34.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/35.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/36.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/37.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/38.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/39.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/40.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/41.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/42.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/43.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/44.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/45.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/46.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/47.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/48.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/49.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/50.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/51.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/52.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/53.jpg'
    }, {
      owner: 'Sample Owner',
      description: 'Image description',
      imageUrl: '/images/image-service/54.jpg'
    }]
  });
