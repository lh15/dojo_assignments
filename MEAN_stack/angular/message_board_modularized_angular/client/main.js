console.log("reached script");
var myApp = angular.module('myApp', ['ngRoute']);
// -------------------------- Client Routes -----------------------------
myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/messages.html',
        controller: 'messagesController'
    })
        .when('/messages', {
            templateUrl: 'partials/messages.html',
            controller: 'messagesController'
        })
        .otherwise({
            redirectTo: '/'
        });
});