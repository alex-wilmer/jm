function Science ($scope, $http) {
	$http.get('/api/science').success(function(science) {
		$scope.science = science
	})
}

angular
	.module('app')
	.controller('Science', Science)