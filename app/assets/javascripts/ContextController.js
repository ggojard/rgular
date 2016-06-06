// geoP.app.controller('CompanyOrganizationsController', function($scope, $rootScope) {
//   $scope.company = gon.company_organizations;
//   $scope.organizations = $scope.company.organizations;
//   $scope.templates = templates;
//   $rootScope.$emit('stop-loading');
// });


rgular.app.controller('ContextController', function($scope, $http, $routeParams) {
  $http.get('/contexts/' + $routeParams.contextId + '.json').success(function(context) {
    $scope.context = context;
  });
});


rgular.app.controller('ContextControllerIndex', function($scope, $http, $routeParams) {
  $http.get('/contexts.json').success(function(contexts) {
    // console.log('contexts:' + contexts);

    $scope.contexts = contexts // need to provide the content for the angular view
    // $scope.templates = templates;
    // $rootScope.$emit('stop-loading');
  });
});

rgular.app.controller('ContextControllerEdit', function($scope, $http, $routeParams, $location) {
  $scope.update = function() {
    $http.put('/contexts/' + $routeParams.contextId + '.json', $scope.context).success(function(res) {
      console.debug(res);
      $location.path('/contexts/');
    });

  }
  $http.get('/contexts/' + $routeParams.contextId + '.json').success(function(context) {
    $scope.context = context;
  });
});


