angular.module('my-webapp', [
    'ui.router',
    'ngResource',
    'ui.bootstrap',
    'my-webapp.common',
    'my-webapp.home',
    'my-webapp.module'
  ])
  .config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
  })
  .controller('AppCtrl', function() {
    var app = this;
  });
