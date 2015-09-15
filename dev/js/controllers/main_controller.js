'use strict';

module.exports = function(app) {
  app.controller('MainController', ['$scope', '$location', function($scope, $location) {

    $scope.landingFadeIn = function() {
      var tl = new TimelineLite();
      tl.from('#welcome-tile', 2, {opacity: 0})
      .from('button', 1, {opacity: 0, delay: .5});
    };

    $scope.homeAnimations = function() {
      var tl = new TimelineLite();
      tl.from('.mega-header', 1, {x: -800})
      .from('.head p', 1, {x: 1000})
      .from('.head button', 2, {opacity: 0, delay: .5});
    }

    $scope.redirect = function(destination) {
      $location.path('/' + destination);
    }

  }]);
};
