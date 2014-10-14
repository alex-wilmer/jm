function config ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/admin', {
    templateUrl: 'admin/views/tunes.html',
    controller: 'Tunes'
  })
  .when('/admin/science', {
  	templateUrl: 'admin/views/science.html',
  	controller: 'Science'
  })
  .when('/admin/artists', {
  	templateUrl: 'admin/views/artists.html',
  	controller: 'Artists'
  })
  .when('/admin/sets', {
    templateUrl: 'admin/views/sets.html',
    controller: 'Sets'
  })

  $locationProvider.html5Mode(true)
}
angular
  .module('app')
  .config(config)