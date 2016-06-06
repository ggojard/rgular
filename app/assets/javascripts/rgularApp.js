
var app = angular.module('rgular', ['ngRoute']);
// app.run(function() { // instance-injector
//
// });

var rgular = {};
rgular.app = app;

app.config(['$httpProvider',
  function(provider) {
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);