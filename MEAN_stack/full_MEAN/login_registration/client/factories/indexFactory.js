usersApp.factory("indexFactory", function ($http) {

    var factory = {};
    factory.currentUser = null;
    
    // index: Retrieve all 
    factory.getCurrentUser = function (callback) {
        callback(factory.currentUser);
        console.log(factory.currentUser);
    }

    return factory;
});