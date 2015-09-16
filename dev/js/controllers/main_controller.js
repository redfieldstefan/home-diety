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
      tl.from('.mega-header', 2, {opacity: 0}, 'one')
      .from('.head p', 2, {opacity: 0, delay: .25}, 'one')
      .from('.head button', 1, {opacity: 0});
    }

    $scope.redirect = function(destination) {
      $location.path('/' + destination);
    }

  }]);
};
