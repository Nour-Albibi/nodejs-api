module.exports = ['$scope', 'Upload', 'MessageService', 'AdService',
  function($scope, Upload, MessageService, AdService) {
    let vm = $scope.vm = {};

    // Variables
    vm.file;
    vm.uploadProgress;
    vm.ad;

    // Actions
    vm.submit = submit;

    function submit() {
      AdService.create(vm.ad)
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
      vm.ad = {};
      vm.ad.type = 'exposure';
    })();
  }
];