// (function () {
//   'use strict';

//   angular
//     .module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'pascalprecht.translate', 'tmh.dynamicLocale', 'appTemplates', 'angularGrid']);

// })();

var images = [];

function getImages() {
  $.get("/api/images", function (data) {
    appendImages(data);
  });
};

function appendImages(images) {
  if (images.length > 0) {
    images.forEach(function (image) {
      var img = $('<img>'); //Equivalent: $(document.createElement('img'))
      img.attr('src', image.url);
      img.attr('class', 'grid-item');
      img.appendTo('#grid');
    });

    var $grid = $('#grid').packery({
      itemSelector: '.grid-item',
      gutter: 0
    });

    $grid.imagesLoaded().progress(function () {
      $grid.packery();
    });
  }
};

$().ready(function () {
  getImages();
});