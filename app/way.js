'use strict';

var wayApp = angular.module('wayApp', ['ngRoute']);

wayApp.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: 'way.html',
            controller: 'WayCtrl'

        }).when('/error', {
            templateUrl: 'way.html',
            controller: 'WayCtrl',
            resolve: {
                loadData: wayApp.error
            }
        }).when('/success', {
            templateUrl: 'rightWay.html',
            controller: 'WayCtrl',
            resolve: {
                loadData: wayApp.success
            }
        });
});

// add error directive here

var WayCtrl = wayApp.controller('WayCtrl', function ($scope, $route) {
    $scope.alertMessage = 'You choose the right way! :)';
});

WayCtrl.error = function ($q, $timeout) {
    var defer = $q.defer();
    $timeout(function () {
        defer.reject();
    }, 500);
    return defer.promise;
};

WayCtrl.success = function ($rootScope, $q, $timeout) {
    var defer = $q.defer();
    $rootScope.wrongWay = false;
    $timeout(function () {
        defer.resolve();
    }, 100);
    return defer.promise;
};