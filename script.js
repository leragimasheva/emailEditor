angular.module('emailsEditor', []).controller('MainController', ['$scope', function($scope) {
     $scope.emails = ['sidorov@mail.ru'];
     
     $scope.countEmails = function() {
       alert($scope.emails.length);
     }
     
     $scope.addEmail = function() {
       $scope.emails.push(Math.random().toString(36).substr(2, 5) + '@' + Math.random().toString(36).substr(2, 5) + '.ru');
     }
}]);