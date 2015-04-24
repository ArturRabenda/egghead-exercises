'use strict';
var app = angular.module('app');
app.controller('PaintingDetailCtrl', function ($scope, $stateParams) {
    angular.forEach($scope.paintingList, function (element) {
        if (Number($stateParams.detail) === element.id) {
            $scope.detail = element;
        }
    });

});
