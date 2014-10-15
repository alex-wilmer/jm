function Tunes ($scope, $http) {

	$scope.loaded = false

	$http.get('/api/tunes').success(function(tunes) {
		if (tunes) {
			for (var i=0;i<tunes.length;i++) {
				tunes.editing = false
			}
			$scope.tunes = tunes
			$scope.loaded = true
		}
	})

	$scope.createTune = function() {
		if (!!$scope.newTune) {
			if (validate()) {
				var tune = {
					name: $scope.newTune.name
				  , by: $scope.newTune.by
				  , embedCode: $scope.newTune.embedCode
				}
				$http.post('/api/tunes', tune)
				$scope.tunes.push(tune)
				$scope.newTune = {}
			}
		}
	}

/*	$scope.updateTuneName = function(index) {
		$http.put()
	}
*/
	$scope.removeTune = function(index) {
		$http.delete('/api/tunes/' + $scope.tunes[index]._id)
		$scope.tunes.splice(index, 1)
	}

	function validate() {
		$scope.errors = []
		var valid = true
		if (!$scope.newTune.name) {
			$scope.errors.push('Please enter a valid name!')
			valid = false
		}
		if (!$scope.newTune.by) {
			$scope.errors.push('Please enter a valid artist!')
			valid = false
		}
		if (!$scope.newTune.embedCode) {
			$scope.errors.push('Please paste the correct embed code!')
			valid = false
		}
		return valid
	}
}

angular
	.module('app')
	.controller('Tunes', Tunes)