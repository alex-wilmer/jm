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
  .when('/artists/:artistName', {
    templateUrl: 'views/artist.html',
    controller: 'Artist'
  })
  .when('/sets', {
    templateUrl: 'views/sets.html',
    controller: 'Sets'
  })
  .when('/sets/:setName', {
    templateUrl: 'views/set.html',
    controller: 'Set'
  })
  $locationProvider.html5Mode(true)
}
angular
  .module('app')
  .config(config)