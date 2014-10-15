function Artist ($scope, $http, $routeParams, $sce) {
	$http.get('/api/artists/' + $routeParams.artistName).success(function(artists) {
		artists[0].safeBio = $sce.trustAsHtml(artists[0].bio)
		$scope.artist = artists[0]
	})
}

angular
	.module('app')
	.controller('Artist', Artist)