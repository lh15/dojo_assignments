usersApp.controller('usersController', function ($scope, usersFactory, $location) {
    console.log("reached controller");
    $scope.user = {};
    $scope.current_user = null;
    $scope.currentDate = new Date();

    var errorHandler = function (errors) {
        console.log(errors);
    }
    function setCurrentUser(current_user) {
        $scope.current_user = current_user;
        $location.path("/success");
    }
    $scope.getCurrentUser = function () {
        console.log("reached scope.index");
        usersFactory.getCurrentUser(setCurrentUser);
    }
    $scope.register = function () {
        console.log($scope.user);
        usersFactory.register($scope.user, setCurrentUser, errorHandler);
        
    }
    $scope.login = function () {
        console.log($scope.user);
        usersFactory.login($scope.user, setCurrentUser, errorHandler);
    }



})