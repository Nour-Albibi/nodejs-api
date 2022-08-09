module.exports = ['$scope', '$state', '$stateParams', 'MessageService', 'CafeService',
  function($scope, $state, $stateParams, MessageService, CafeService) {
    const vm = $scope.vm = {};

    // Variables
    vm.cafe;

    // Actions
    vm.submit = submit;

    function submit() {
      CafeService.update($stateParams.id, vm.cafe)
        .then(function() {
          MessageService.info('تمت تعديل المقهى بنجاح');
        })
        .catch(function() {
          MessageService.info('لم يتم تعديل المقهى');
        });
    }

    (function init() {
      CafeService.get($stateParams.id)
        .then(function(cafe) {
          vm.cafe = cafe;
        })
        .catch(function(err) {
          MessageService.info(err);
        })
    })();

  }
];