module.exports = ['$scope', 'MessageService', 'CafeService',
  function($scope, MessageService, CafeService) {
    const vm = $scope.vm = {};

    // Variables
    vm.cafe;

    // Actions
    vm.submit = submit;

    function submit() {
      CafeService.create(vm.cafe)
        .then(function() {
          MessageService.info('تمت إضافة المقهى بنجاح');
        })
        .catch(function() {
          MessageService.info('لم يتم إضافة المقهى');
        });
    }

    (function init() {
      vm.cafe = {};
    })();

  }
];