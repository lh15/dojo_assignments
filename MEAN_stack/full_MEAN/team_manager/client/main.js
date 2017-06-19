console.log("reached script");
var myApp = angular.module('myApp', ['ngRoute']);
// -------------------------- Client Routes -----------------------------
myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/players/list', {
            templateUrl: 'partials/playersList.html',
            controller: 'playersController'
        })
        .when('/players/addplayer', {
            templateUrl: 'partials/addPlayer.html',
            controller: 'playersController'
        })
        .when('/players/list', {
            templateUrl: 'partials/playersList.html',
            controller: 'playersController'
        })
        .when('/status/game/:game', {
            templateUrl: 'partials/game.html',
            controller: 'playersController'
        })
        .when('/players', {
            redirectTo: '/players/list'
        })
        .when('/status', {
            redirectTo: '/status/game/1'
        })
        .when('/', {
            redirectTo: '/players/list'
        })
        .otherwise({
            redirectTo: '/'
        });
});