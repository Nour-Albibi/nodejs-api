module.exports = ['$scope', '$stateParams', 'Upload', 'MessageService', 'AdService',
  function($scope, $stateParams, Upload, MessageService, AdService) {
    let vm = $scope.vm = {};

    // Variables
    vm.file;
    vm.uploadProgress;
    vm.ad;

    // Actions
    vm.submit = submit;

    function submit() {
      AdService.update($stateParams.id, vm.ad)
        .then(function() {
          MessageService.info('تم تحديث الإعلان بنجاح');
        })
        .catch(function(err) {
          MessageService.info('لم يتم تحديث الإعلان\n' + err);
        });
    }

    // Watchers
    $scope.$watch('vm.file', function() {
      if (vm.file) {
        Upload.upload({
            url: '/api/files',
            data: {
              file: vm.file
            }
          })
          .then(function(res) {
            vm.ad.image = res.data.name;
            vm.uploadProgress = 0;
          })
          .catch(function() {})
          .finally(null, function(progress) {
            vm.uploadProgress = parseInt(100.0 *
              progress.loaded / progress.total);
          });
      }
    });

    (function init() {
      vm.update = true;
      AdService.get($stateParams.id)
        .then(function(ad) {
          vm.ad = ad;
          console.log(vm.ad);
        })
        .catch(function(err) {
          MessageService.info(err);
        });
    })();
  }
];