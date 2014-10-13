function Artists ($scope, $http) {
	$http.get('/api/artists').success(function(artists) {
		if (artists != null) {
			for (var i=0;i<artists.length;i++) {
				artists[i].url = artists[i].name.replace(/ /g, '_')
			}
			$scope.artists = artists
		} else {
			$scope.artists = []
		}
	})
}

angular
	.module('app')
	.controller('Artists', Artists)