myApp.controller('playersController', function ($scope, playersFactory, $location, $routeParams) {
    console.log("reached controller");
    $scope.player = {};
    $scope.players = [];
    $scope.game = parseInt($routeParams.game);
    $scope.url = $location.$$url;


    function setPlayers(data) {
        $scope.players = data;
        $scope.player = {};
    }
    $scope.index = function () {
        console.log("reached scope.index");
        playersFactory.index(setPlayers);
    }
    $scope.index();
    $scope.addPlayer = function () {
        playersFactory.addPlayer($scope.player, setPlayers);
        $location.url('/players/list');
    }
    $scope.updatePlayer = function (id, status, gameNum) {
        console.log(id);
        playersFactory.updatePlayer(id, status, gameNum, setPlayers);
        console.log("reached updatePlayer in controller")
    }
    $scope.deletePlayer = function (id, name) {
        if (confirm("Are you sure you want to delete " + name + " from your database?")) {
            console.log(id);
            playersFactory.deletePlayer(id, setPlayers);
            console.log("reached deleteplayer in controller")
        }

    }


})