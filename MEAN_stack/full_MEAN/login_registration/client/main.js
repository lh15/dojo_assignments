console.log("reached script");
var usersApp = angular.module('usersApp', ['ngRoute', 'ngCookies', 'ngMessages']);
// -------------------------- Client Routes -----------------------------
usersApp.config(function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
    })
        .when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'registerController'
        })
        .when('/success', {
            templateUrl: 'partials/logged_in.html',
            controller: 'indexController'
        })
        .when('/', {
            templateUrl: 'partials/logged_in.html',
            controller: 'indexController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
//directive to compare passwords and confirm match from stackoverflow
var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};

usersApp.directive("compareTo", compareTo);