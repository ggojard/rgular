/*global rgular*/

(function(rgular) {
  'use strict';

  rgular.app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
      when('/', {
        templateUrl: '/templates/home.ng.html',
        controller: 'HomeController'
      })
      .
      when('/contexts/', {
        templateUrl: '/templates/contexts/index.ng.html',
        controller: 'ContextControllerIndex'
      })
      .
      when('/contexts/:contextId', {
        templateUrl: '/templates/contexts/context.ng.html',
        controller: 'ContextController'
      })
      // when('/buildings/:buildingId', {
      //   templateUrl: '/templates/buildings/building.ng.html',
      //   controller: 'BuildingController'
      // }).
      // when('/floors/:floorId', {
      //   reloadOnSearch: false,
      //   templateUrl: '/templates/floors/show.ng.html'
      // }).
      // when('/people', {
      //   templateUrl: '/templates/people/index.ng.html',
      //   controller: 'PeopleController'
      // }).
      // when('/people/:peopleId', {
      //   templateUrl: '/templates/people/show.ng.html'
      // });

      .
      otherwise({
        redirectTo: '/'
      });
    }
  ]);

}(rgular));
