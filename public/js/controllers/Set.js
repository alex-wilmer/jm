function Set ($scope, $http, $routeParams, $sce) {
	$http.get('/api/sets/' + $routeParams.setName).success(function(set) {
		set[0].safeTracklist = $sce.trustAsHtml(set[0].tracklist)
		$scope.set = set[0]
	})
}

angular
	.module('app')
	.controller('Set', Set)