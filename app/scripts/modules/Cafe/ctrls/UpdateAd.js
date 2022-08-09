var _ = require('underscore');

module.exports = ['$scope', '$stateParams', 'MessageService', 'CafeService', 'AdService',
  function($scope, $stateParams, MessageService, CafeService, AdService) {
    const vm = $scope.vm = {};

    // Variables
    vm.ad;
    vm.cafe;
    vm.exposureAds;
    vm.facebookAds;
    vm.redirectAds;
    vm.selectedExposures = [];
    vm.selectedFacebooks = [];
    vm.selectedRedirects = [];

    // Actions
    vm.submit = submit;

    function submit() {
      let ads = [].concat(_.pluck(vm.selectedExposures, 'cid'),
        _.pluck(vm.selectedRedirects, 'cid'),
        _.pluck(vm.selectedFacebooks, 'cid'));
      console.log(ads)
      CafeService.updateConfig($stateParams.id, ads)
        .then(function() {
          MessageService.info('تم تحديث الإعلان بنجاح');
        })
        .catch(function(err) {
          MessageService.info('لم يتم تحديث الإعلان\n' + err);
        });
    }

    // Watchers
    $scope.$watch('vm.exposure', function(newVal, oldVal) {
      vm.selectedExposures.push(newVal);
    });
    $scope.$watch('vm.facebook', function(newVal, oldVal) {
      vm.selectedFacebooks.push(newVal);
    });
    $scope.$watch('vm.redirect', function(newVal, oldVal) {
      vm.selectedRedirects.push(newVal);
    });

    (function init() {
      vm.ad = {};
      vm.uploadProgress = 0;
      vm.dropBoxClass = 'drop-box;';
      CafeService.get($stateParams.id)
        .then(function(cafe) {
          vm.cafe = cafe;
          AdService.list()
            .then(function(ads) {
              console.log(ads)
              vm.exposureAds = _.filter(ads, function(ad) {
                return ad.__t == 'ExposureAd';
              });
              vm.facebookAds = _.filter(ads, function(ad) {
                return ad.__t == 'FacebookAd';
              });
              vm.redirectAds = _.filter(ads, function(ad) {
                return ad.__t == 'RedirectAd';
              });
              vm.selectedExposures = _.filter(ads, function(ad) {
                return _.contains(cafe.config.exposureAds, ad.cid);
              });
              vm.selectedFacebooks = _.filter(ads, function(ad) {
                return _.contains(cafe.config.facebookAds, ad.cid);
              });
              vm.selectedRedirects = _.filter(ads, function(ad) {
                return _.contains(cafe.config.redirectAds, ad.cid);
              });
            })
            .catch(function(err) {
              MessageService.info(err);
            });
        })
        .catch(function(err) {
          MessageService.info(err);
        });
    })();
  }
];