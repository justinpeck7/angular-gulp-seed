angular.module('my-webapp.module', [])
  .config(($stateProvider) => {
    $stateProvider.state('search', {
      url: '/module',
      controller: 'ModuleCtrl as module',
      controllerAs: 'module',
      templateUrl: 'module/module.html'
    });
  })
  .controller('ModuleCtrl', function() {
    var module = this;
  });
