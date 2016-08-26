(function () {
  'use strict';

  angular
    .module('app')
    .directive('imageCard', function () {
      return {
        restrict: 'E',
        templateUrl: 'app/components/image/image.html',
        controller: ImageCardCtrl,
        controllerAs: 'imageCardVm',
        bindToController: true,
        scope:{
          imageData: '=imageData'
        }
      };
    });

  function ImageCardCtrl() {
    var vm = this;
  }
})();
