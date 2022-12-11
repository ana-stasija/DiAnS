let angular;
const app = angular.module('myApp', []);

app.controller('MainController', function($scope) {
  $scope.message = 'Hello World!';
});
