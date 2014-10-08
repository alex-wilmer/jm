function config ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/tunes.html',
    controller: 'Tunes'
  })
  $locationProvider.html5Mode(true)
}
angular
  .module('app')
  .config(config)