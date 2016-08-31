// (function () {
//   'use strict';

//   angular
//     .module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'pascalprecht.translate', 'tmh.dynamicLocale', 'appTemplates', 'angularGrid']);

// })();

var offset = 0

function getImages() {
  $.get("/api/images?offset=" + offset, function (data) {
    appendImages(data);
    offset++;
  });
};

function appendImages(images) {
  //Capture current scroll position
  var top = $(document).scrollTop();

  var $grid = $('#grid').packery({
    itemSelector: '.grid-item',
    gutter: 0
  });

  if (images.length > 0) {
    images.forEach(function (image) {
      var img = $('<img>'); //Equivalent: $(document.createElement('img'))
      img.attr('src', image.url);
      img.attr('class', 'grid-item');
      $grid.append(img)
        // add and lay out newly appended items
        .packery('appended', img);
      // img.appendTo('#grid');
    });

    //When an image loads, get packery to relayout
    $grid.imagesLoaded().progress(function () {
      $grid.packery();
      //Make sure everything doesn't scroll
      $(document).scrollTop(top);
    });
  }
};

$().ready(function () {
  getImages();
});