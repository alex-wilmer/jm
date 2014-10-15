function Set ($scope, $http, $routeParams, $sce) {
	$http.get('/api/sets/' + $routeParams.setName).success(function(sets) {
		sets[0].safeTracklist = $sce.trustAsHtml(sets[0].tracklist)
		$scope.set = sets[0]
	})
}

angular
	.module('app')
	.controller('Set', Set)