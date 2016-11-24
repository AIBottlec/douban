(function (angular) {
	'use strict';
	//创建正在热映的模块
	var module = angular.module('movie.top250', ['ngRoute']);
	//配置模块路由
	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/top250', {
			templateUrl: 'top250/view.html',
			controller: 'Top250Controller'
		});
	}]);
	//
	module.controller('Top250Controller', ['$scope',function ($scope) {

	}]);
})(angular);
