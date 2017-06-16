console.log("reached script");
var myApp = angular.module('myApp', ['ngRoute']);
// -------------------------- Client Routes -----------------------------
myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/notes.html',
        controller: 'notesController'
    })
        .otherwise({
            redirectTo: '/'
        });
});