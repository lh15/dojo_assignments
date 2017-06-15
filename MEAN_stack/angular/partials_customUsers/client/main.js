console.log("reached script");
var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/customizeUsers.html',
        controller: 'customizeUsersController'
    })
        .when('/list', {
            templateUrl: 'partials/userList.html',
            controller: 'userListController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
app.factory('userFactory', function () {
    console.log("reached factory");

    var users = [{
        first_name: "Charlie",
        last_name: "Mead",
        fav_lang: "JavaScript"
    },
    {
        first_name: "Mike",
        last_name: "Hannon",
        fav_lang: "Python"
    },
    {
        first_name: "Sara",
        last_name: "Wong",
        fav_lang: "Ruby"
    }];
    var factory = {};
    factory.index = function (callback) {
        console.log("reached index in factory");
        callback(users);
    }

    factory.addUser = function (user, callback) {
        users.push(user);
        callback(users);
    }
    factory.deleteUser = function (userToDelete, callback) {
        users.splice(userToDelete, 1);
        callback(users);
    }
    return factory;
});
//  build the controllers
app.controller('customizeUsersController', ['$scope', 'userFactory', function ($scope, userFactory) {
    console.log("reached controller");
    $scope.user = {};
    $scope.users = [];

    function setUsers(data) {
        $scope.users = data;
        $scope.user = {};
    }
    $scope.index = function () {
        console.log("reached scope.index");
        userFactory.index(setUsers);
    }
    $scope.index();
    $scope.addUser = function () {
        userFactory.addUser($scope.user, setUsers);
    }
    $scope.deleteUser = function (userToDelete) {
        userFactory.deleteUser(userToDelete, setUsers);
    }
}]);
app.controller('userListController', ['$scope', 'userFactory', function ($scope, userFactory) {
    function setUsers(data) {
        $scope.users = data;
        $scope.user = {};
    }

    userFactory.index(setUsers);

}]);