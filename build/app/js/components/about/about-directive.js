'use strict';

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name rogocode.directive:about
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="rogocode">
       <file name="index.html">
        <about></about>
       </file>
     </example>
   *
   */
  angular.module('rogocode').directive('about', about);

  function about(Api) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'components/about/about-directive.tpl.html',
      replace: false,
      controllerAs: 'about',
      controller: function controller() {
        var vm = this;
        vm.name = 'about';
        Api.log(vm);
      },
      link: function link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
})();
//# sourceMappingURL=../../components/about/about-directive.js.map