function Science ($scope, $http, $sce) {
	$scope.science = {}
	$http.get('/data/science/blurb.json').success(function(science) {
		$scope.science.blurb = $sce.trustAsHtml(science.blurb)
	})

}

angular
	.module('app')
	.controller('Science', Science)