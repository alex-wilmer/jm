function Tunes ($scope, $http, $sce) {

	$http.get('/api/tunes').success(function(tunes) {
		if (tunes != null) {
			for (var i=0;i<tunes.length;i++) {
				tunes[i].safeEmbedCode = $sce.trustAsHtml(tunes[i].embedCode)
			}
			$scope.tunes = tunes
			$scope.tune = $scope.tunes[0]
		} else {
			$scope.tunes = []
		}
	})

	$scope.setTune = function(index) {
		$scope.tune = $scope.tunes[index]
	}
}

angular
	.module('app')
	.controller('Tunes', Tunes)