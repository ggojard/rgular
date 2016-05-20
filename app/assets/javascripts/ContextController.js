// geoP.app.controller('CompanyOrganizationsController', function($scope, $rootScope) {
//   $scope.company = gon.company_organizations;
//   $scope.organizations = $scope.company.organizations;
//   $scope.templates = templates;
//   $rootScope.$emit('stop-loading');
// });


rgular.app.controller('ContextController', function($scope, $http, $routeParams) {
  $http.get('/contexts/' + $routeParams.contextId + '.json').success(function(context) {
    $scope.information = {
      id: context.id,
      location: context.location,
      name: context.name,
      created: context.created_at,
    };
  });
});


rgular.app.controller('ContextControllerIndex', function($scope, $http, $routeParams) {
  $http.get('/contexts.json').success(function(contexts) {
    // console.log('contexts:');
    // console.log(contexts);

    $scope.contexts = contexts // need to provide the content for the angular view
    // $scope.templates = templates;
    // $rootScope.$emit('stop-loading');
  });

});
