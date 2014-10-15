function Artists ($scope, $http) {

	$scope.loaded = false

	$http.get('/api/artists').success(function(artists) {
		$scope.artists = artists
		$scope.loaded = true
	})

	$scope.createArtist = function() {
		if (!!$scope.newArtist) {
			if (validate()) {
				var artist = {
					name: $scope.newArtist.name
				  , imageUrl: $scope.newArtist.imageUrl
				  , bio: $scope.newArtist.bio
				}
				$http.post('/api/artists', artist)
				$scope.artists.push(artist)
				$scope.newArtist = {}
			}
		}
	}

	$scope.updateArtist = function(index) {
		$scope.artists[index].editingName = false
		$http.put('/api/artists/' + $scope.artists[index]._id, $scope.artists[index])
	}

	$scope.removeArtist = function(index) {
		$http.delete('/api/artists/' + $scope.artists[index]._id)
		$scope.artists.splice(index, 1)
	}

	function validate() {
		$scope.errors = []
		var valid = true
		if (!$scope.newArtist.name) {
			$scope.errors.push('Please enter a valid name!')
			valid = false
		}
		if (!$scope.newArtist.imageUrl) {
			$scope.errors.push('Please enter a valid url!')
			valid = false
		}
		if (!$scope.newArtist.bio) {
			$scope.errors.push('Please write a bio!')
			valid = false
		}
		return valid
	}
}

angular
	.module('app')
	.controller('Artists', Artists)