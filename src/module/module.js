angular.module('angular-seed.module', [])
  .config(function($stateProvider) {
    $stateProvider.state('search', {
      url: '/module',
      controller: 'ModuleCtrl as module',
      controllerAs: 'module',
      templateUrl: 'module/module.html'
    });
  })
  .controller('ModuleCtrl', function ModuleController() {
    var module = this;
  });
