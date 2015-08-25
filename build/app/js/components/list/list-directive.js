'use strict';

(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name rogocode.directive:list
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="rogocode">
       <file name="index.html">
        <list></list>
       </file>
     </example>
   *
   */
  angular.module('rogocode').directive('list', list);

  function list(Api) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'components/list/list-directive.tpl.html',
      replace: false,
      controllerAs: 'list',
      controller: function controller() {
        var vm = this;
        vm.name = 'list';
        Api.log(vm);
      },
      link: function link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
})();
//# sourceMappingURL=../../components/list/list-directive.js.map