(function (angular) {
	'use strict';
	//创建正在热映的模块
	var module = angular.module('movie.coming_soon', ['ngRoute']);
	//配置模块路由
	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/coming_soon', {
			templateUrl: 'coming_soon/view.html',
			controller: 'ComingSoonController'
		});
	}]);
	//
	module.controller('ComingSoonController', ['$scope',function ($scope) {

	}]);
})(angular);
