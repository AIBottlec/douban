'use strict';

// Declare app level module which depends on views, and components
angular.module('movie', [
	'ngRoute',
	'movie.movie_list',
	'movie.directives.auto_focus',
]).config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]);
