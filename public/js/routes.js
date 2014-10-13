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
  .when('/admin/tunes', {
    templateUrl: 'views/admin/tunes.html',
    controller: 'AdminTunes'
  })
  .when('/admin/science', {
    templateUrl: 'views/admin/science.html',
    controller: 'AdminScience'
  })
  .when('/admin/artists', {
    templateUrl: 'views/admin/artists.html',
    controller: 'AdminArtists'
  })
  $locationProvider.html5Mode(true)
}
angular
  .module('app')
  .config(config)