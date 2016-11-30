'use strict';

// Declare app level module which depends on views, and components
angular.module('movie', [
	'ngRoute',
	'movie.movie_detail',//注意和movie_list的引用顺序
	'movie.movie_list',
	'movie.directives.auto_focus'
]).config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}])
	.controller('SearchController',['$scope','$route',function ($scope,$route) {
		$scope.input = '';
		$scope.search = function () {
			$route.updateParams({category:'search',q:$scope.input});
			// console.log($scope.input);
		}
	}])
;
