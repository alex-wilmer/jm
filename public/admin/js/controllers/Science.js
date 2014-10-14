function Science ($scope, $http) {

	$scope.loaded = false

	$scope.science = {}
	$http.get('/data/science/blurb.json').success(function(science) {
		$scope.science.blurb = science.blurb
		$scope.loaded = true
	})

	$scope.saveBlurb = function() {
		$http.post('/api/science', $scope.science)
	}
}

angular
	.module('app')
	.controller('Science', Science)