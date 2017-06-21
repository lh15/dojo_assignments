myApp.controller('messagesController', ['$scope', 'messagesFactory', '$location', '$cookies', function ($scope, messagesFactory, $location, $cookies) {
    console.log("reached controller");
    $scope.message = {};
    $scope.messages = [];
    var currentUser = $cookies.get('currentUser');
    console.log(":" + currentUser);
    if (!currentUser) {
        console.log("!currentUser");
        console.log($location);
        $location.path("/login");
    } else {
        $location.path("/messages");
        // $scope.user = {};
        $scope.currentUser = JSON.parse(currentUser);
        console.log("currrentuser: " + $scope.currentUser);
        console.log($scope.currentUser);
    }

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
        console.log($scope.message);
        $scope.message.author = $scope.currentUser._id;
        console.log($scope.message);
        messagesFactory.createMessage($scope.message, setMessages);
    }
    $scope.createComment = function (messageId, comment) {
        comment.author = $scope.currentUser._id;
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
    $scope.logOut = function () {
        $cookies.remove('currentUser');
        $location.path("/login");
    }
}])