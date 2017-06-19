
myApp.controller('playersController', ['$scope', 'playersFactory', '$location', function ($scope, playersFactory, $location) {
    console.log("reached controller");
    $scope.player1 = {};
    $scope.player2 = {};
    $scope.p1Ready = false;
    $scope.readyPlayer2 = false;
    $scope.players = [];



    function setPlayers(data, number) {
        if (number == 1) {
            if (data) {
                $scope.player1 = data;
                $scope.P1username = "";
                $scope.p1Ready = true;
            } else {
                $scope.p1Err = "username not found, please enter a different username"
            }

        } else if (number == 2) {
            if (data) {
                $scope.player2 = data;
                $scope.P2username = "";
                $scope.p2Ready = true;
            } else {
                $scope.p2Err = "username not found, please enter a different username"
            }

        }
    }


    // get players
    $scope.getPlayers = function (username, number) {
        playersFactory.getPlayers(username, number, setPlayers);
    }
    // setplayers
    // battle
    $scope.battle = function (player1, player2) {
        playersFactory.battle@(username, number, setPlayers);
    }
    // save to db
    // show results
}])