myApp.factory("playersFactory", function ($http) {
    
    var factory = {};
    factory.players = [];
    
    // index: Retrieve all 
    factory.index = function(callback){
        $http.get('/api').then(function(response){
            // console.log(response.data);
            factory.players  = response.data.players
            callback(factory.players);
        });
        
    }
    // create: add 
    factory.addPlayer = function(player, callback){
        $http.post('/api/player', player).then(function(response){

            factory.index(callback);
        }); 
    }
    factory.updatePlayer = function(id, status, gameNum, callback){
        $http.post('/api/update_player/' + id, {status: status, gameNum: gameNum}).then(function(response){
            console.log("AND WE're HERE")
            factory.index(callback);
        }, console.warn).catch(console.warn);  
    }
    factory.deletePlayer = function(id, callback){
        console.log("reached deletePlayer before delete in factory") 
        $http.delete('/api/delete_player/' + id).then(function(response){

            console.log("reached deletePlayer before callback in factory")             
            factory.index(callback);
            console.log("reached deletePlayer after callback in factory") 
        }, console.warn).catch(console.warn);  
    }
    return factory;
});