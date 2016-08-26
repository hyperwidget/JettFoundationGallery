(function () {
  'use strict';

  angular
    .module('app')
    .directive('main', function () {
      return {
        restrict: 'E',
        templateUrl: 'app/components/main/main.html',
        controller: MainCtrl,
        controllerAs: 'mainVm',
        bindToController: true
      };
    });

  MainCtrl.$inject = ['$http', 'angularGridInstance'];

  function MainCtrl($http, angularGridInstance) {
    var vm = this;

    vm.getImages = function () {
      $http.get('/api/images')
        .then(function (response) {
          vm.images = response.data;
        });
    };

    vm.refreshImages = function () {
      vm.images = [];
      vm.getImages();
    };

    vm.refreshImages();
  }
})();
