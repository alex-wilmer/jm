function config ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/tunes.html',
    controller: 'Tunes'
  })
  .when('/science', {
  	templateUrl: 'views/science.html',
  	controller: 'Science'
  })
  .when('/artists', {
  	templateUrl: 'views/artists.html',
  	controller: 'Artists'
  })
  $locationProvider.html5Mode(true)
}
angular
  .module('app')
  .config(config)