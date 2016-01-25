'use strict';

angular.module('encontradocsBackendApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('encontrado', {
        url: '/encontrado',
        templateUrl: 'app/encontrado/encontrado.html',
        controller: 'EncontradoCtrl'
      });
  });
