angular.module('my-webapp.home', [])
  .config(($stateProvider) => {
    $stateProvider.state('home', {
      url: '/',
      controller: 'HomeCtrl',
      controllerAs: 'home',
      templateUrl: 'home/home.html'
    });
  })
  .controller('HomeCtrl', function() {
    var home = this;
    home.message = 'World';
  });
