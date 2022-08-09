module.exports = ['$scope', '$mdDialog', 'MessageService', 'AdService',
  function($scope, $mdDialog, MessageService, AdService) {
    const vm = $scope.vm = {};


    // Variables
    vm.ads;
    vm.pending;

    // Actions
    vm.delete = deleteAd;

    function deleteAd(index, event) {
      const confirm = $mdDialog.confirm()
        .title('هل أنت متأكد من حذف الإعلان ' + vm.ads[index].name + ' ؟')
        .ariaLabel('تأكيد الحذف')
        .targetEvent(event)
        .ok('نعم')
        .cancel('لا');
      $mdDialog.show(confirm).then(function() {
        AdService.delete(vm.ads[index]._id)
          .then(function() {
            vm.ads.splice(index, 1);
          })
          .catch(function(err) {
            MessageService.info(err);
          });
      });
    }

    (function init() {
      vm.pending = true;
      AdService.list()
        .then(function(ads) {
          vm.ads = ads;
        })
        .catch(function(err) {
          MessageService.info(err);
        })
        .finally(function() {
          vm.pending = false;
        });
    })();
  }
];