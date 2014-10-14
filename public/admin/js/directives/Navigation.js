function Navigation () {
  return {
    restrict: 'E',
    templateUrl: 'templates/navigation.html'
  }
}
angular
  .module('app')
  .directive('navigation', Navigation)