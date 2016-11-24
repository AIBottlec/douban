(function (angular) {
	'use strict';
	//创建正在热映的模块
	var module = angular.module('movie.in_theaters', ['ngRoute']);
	//配置模块路由
	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/in_theaters', {
			templateUrl: 'in_theaters/view.html',
			controller: 'inTheatersController'
		});
	}]);
	//
	module.controller('inTheatersController', ['$scope',function ($scope) {

	}]);
})(angular);
