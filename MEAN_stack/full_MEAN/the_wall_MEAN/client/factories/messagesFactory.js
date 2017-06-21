myApp.factory("messagesFactory", function ($http) {
    
    var factory = {};
    factory.messages = [];
    
    // index: Retrieve all 
    factory.index = function(callback){
        $http.get('/api/messages').then(function(response){
            console.log(response.data);
            factory.messages  = response.data.messages
            callback(factory.messages);
        });
        
    }
    // create: add 
    factory.createMessage = function(message, callback){
        $http.post('/api/message', message).then(function(response){
            factory.messages  = response.messages
            factory.index(callback);
        }); 
    }

    factory.createComment = function(comment, message_id, callback){
        $http.post('/api/comment/' + message_id, comment).then(function(response){
            factory.messages  = response.messages
            factory.index(callback);
        });  
    }
    factory.deleteMessage = function(id, callback){
        console.log("reached deletemessage before delete in factory") 
        $http.delete('/api/delete_message/' + id).then(function(response){
            console.log("AND WE're HERE")
            factory.messages  = response.data.messages
            console.log("reached deletemessage before callback in factory")             
            factory.index(callback);
            console.log("reached deletemessage after callback in factory") 
        }, console.warn).catch(console.warn);  
    }
      
    factory.deleteComment = function(id, callback){
        console.log("reached deletecomment before delete in factory") 
        $http.delete('/api/delete_comment/' + id).then(function(response){
            factory.messages  = response.data.messages
            console.log("reached deletecomment before callback in factory") 
            factory.index(callback);
            console.log("reached deletecomment after callback in factory") 
        }).catch(console.warn);  
    }
        
    return factory;
});