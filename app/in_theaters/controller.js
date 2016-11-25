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

	module.controller('inTheatersController', ['$scope','$http',function ($scope,$http) {
		//控制器编写：1.设计暴露的数据；2.设计暴露的行为
		// 引用豆瓣API https://developers.douban.com/wiki/?title=api_v2
		//data.json数据来源http://api.douban.com/v2/movie/in_theaters
		$scope.subjects= [];
		$scope.message = '';
		$http({
			method: 'GET',
			url: '/movie/app/data.json'
		}).then(function successCallback(response) {
			if(response.status == 200){
				// 此处代码是在异步请求完成后才执行（需要等一段时间）
				$scope.subjects = response.data.subjects;
				console.log($scope.subjects);
			}else{
				$scope.message = '获取数据失败'+response.statusText;
			}
		}, function errorCallback(err) {
			$scope.message = "请求失败"+err.statusText;
		});
	}]);
})(angular);
