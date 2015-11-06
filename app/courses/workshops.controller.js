(function() {
    'use strict';

    angular
        .module('TmApp')
        .controller('WorkshopsController', WorkshopsController);

    WorkshopsController.$inject = ['$stateParams'];

    function WorkshopsController($stateParams) {
      var vm = this;
      vm.courseId = $stateParams.courseId;
    }
})();
