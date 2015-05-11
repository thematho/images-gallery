angular.module("imagesGalleryApp.templates",[]).run(["$templateCache",function(a){"use strict";a.put("scripts/common/directives/contact-footer/contact-footer.tpl.html",'<div class="contact-info"> <ul class="contact-info__list"> <li class="contact-info__list__item"> <a href="http://stackoverflow.com/users/1769317/matho" class="fa fa-2x fa-stack-overflow"></a> </li> <li class="contact-info__list__item"> <a href="https://github.com/thematho/" class="fa fa-2x fa-github"></a> </li> <li class="contact-info__list__item"> <a href="https://www.linkedin.com/profile/view?id=284041268" class="fa fa-2x fa-linkedin"></a> </li> </ul> </div>'),a.put("scripts/common/directives/cube-image/cube-image.tpl.html",'<div class="cube-image" ng-animate> <image-holder ng-repeat="image in ::mediaPage.images" src="image.imageUrl"> </image-holder> </div>'),a.put("scripts/common/directives/cube-page/cube-page.tpl.html",'<div class="cube-page-container center-text"> <div class="cube-page-container__cube-page cube-page" ng-class="{\'cube-page--current\': key === current }" ng-repeat="(key, mediaPage) in mediaPages" ng-animate> <div class="cube-page__item" ng-class="{\'cube-page__item--small\': obtainClass(mediaPage.indexOf(image))}" ng-repeat="image in ::mediaPage.images"> <div class="cube-page__item-wrapper"> <image-holder src="image.imageUrl"> </image-holder> <div class="cube-page__text"> <div class="page__text--owner">{{image.owner}}</div> <div class="page__text--description">{{image.description}}</div> </div> </div> </div> </div> <div class="cube-page-container__button-set button-set"> <div class="button-set__button--prev btn btn-primary" ng-disabled="loading" ng-click="prevPage()"> Prev Page </div> <div class="button-set__button--next btn btn-primary" ng-disabled="loading" ng-click="nextPage()"> Next Page </div> </div> <loading-overlay loading="loading"> </loading-overlay> </div>'),a.put("scripts/common/directives/image-holder/image-holder.tpl.html",'<div class="image-holder" ng-class="!isLoaded && holderClass"> <img class="image-holder__item" ng-src="{{src}}" ng-show="isLoaded" ng-class="[ isLoaded ? \'image-holder__item--loaded\' : \'\' , fullSize]"> <div ng-hide="isLoaded" ng-class="{\'image-holder__no-item--loaded\': isLoaded }" class="image-holder__no-item center-block"> <span class="fa fa-2x fa-refresh fa-spin center"></span> </div> </div>'),a.put("scripts/common/directives/loading-overlay/loading-overlay.tpl.html",'<div ng-show="loading" ng-animate class="loading-overlay center-block"> <span class="fa fa-4x fa-refresh fa-spin center"></span> </div>'),a.put("scripts/common/directives/views-menu/views-menu.tpl.html",'<div class="menu h2"> <div class="menu__list" ng-animate="show" ng-class="{\'show\': showMenu}"> <a class="menu__list__item mstb" ng-repeat="option in options" ui-sref-active="active" ui-sref="{{::option.state}}">{{::option.name}}</a> </div> <div class="menu-button mrl btn btn-primary" ng-click="toggleMenu()"> <span class="menu-button__icon fa fa-reorder fa-2x" ng-class="{\'fa-rotate-90\': showMenu}"></span> </div> </div>'),a.put("scripts/cube-gallery/cube-gallery.html",'<div> <cube-page media-pages="mediaPages" current="currentPageIndex" loading="loading" prev-page="prevPage" next-page="nextPage"> </cube-page> </div>'),a.put("scripts/main/main.html",'<div class="main-content" ui-view=""></div>'),a.put("scripts/rotating-cube/rotating-cube.html",'<div class="center-text"> <cube-image class="mal" ng-repeat="mediaPage in mediaPages" media-page="mediaPage"> </cube-image> <div class="cube-page-container__button-set button-set"> <div class="button-set__button--prev btn btn-primary" ng-disabled="loading" ng-click="addCube()"> Add Cube </div> </div> <loading-overlay loading="loading"> </loading-overlay> </div>')}]),angular.module("imagesGalleryApp",["imagesGalleryApp.templates","ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","ui.router","imagesGalleryApp.main","imagesGalleryApp.rotatingCube","imagesGalleryApp.cubeGallery","imagesGalleryApp.directives","imagesGalleryApp.services"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/main/cubeGallery"),a.state("main",{url:"/main",templateUrl:"scripts/main/main.html",controller:"MainCtrl"}),a.state("main.cubeGallery",{url:"/cubeGallery",templateUrl:"scripts/cube-gallery/cube-gallery.html",controller:"CubeGalleryCtrl",parent:"main"}),a.state("main.rotatingCube",{url:"/rotatingCube",templateUrl:"scripts/rotating-cube/rotating-cube.html",controller:"RotatingCubeCtrl",parent:"main"}),a.state("about",{url:"/about",templateUrl:"scripts/about/about.html"})}]),angular.module("imagesGalleryApp").constant("GALLERY_LIST",[{name:"Cube Page",state:"main.cubeGallery",enable:!0},{name:"Rotating Cube",state:"main.rotatingCube ",enable:!0},{name:"Slider",state:"main.slider",enable:!0}]),angular.module("imagesGalleryApp").controller("AppCtrl",["$scope","GALLERY_LIST",function(a,b){a.options=_.filter(b,{enable:!0})}]),angular.module("imagesGalleryApp.main",[]),angular.module("imagesGalleryApp.main").controller("MainCtrl",function(){}),angular.module("imagesGalleryApp.cubeGallery",["imagesGalleryApp.services.imageService"]),angular.module("imagesGalleryApp.cubeGallery").controller("CubeGalleryCtrl",["$scope","imageService",function(a,b){function c(c){var d=a.currentPageIndex+c;a.mediaPages[a.currentPageIndex+c]?a.currentPageIndex=d:(a.loading=!0,b.getImages(d,a.results).then(function(b){var c;b.length&&(c={images:b,index:d},a.mediaPages[d]=c,a.currentPageIndex=d),a.loading=!1}))}a.currentPageIndex=0,a.mediaPages=[],a.loading=!0,a.results=10,a.nextPage=_.partial(c,1),a.prevPage=_.partial(c,-1),a.firstPage=_.partial(c,-1*a.currentPageIndex),a.currentPage=_.partial(c,0),b.getImages(0,a.results).then(function(b){var c={images:b,index:0};a.mediaPages[0]=c,a.loading=!1})}]),angular.module("imagesGalleryApp.rotatingCube",["imagesGalleryApp.services.imageService"]),angular.module("imagesGalleryApp.rotatingCube").controller("RotatingCubeCtrl",["$scope","imageService",function(a,b){function c(c){var d=a.currentPageIndex+c;a.mediaPages[a.currentPageIndex+c]?a.currentPageIndex=d:(a.loading=!0,b.getImages(d,a.results).then(function(b){var c;b.length&&(c={images:b,index:d},a.mediaPages[d]=c,a.currentPageIndex=d),a.loading=!1}))}a.currentPageIndex=0,a.mediaPages=[],a.loading=!0,a.results=6,a.addCube=_.partial(c,1),b.getImages(0,a.results).then(function(b){var c={images:b,index:0};a.mediaPages[0]=c,a.loading=!1})}]),angular.module("imagesGalleryApp.directives.contactFooter",[]).directive("contactFooter",function(){return{restrict:"E",templateUrl:"scripts/common/directives/contact-footer/contact-footer.tpl.html",replace:!0}}),angular.module("imagesGalleryApp.directives.cubeImage",[]).directive("cubeImage",function(){return{restrict:"E",templateUrl:"scripts/common/directives/cube-image/cube-image.tpl.html",replace:!0,scope:{mediaPage:"="}}}),angular.module("imagesGalleryApp.directives.cubePage",[]).directive("cubePage",function(){return{restrict:"E",templateUrl:"scripts/common/directives/cube-page/cube-page.tpl.html",replace:!0,scope:{mediaPages:"=",prevPage:"=",nextPage:"=",current:"=",loading:"="}}}),angular.module("imagesGalleryApp.directives.imageHolder",[]).directive("imageHolder",function(){function a(a){return a.width>a.height?"full-height":"full-width"}return{restrict:"E",templateUrl:"scripts/common/directives/image-holder/image-holder.tpl.html",replace:!0,scope:{src:"=",holderClass:"@"},link:function(b,c){var d=c.find("img");d.on("load",function(c){b.$apply(function(){b.fullSize=a(c.target),b.isLoaded=!0})}),b.$on("$destroy",function(){d.off("load")})}}}),angular.module("imagesGalleryApp.directives.loadingOverlay",[]).directive("loadingOverlay",function(){return{restrict:"E",templateUrl:"scripts/common/directives/loading-overlay/loading-overlay.tpl.html",replace:!0,scope:{loading:"="}}}),angular.module("imagesGalleryApp.directives.viewsMenu",[]).directive("viewsMenu",function(){return{restrict:"E",templateUrl:"scripts/common/directives/views-menu/views-menu.tpl.html",replace:!0,scope:{options:"="},link:function(a){a.toggleMenu=function(){a.showMenu=!a.showMenu}}}}),angular.module("imagesGalleryApp.directives",["imagesGalleryApp.directives.contactFooter","imagesGalleryApp.directives.cubeImage","imagesGalleryApp.directives.cubePage","imagesGalleryApp.directives.imageHolder","imagesGalleryApp.directives.loadingOverlay","imagesGalleryApp.directives.viewsMenu"]),angular.module("imagesGalleryApp.services.imageService",[]).factory("imageService",["$resource",function(a){function b(a,b){return d.getImages({page:a||0,results:b||10}).$promise.then(function(a){return a.images})}var c="/services/images",d=a(c,{},{getImages:{cache:!1,method:"GET",responseType:"json"}});return{getImages:b}}]),angular.module("imagesGalleryApp.services",["imagesGalleryApp.services.imageService"]),function(a,b){function c(){angular.module("imagesGalleryMocks",d).run(["$http","$httpBackend",function(a,b){b.whenGET(/.*/).passThrough(),b.whenPOST(/.*/).passThrough(),b.whenPUT(/.*/).passThrough(),b.whenDELETE(/.*/).passThrough()}]),angular.module("imagesGalleryApp").requires.push("imagesGalleryMocks")}var d=["ngMockE2E","imagesGalleryMocks.utils","imagesGalleryMocks.imageService"];if(b)c();else{if(!a)throw new Error("Error injecting mock module");module.exports.MOCK_MODULES=d}}("undefined"!=typeof module&&module.exports,"undefined"!=typeof angular),angular.module("imagesGalleryMocks.utils",[]).constant("DELAY_MILLIS",500).constant("INTERCEPTED_REQUEST",[/services\/images/]).factory("DelayInterceptor",["$q","$timeout","DELAY_MILLIS","INTERCEPTED_REQUEST",function(a,b,c,d){function e(d){var e=a.defer();return b(function(){return e.resolve(d)},c),e.promise}return{request:function(a){return _.any(d,function(b){return b.test(a.url)})?e(a):a}}}]).config(["$httpProvider",function(a){a.interceptors.push("DelayInterceptor")}]),angular.module("imagesGalleryMocks.utils").service("urlParser",function(){function a(a,b){var c,d,e,f,g={};for(c=a.split("?")[1].split("&"),e=0,f=c.length;f>e;e++)d=c[e].split("="),g[d[0]]=d[1];return g[b]}return{getQueryParamByName:a}}),angular.module("imagesGalleryMocks.imageService",[]).run(["$httpBackend","urlParser","MOCKED_IMAGES",function(a,b,c){function d(a,d){var e=[],f=Number(b.getQueryParamByName(d,"results"))||10,g=Number(b.getQueryParamByName(d,"page"))||0;return e=c.images.slice(g*f,g*f+f),[200,{images:e},{}]}a.whenGET(/\/services\/images/).respond(d)}]),angular.module("imagesGalleryMocks.imageService").constant("MOCKED_IMAGES",{images:[{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/1.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/2.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/3.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/4.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/5.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/6.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/7.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/8.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/9.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/10.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/11.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/12.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/13.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/14.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/15.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/16.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/17.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/18.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/19.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/20.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/21.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/22.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/23.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/24.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/25.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/26.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/27.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/28.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/29.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/30.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/31.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/32.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/33.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/34.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/35.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/36.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/37.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/38.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/39.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/40.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/41.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/42.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/43.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/44.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/45.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/46.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/47.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/48.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/49.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/50.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/51.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/52.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/53.jpg"},{owner:"Sample Owner",description:"Image description",imageUrl:"/images/image-service/54.jpg"}]});