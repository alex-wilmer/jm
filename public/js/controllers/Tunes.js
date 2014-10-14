function Tunes ($scope, $http, $sce) {

	var activeIndex = 0
	$scope.loaded = false

	$http.get('/api/tunes').success(function(tunes) {
		if (tunes != null) {
			for (var i=0;i<tunes.length;i++) {
				tunes[i].safeEmbedCode = $sce.trustAsHtml(tunes[i].embedCode)
				tunes[i].active = false
			}
			$scope.tunes = tunes
			$scope.tunes[0].active = true
			$scope.tune = $scope.tunes[0]
		} else {
			$scope.tunes = []
		}
		$scope.loaded = true
	})

	$scope.setTune = function(index) {
		$scope.tune = $scope.tunes[index]
		$scope.tunes[activeIndex].active = false
		$scope.tunes[index].active = true
		activeIndex = index
	}
}

angular
	.module('app')
	.controller('Tunes', Tunes)