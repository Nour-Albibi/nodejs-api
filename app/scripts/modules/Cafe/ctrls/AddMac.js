module.exports = ['$scope', '$state', '$stateParams', 'MessageService', 'CafeService',
  function($scope, $state, $stateParams, MessageService, CafeService) {
    const vm = $scope.vm = {};

    // Variables
    vm.mac;
    vm.cafe;

    // Actions
    vm.submit = submit;

    function submit() {
      CafeService.addMac($stateParams.id, vm.mac)
        .then(function() {
          MessageService.info('تمت إضافة العنوان بنجاح');
        })
        .catch(function() {
          MessageService.info('لم تتم عملية الإضافة');
        });
    }

    (function init() {
      CafeService.get($stateParams.id)
        .then(function(cafe) {
          vm.cafe = cafe;
        })
        .catch(function(err) {
          MessageService.info(err);
        });
    })();

  }
];