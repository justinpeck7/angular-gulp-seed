angular.module('angular-seed.home', [])
  .config(function($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      controller: 'HomeCtrl',
      controllerAs: 'home',
      templateUrl: 'home/home.html'
    });
  })
  .controller('HomeCtrl', function HomeController() {
    var home = this;
    home.message = 'World';
  });
