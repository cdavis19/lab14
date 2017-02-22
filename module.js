var app = angular.module('myMod', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/dog', {
      controller: 'dogController',
      templateUrl: 'dog.html'
    })
    .when('/cat', {
      controller: 'catController',
      templateUrl: 'cat.html'
    })
    .when('/fish', {
      controller: 'fishController',
      templateUrl: 'fish.html'

    })
    .when('/penguin', {
      controller: 'penguinController',
      templateUrl: 'penguin.html'
    })
    .otherwise({redirectTo:'/'});
    $locationProvider.hashPrefix('');
  });
