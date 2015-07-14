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
      owner: 'Lorem.',
      description: 'Lorem ipsum dolor.',
      imageUrl: '/images/image-service/1.jpg'
    }, {
      owner: 'Nostrum',
      description: 'Unde voluptate, aliquid.',
      imageUrl: '/images/image-service/2.jpg'
    }, {
      owner: 'Tempore',
      description: 'Delectus, iure, optio.',
      imageUrl: '/images/image-service/3.jpg'
    }, {
      owner: 'Cumque',
      description: 'Magni, amet, cupiditate.',
      imageUrl: '/images/image-service/4.jpg'
    }, {
      owner: 'Sapiente',
      description: 'Libero, dolorem corporis.',
      imageUrl: '/images/image-service/5.jpg'
    }, {
      owner: 'Laboriosam',
      description: 'Sunt, recusandae, molestiae!',
      imageUrl: '/images/image-service/6.jpg'
    }, {
      owner: 'Ratione.',
      description: 'Natus et, temporibus.',
      imageUrl: '/images/image-service/7.jpg'
    }, {
      owner: 'Iusto',
      description: 'Omnis, quidem delectus.',
      imageUrl: '/images/image-service/8.jpg'
    }, {
      owner: 'Aut.',
      description: 'Facilis, repellendus dolorum?',
      imageUrl: '/images/image-service/9.jpg'
    }, {
      owner: 'Voluptas.',
      description: 'Est, autem, voluptatum!',
      imageUrl: '/images/image-service/10.jpg'
    }, {
      owner: 'Pariatur.',
      description: 'Enim, est, sequi!',
      imageUrl: '/images/image-service/11.jpg'
    }, {
      owner: 'Fugiat.',
      description: 'Aut ex, molestiae!',
      imageUrl: '/images/image-service/12.jpg'
    }, {
      owner: 'Possimus!',
      description: 'Perspiciatis, maiores animi!',
      imageUrl: '/images/image-service/13.jpg'
    }, {
      owner: 'Error!',
      description: 'Neque, aperiam, dicta?',
      imageUrl: '/images/image-service/14.jpg'
    }, {
      owner: 'Vel.',
      description: 'Omnis, ipsa, magnam.',
      imageUrl: '/images/image-service/15.jpg'
    }, {
      owner: 'Ex.',
      description: 'Veniam, autem, aliquam!',
      imageUrl: '/images/image-service/16.jpg'
    }, {
      owner: 'Ex.',
      description: 'Repudiandae, laborum est.',
      imageUrl: '/images/image-service/17.jpg'
    }, {
      owner: 'Possimus?',
      description: 'Doloremque, esse praesentium?',
      imageUrl: '/images/image-service/18.jpg'
    }, {
      owner: 'Ipsum.',
      description: 'Quis fugit, dolore!',
      imageUrl: '/images/image-service/19.jpg'
    }, {
      owner: 'Sint.',
      description: 'Quis, ipsa, consectetur?',
      imageUrl: '/images/image-service/20.jpg'
    }, {
      owner: 'Deserunt.',
      description: 'Sint, ut, libero.',
      imageUrl: '/images/image-service/21.jpg'
    }, {
      owner: 'Nihil.',
      description: 'Ab, ducimus, ipsa.',
      imageUrl: '/images/image-service/22.jpg'
    }, {
      owner: 'Inventore!',
      description: 'Distinctio, amet ut!',
      imageUrl: '/images/image-service/23.jpg'
    }, {
      owner: 'Repellat?',
      description: 'Consequatur qui, libero!',
      imageUrl: '/images/image-service/24.jpg'
    }, {
      owner: 'Iusto.',
      description: 'Asperiores harum, sint.',
      imageUrl: '/images/image-service/25.jpg'
    }, {
      owner: 'Provident.',
      description: 'Neque, enim, distinctio.',
      imageUrl: '/images/image-service/26.jpg'
    }, {
      owner: 'Sunt.',
      description: 'Numquam sed, inventore.',
      imageUrl: '/images/image-service/27.jpg'
    }, {
      owner: 'Obcaecati!',
      description: 'Molestiae deleniti, itaque.',
      imageUrl: '/images/image-service/28.jpg'
    }, {
      owner: 'Nesciunt!',
      description: 'Itaque, ex expedita?',
      imageUrl: '/images/image-service/29.jpg'
    }, {
      owner: 'Nulla!',
      description: 'Odio, distinctio, officia!',
      imageUrl: '/images/image-service/30.jpg'
    }, {
      owner: 'Sit!',
      description: 'Impedit, minima, magni.',
      imageUrl: '/images/image-service/31.jpg'
    }, {
      owner: 'Sequi?',
      description: 'Enim, laboriosam earum.',
      imageUrl: '/images/image-service/32.jpg'
    }, {
      owner: 'Minima?',
      description: 'Sapiente, odio, repellendus?',
      imageUrl: '/images/image-service/33.jpg'
    }, {
      owner: 'Veritatis.',
      description: 'Ducimus, et? Consequatur.',
      imageUrl: '/images/image-service/34.jpg'
    }, {
      owner: 'Sapiente.',
      description: 'Beatae, nostrum. Asperiores?',
      imageUrl: '/images/image-service/35.jpg'
    }, {
      owner: 'Sed!',
      description: 'Corporis, dolorem, ducimus?',
      imageUrl: '/images/image-service/36.jpg'
    }, {
      owner: 'Hic.',
      description: 'Natus, iusto, voluptatem!',
      imageUrl: '/images/image-service/37.jpg'
    }, {
      owner: 'Suscipit.',
      description: 'Voluptate, voluptates laboriosam.',
      imageUrl: '/images/image-service/38.jpg'
    }, {
      owner: 'Fuga!',
      description: 'Temporibus, illo dolore.',
      imageUrl: '/images/image-service/39.jpg'
    }, {
      owner: 'Praesentium.',
      description: 'Deleniti pariatur, dolores?',
      imageUrl: '/images/image-service/40.jpg'
    }, {
      owner: 'Perspiciatis!',
      description: 'Ducimus, nemo, animi!',
      imageUrl: '/images/image-service/41.jpg'
    }, {
      owner: 'Culpa.',
      description: 'Odit, amet, rem.',
      imageUrl: '/images/image-service/42.jpg'
    }, {
      owner: 'Quasi.',
      description: 'Similique obcaecati, eos.',
      imageUrl: '/images/image-service/43.jpg'
    }, {
      owner: 'Quos.',
      description: 'Velit, unde, quidem.',
      imageUrl: '/images/image-service/44.jpg'
    }, {
      owner: 'Sed.',
      description: 'Quas, voluptatem, deleniti!',
      imageUrl: '/images/image-service/45.jpg'
    }, {
      owner: 'Repudiandae!',
      description: 'Repudiandae, veritatis, quis.',
      imageUrl: '/images/image-service/46.jpg'
    }, {
      owner: 'Aliquid?',
      description: 'Ullam, odit, dolore.',
      imageUrl: '/images/image-service/47.jpg'
    }, {
      owner: 'Ipsa.',
      description: 'Exercitationem, voluptatum, nesciunt.',
      imageUrl: '/images/image-service/48.jpg'
    }, {
      owner: 'Rerum.',
      description: 'Cupiditate, quasi officia.',
      imageUrl: '/images/image-service/49.jpg'
    }, {
      owner: 'Eum.',
      description: 'Dolorem, earum, non.',
      imageUrl: '/images/image-service/50.jpg'
    }, {
      owner: 'Minima.',
      description: 'Animi, error, ipsam.',
      imageUrl: '/images/image-service/51.jpg'
    }, {
      owner: 'Rerum?',
      description: 'Alias, dicta, impedit.',
      imageUrl: '/images/image-service/52.jpg'
    }, {
      owner: 'Ratione!',
      description: 'Ipsum, eaque, officia!',
      imageUrl: '/images/image-service/53.jpg'
    }, {
      owner: 'Rerum',
      description: 'Assumenda, placeat, id.',
      imageUrl: '/images/image-service/54.jpg'
    }]
  });
