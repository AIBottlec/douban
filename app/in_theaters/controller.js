(function (angular) {
	'use strict';
	//创建正在热映的模块
	var module = angular.module('movie.in_theaters', ['ngRoute','movie.services.http']);
	//配置模块路由
	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/in_theaters/:page', {
			templateUrl: 'in_theaters/view.html',
			controller: 'inTheatersController'
		});
	}]);

	module.controller('inTheatersController', ['$scope','$routeParams','HttpService',function ($scope,$routeParams,HttpService) {
		var count = 10;//每一页的数量
		var page = parseInt($routeParams.page);//当前是第几页
		var start = (page - 1) * count;//当前页数据从哪开始
		//控制器编写：1.设计暴露的数据；2.设计暴露的行为
		// 引用豆瓣API https://developers.douban.com/wiki/?title=api_v2
		//data.json数据来源http://api.douban.com/v2/movie/in_theaters
		$scope.subjects= [];
		$scope.message = '';
		$scope.totalCount = 0;
		$scope.totalpages = 0;
		$scope.loading = true;
		HttpService.jsonp('http://api.douban.com/v2/movie/in_theaters',
			{start:start,count:count},
			function (data) {
			// console.log(data);
			$scope.subjects = data.subjects;
			$scope.totalCount = data.total;
			$scope.totalpages = Math.ceil($scope.totalCount/count);
			$scope.loading = false;
			$scope.$apply('subjects');//apply的作用就是让指定的表达式重新同步
		});
		                   // 实现跨域请求
		// 查看angular文档可分析到：angular中将所有的JSONP的callback都挂在了angular.callbacks这个对象上
		// 我们必须给当前地址加上一个参数，callback=JSON_CALLBACK
	}]);
})(angular);
