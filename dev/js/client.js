'use strict';

require('angular/angular');
require('angular-route');
require('angular-sanitize');

var plantApp = angular.module('plantApp', ['ngRoute', 'ngSanitize']);

//controllers
require('./controllers/main_controller')(plantApp);
require('./controllers/nav_controller')(plantApp);

//directives
require('./directives/nav_directive')(plantApp);


//routes
plantApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/landing.html',
      controller: 'MainController'
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    .otherwise({redirectTo:'/'});
}]);
