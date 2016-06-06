/*global rgular*/

(function(rgular) {
  'use strict';

  rgular.app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
      when('/', {
        templateUrl: '/templates/home.ng.html'
        // ,controller: 'HomeController'
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
      }).
      when('/contexts/:contextId/edit', {
        templateUrl: '/templates/contexts/edit.ng.html',
        controller: 'ContextControllerEdit'
      }).
      otherwise({
        redirectTo: '/'
      });
    }
  ]);

}(rgular));
