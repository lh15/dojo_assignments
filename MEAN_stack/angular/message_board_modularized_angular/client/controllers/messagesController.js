myApp.controller('messagesController', ['$scope', 'messagesFactory', '$location', function ($scope, messagesFactory, $location) {
    console.log("reached controller");
    $scope.message = {};
    $scope.messages = [];


    function setMessages(data) {
        $scope.messages = data;
        $scope.message = {};
    }
    $scope.index = function () {
        console.log("reached scope.index");
        messagesFactory.index(setMessages);
    }
    $scope.index();
    $scope.createMessage = function () {
        messagesFactory.createMessage($scope.message, setMessages);
    }
    $scope.createComment = function (messageId, comment) {
        console.log(comment);
        messagesFactory.createComment(comment, messageId, setMessages);
        
    }
    $scope.deleteMessage = function (id) {
        console.log(id);
        messagesFactory.deleteMessage(id, setMessages);
        console.log("reached deletemessage in controller") 
    }
    $scope.deleteComment = function (id) {
        console.log(id);
        messagesFactory.deleteComment(id, setMessages); 
        console.log("reached deletecomment in controller") 
        
    }
}])