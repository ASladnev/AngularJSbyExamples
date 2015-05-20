'use strict';

angular.module('app', ['ngRoute', 'ngSanitize', '7minWorkout'])
  .config (['$routeProvider', '$locationProvider', '$sceDelegateProvider', function ($routeProvider, $locationProvider, $sceDelegateProvider) {
    $routeProvider
      .when ('/start', {templateUrl : "partials/start.html"})
      .when ('/workout', {
        templateUrl : "partials/workout.html",
        controller : "WorkoutController"
      })
      .when ('/finish', {templateUrl : "partials/finish.html"} )
      .otherwise ({redirectTo : '/start'});

      //$locationProvider.html5Mode({enabled: true, requireBase : false});
      console.log ("sce delegate provider");
      $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://*.youtube.com/**']);

  }]);

angular.module('7minWorkout', []);