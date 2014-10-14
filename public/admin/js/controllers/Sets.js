function Sets ($scope, $http) {

	$scope.loaded = false

	$http.get('/api/sets').success(function(sets) {
		$scope.sets = sets
		$scope.loaded = true
	})

	$scope.createSet = function() {
		if (!!$scope.newSet) {
			if (validate()) {
				var tune = {
					name: $scope.newSet.name
				  , downloadUrl: $scope.newSet.downloadUrl
				  , imageUrl: $scope.newSet.imageUrl
				  , tracklist: $scope.newSet.tracklist
				}
				$http.post('/api/sets', tune)
				$scope.sets.push(tune)
				$scope.newSet = {}
			}
		}
	}

	$scope.removeSet = function(index) {
		$http.delete('/api/sets/' + $scope.sets[index]._id)
		$scope.sets.splice(index, 1)
	}

	function validate() {
		$scope.errors = []
		var valid = true
		if (!$scope.newSet.name) {
			$scope.errors.push('Please enter a valid name!')
			valid = false
		}
		if (!$scope.newSet.downloadUrl) {
			$scope.errors.push('How will people hear the set without a download link??')
			valid = false
		}
		if (!$scope.newSet.imageUrl) {
			$scope.errors.push('Every set needs an image.')
			valid = false
		}
		if (!$scope.newSet.tracklist) {
			$scope.errors.push('Write at least one track..')
			valid = false
		}
		return valid
	}
}

angular
	.module('app')
	.controller('Sets', Sets)