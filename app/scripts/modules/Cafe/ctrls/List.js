module.exports = ['$scope', '$mdDialog', 'MessageService', 'CafeService',
  function($scope, $mdDialog, MessageService, CafeService) {
    const vm = $scope.vm = {};

    // Variables
    vm.cafes;

    // Actions
    vm.delete = deleteCafe;

    function deleteCafe(index, event) {
      const confirm = $mdDialog.confirm()
        .title('هل أنت متأكد من حذف المقهى ' + vm.cafes[index].name + ' ؟')
        .ariaLabel('تأكيد الحذف')
        .targetEvent(event)
        .ok('نعم')
        .cancel('لا');
      $mdDialog.show(confirm).then(function() {
        CafeService.delete(vm.cafes[index]._id)
          .then(function() {
            vm.cafes.splice(index, 1);
          })
          .catch(function(err) {
            MessageService.info(err);
          });
      });
    }

    (function init() {
      CafeService.list()
        .then(function(cafes) {
          vm.cafes = cafes;
        })
        .catch(function(err) {
          MessageService.info(err);
        });
    })();
  }
];