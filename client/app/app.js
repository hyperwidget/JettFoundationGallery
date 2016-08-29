// (function () {
//   'use strict';

//   angular
//     .module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'pascalprecht.translate', 'tmh.dynamicLocale', 'appTemplates', 'angularGrid']);

// })();

var images = [];

function getImages() {
  $.get("/api/images", function (data) {
    images = data;
    console.log(images);

    if (data.length > 0) {
      data.forEach(function (image) {
        var img = $('<img>'); //Equivalent: $(document.createElement('img'))
        img.attr('src', image.url);
        img.attr('class', 'grid-item');
        img.appendTo('#grid');
      });

      var $grid = $('#grid').packery({
        itemSelector: '.grid-item',
        gutter: 0
      });

      console.log($grid);

      $grid.imagesLoaded().progress(function () {
        $grid.packery();
        console.log('face');
      });
    }
  });
};

$().ready(function () {
  getImages();
});