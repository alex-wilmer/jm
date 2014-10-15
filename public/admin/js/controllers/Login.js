function Login ($scope, $http) {
	$scope.login = function() {
		$http.post('/api/login', $scope.auth).success(function() {
			window.location.href = '/admin'
		})
	}
}

angular
	.module('app')
	.controller('Login', Login)