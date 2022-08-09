module.exports = ['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('app.cafe', {
      url: '/cafe',
      abstract: true,
      views: {
        'nav-content': {
          template: '<ui-view></ui-view>'
        }
      }
    })
    .state('app.cafe.list', {
      url: '/list',
      template: require('./views/list.jade'),
      controller: 'CafeListCtrl'
    })
    .state('app.cafe.create', {
      url: '/create',
      template: require('./views/form.jade'),
      controller: 'CafeCreateCtrl'
    })
    .state('app.cafe.update', {
      url: '/:id/edit',
      template: require('./views/form.jade'),
      controller: 'CafeUpdateCtrl'
    })
    .state('app.cafe.users', {
      url: '/:id/users',
      template: require('./views/addUsers.jade'),
      controller: 'CafeAddUsersCtrl'
    })
    .state('app.cafe.updateAd', {
      url: '/:id/updateAd',
      template: require('./views/updateAd.jade'),
      controller: 'CafeUpdateAdCtrl'
    })
    .state('app.cafe.addMac', {
      url: '/:id/mac',
      template: require('./views/addMac.jade'),
      controller: 'CafeAddMacCtrl'
    });
}];