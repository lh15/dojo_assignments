console.log("reached script");
var myApp = angular.module('myApp', ['ngRoute']);
// -------------------------- Client Routes -----------------------------
myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/landing_page.html',
        controller: 'playersController'
    })
        .when('/battle', {
            templateUrl: 'partials/battle.html',
            controller: 'playersController'
        })
        .when('/results', {
            templateUrl: 'partials/results.html',
            controller: 'playersController'
        })
         .when('/rankings', {
            templateUrl: 'partials/rankings.html',
            controller: 'playersController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
