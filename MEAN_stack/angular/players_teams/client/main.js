console.log("reached script");
var app = angular.module('app',  ['ngRoute', 'ngMessages']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/players.html',
        controller: 'playerController'
    })
        .when('/players', {
            templateUrl: 'partials/players.html',
            controller: 'playerController'
        })
        .when('/teams', {
            templateUrl: 'partials/teams.html',
            controller: 'teamController'
        })
        .when('/associations', {
            templateUrl: 'partials/associations.html',
            controller: 'associationController'
        })
        // continue of config
        .when('/:teamname', {
            templateUrl: 'partials/team.html',
            controller: 'AteamController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
app.factory('playerFactory', function () {
    console.log("reached player factory");

    var players = [
        {
            name: "kris bryant", team: "cubs"
        }, {
            name: "michael jordan", team: "bulls"
        }, {
            name: "leibel ", team: null
        }];
    var factory = {};
    factory.index = function (callback) {
        console.log("reached index in factory");
        callback(players);
    }

    factory.addPlayer = function (player, callback) {
        players.push(player);
        callback(players);
    }
    factory.deletePlayer = function (playerToDelete, callback) {
        players.splice(playerToDelete, 1);
        callback(players);
    }
    //Set a player's team name
    factory.addAssociation = function (data) {
        players[data.playerIdx].team = data.team;
    }

    //Reset a player's team name to an empty string
    factory.removePlayerFromTeam = function ($index) {
        players[$index].team = "";
    }
    return factory;
});
app.factory('teamFactory', function () {
    console.log("reached team factory");

    var teams = [{ name: "cubs" }, {
        name: "bulls"
    }];
    var factory = {};
    factory.index = function (callback) {
        console.log("reached index in factory");
        callback(teams);
    }

    factory.addTeam = function (team, callback) {
        teams.push(team);
        callback(teams);
    }
    factory.deleteTeam = function (teamToDelete, callback) {
        teams.splice(teamToDelete, 1);
        callback(teams);
    }
    return factory;
});
//  build the controllers
app.controller('playerController', ['$scope', 'playerFactory', function ($scope, playerFactory) {
    console.log("reached controller");
    $scope.player = {};
    $scope.players = [];

    function setPlayers(data) {
        console.log("reached set users")
        console.log("data:" + data)
        $scope.players = data;
        $scope.player = {};
    }
    $scope.index = function () {
        console.log("reached scope.index");
        playerFactory.index(setPlayers);
    }
    $scope.index();
    $scope.addPlayer = function () {
        
        playerFactory.addPlayer($scope.player, setPlayers);
    }
    $scope.deletePlayer = function (playerToDelete) {
        playerFactory.deletePlayer(playerToDelete, setPlayers);
    }
}]);
app.controller('teamController', ['$scope', 'teamFactory', function ($scope, teamFactory) {
    console.log("reached controller");
    $scope.team = {};
    $scope.teams = [];

    function setTeams(data) {
        $scope.teams = data;
        $scope.team = {};
    }
    $scope.index = function () {
        console.log("reached scope.index");
        teamFactory.index(setTeams);
    }
    $scope.index();
    $scope.addTeam = function () {
        teamFactory.addTeam($scope.team, setTeams);
    }
    $scope.deleteTeam = function (teamToDelete) {
        teamFactory.deleteTeam(teamToDelete, setTeams);
    }
}]);
app.controller('associationController', ['$scope', 'teamFactory', 'playerFactory', function ($scope, teamFactory, playerFactory) {
    console.log("reached controller");
    $scope.player = {};
    $scope.players = [];
    $scope.team = {};
    $scope.teams = [];

    function setPlayers(data) {
        $scope.players = data;
        $scope.player = {};
    }

    function setTeams(data) {
        $scope.teams = data;
        $scope.team = {};
    }
    $scope.index = function () {
        console.log("reached scope.index");
        teamFactory.index(setTeams);
        playerFactory.index(setPlayers);
    }
    $scope.index();

    //Pass the player index and team name to create association
    $scope.addAssociation = function () {
        playerFactory.addAssociation($scope.association);
    }

    //Pass $index to PlayerFactory to remove the player's team
    $scope.removePlayerFromTeam = function ($index) {
        playerFactory.removePlayerFromTeam($index);
    }

}]);
app.controller('AteamController', function ($scope,teamFactory, playerFactory, $routeParams) {
    $scope.player = {};
    $scope.players = [];

    $scope.teamName = $routeParams.teamname;
    
    function isOnTeam(player) {
        return player.team === $routeParams.teamname;
    }

    function setPlayers(data) {
        $scope.players = data.filter(isOnTeam);
        $scope.player = {};
    }

    $scope.index = function () {
        console.log("reached scope.index");
        playerFactory.index(setPlayers);
    }
    $scope.index();
    console.log($routeParams)
})
