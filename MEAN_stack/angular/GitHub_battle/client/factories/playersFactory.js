myApp.factory("playersFactory", function ($http) {

    var factory = {};
    factory.players = [];


    factory.getPlayers = function (username, number, callback) {
        $http.get("https://api.github.com/users/" + username).then(function (response) {
            console.log(response.data);
            callback(response.data, number);
        }).catch(function (err) {
            console.log("err");
            callback(null, number);
        })
    }

    // TODO:
    // battle function redirect to resu;ts


    return factory;
});