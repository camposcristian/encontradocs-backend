'use strict';

angular.module('encontradocsBackendApp', [
  'encontradocsBackendApp.auth',
  'encontradocsBackendApp.admin',
  'encontradocsBackendApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngFileUpload',
  'ngImgCrop',
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
