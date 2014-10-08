function Tunes ($scope) {
	$scope.hello = 'world'
}

angular
	.module('app')
	.controller('Tunes', Tunes)