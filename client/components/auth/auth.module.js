'use strict';

angular.module('encontradocsBackendApp.auth', [
  'encontradocsBackendApp.constants',
  'encontradocsBackendApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
