usersApp.factory("usersFactory", function ($http) {
    
    var factory = {};
    factory.current_user = "leibel";
    
    // index: Retrieve all 
    factory.getCurrentUser = function(callback){
        callback(factory.current_user);
        console.log(factory.current_user);
    }
    // create: register 
    factory.register = function(user, callback, errorHandler){
        $http.post('/api/register', user).then(function(response){
            console.log(response);
            if (!response.data.errors) {
                factory.current_user = response.data.newUser;
                factory.getCurrentUser(callback);
            } else {
                errorHandler(response.data.errors);
            }
        }); 
    }

    factory.login = function(user, callback, errorHandler){
        $http.post('/api/login', user).then(function(response){
            console.log(response);            
            if (!response.data.errors) {
                factory.current_user = response.data.user;
                factory.getCurrentUser(callback);
            }else {
                errorHandler(response.data.errors);
            }
        }); 
    }

    return factory;
});