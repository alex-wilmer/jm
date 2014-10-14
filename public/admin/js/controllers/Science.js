function Science ($scope, $http) {
	$http.get('/api/science').success(function(science) {
		$scope.science = science
	})

	$scope.saveBlurb = function() {
		console.log($scope.science)
		$http.post('/api/science', $scope.science)
	}
}

angular
	.module('app')
	.controller('Science', Science)