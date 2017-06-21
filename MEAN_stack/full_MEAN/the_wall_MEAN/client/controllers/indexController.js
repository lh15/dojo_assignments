myApp.controller('indexController', function ($scope, indexFactory, $location, $cookies) {
    console.log("reached controller");
    var currentUser = $cookies.get('currentUser');
    console.log(":" + currentUser);
    if (!currentUser) {
        console.log("!currentUser");
        console.log($location);
        $location.path("/login");
    } else {
        $location.path("/success");
        // $scope.user = {};
        $scope.currentUser = JSON.parse(currentUser);
        console.log("currrentuser: " + $scope.currentUser);
        console.log($scope.currentUser);
    }
    //used to validate that bday is before today
    $scope.currentDate = new Date();

    var errorHandler = function (errors) {
        console.log(errors);
    }

    $scope.logOut = function () {
        $cookies.remove('currentUser');
        $location.path("/login");
    }



})