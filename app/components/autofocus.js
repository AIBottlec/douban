/**
 * Created by Administrator on 2016/11/29.
 */
(function (angular) {
	angular.module('movie.directives.auto_focus',[])
		.directive('autoFocus',['$location',function ($location) {
			var path = $location.path();
			return{
				restrict:'A',
				link:function ($scope,iElm,iAttrs,controller) {
					var aLink = iElm.children().attr("href");
					var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');
					// console.log(path+'-----------'+type);
					if (path.startsWith(type)){
						iElm.addClass('active');
					}
					iElm.on('click',function () {
						iElm.parent().children().removeClass('active');
						iElm.addClass('active');
						// window.iele = iElm;
					})
				}
			}
		}])
})(angular);
