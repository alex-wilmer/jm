function Artist ($scope, $http, $routeParams, $sce) {
	$http.get('/api/artists/' + $routeParams.artistName).success(function(artist) {
		artist[0].safeBio = $sce.trustAsHtml(artist[0].bio)
		$scope.artist = artist[0]
	})
}

angular
	.module('app')
	.controller('Artist', Artist)