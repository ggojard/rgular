rgular.app.controller('ContextController', function($scope, $http) {

  // $scope.a = 'Salut';

  $http.get('/contexts/4.json').success(function(context) {
  // $http.get('/contexts/' + $routeParams.contextId + '.json').success(function(context) {
    $scope.information = {
      id: context.id,
      location: context.location,
      name: context.name,
      created: context.created_at,
    };
  });

});
