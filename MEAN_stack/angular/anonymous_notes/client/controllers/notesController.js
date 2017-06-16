myApp.controller('notesController', ['$scope', 'notesFactory', '$location', function ($scope, notesFactory, $location) {
    console.log("reached controller");
    $scope.note = {};
    $scope.notes = [];


    function setNotes(data) {
        $scope.notes = data;
        $scope.note = {};
    }
    $scope.index = function () {
        console.log("reached scope.index");
        notesFactory.index(setNotes);
    }
    $scope.index();
    $scope.createNote = function () {
        notesFactory.createNote($scope.note, setNotes);
    }
}])