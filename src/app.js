angular.module('angular-seed', [
    'ui.router',
    'ngResource',
    'ui.bootstrap',
    'angular-seed.home',
    'angular-seed.module'
  ])
  .config(function myAppConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  })
  .controller('AppCtrl', function AppCtrl() {
    var app = this;
  });
