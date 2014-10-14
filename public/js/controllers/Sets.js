function Sets ($scope, $http) {
	$http.get('/api/sets').success(function(sets) {
		if (sets != null) {
			for (var i=0;i<sets.length;i++) {
				sets[i].url = sets[i].name.replace(/ /g, '_')
			}
			$scope.sets = sets
		} else {
			$scope.sets = []
		}
	})
}

angular
	.module('app')
	.controller('Sets', Sets)