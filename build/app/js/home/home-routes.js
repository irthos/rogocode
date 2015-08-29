'use strict';

(function () {
  'use strict';

  angular.module('home').config(config);

  function config($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home/home.tpl.html',
      controller: 'HomeCtrl',
      controllerAs: 'home'
    });
  }
})();
//# sourceMappingURL=../home/home-routes.js.map