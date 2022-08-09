module.exports = ['$scope', '$stateParams', 'MessageService', 'CafeService',
  function($scope, $stateParams, MessageService, CafeService) {
    const vm = $scope.vm = {};

    // Variables
    vm.user;
    vm.randomUser;
    vm.generatedUsers;
    vm.cafe;

    // Actions
    vm.submit = submit;
    vm.exportcsv = exportcsv;

    function submit() {
      if (vm.randomUsers) {
        CafeService.generateUsers($stateParams.id, vm.randomUser)
          .then(function(generatedUsers) {
            vm.generatedUsers = generatedUsers;
            MessageService.info('تم إضافة المستخدمين بنجاح');
          })
          .catch(function(err) {
            MessageService.info('لم يتم إضافة مستخدمين');
          });
      } else {
        CafeService.addUsers($stateParams.id, vm.user)
          .then(function() {
            MessageService.info('تم إضافة المستخدمين بنجاح');
          })
          .catch(function(err) {
            MessageService.info('لم يتم إضافة مستخدمين');
          });
      }
    }

    function exportcsv() {
      const usersCsv = [];
      return usersCsv.concat(_.map(vm.generatedUsers, function(user) {
        return ['username=', user.username, 'password=', user.password];
      }));
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