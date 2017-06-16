myApp.factory("notesFactory", function ($http) {
    
    var factory = {};
    factory.notes = [];
    
    // index: Retrieve all 
    factory.index = function(callback){
        $http.get('/api').then(function(response){
            console.log(response.data);
            factory.notes  = response.data.notes
            callback(factory.notes);
        });
        
    }
    // create: add 
    factory.createNote = function(note, callback){
        $http.post('/api/note', note).then(function(response){
            factory.notes  = response.notes
            factory.index(callback);
        }); 
    }
        
    return factory;
});