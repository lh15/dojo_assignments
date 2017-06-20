console.log("reached script");
var usersApp = angular.module('usersApp', ['ngRoute']);
// -------------------------- Client Routes -----------------------------
usersApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/login.html',
        controller: 'usersController'
    })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'usersController'
        })
        .when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'usersController'
        })
        .when('/success', {
            templateUrl: 'partials/logged_in.html',
            controller: 'usersController'
        })
        .otherwise({
            redirectTo: '/'
        });
});