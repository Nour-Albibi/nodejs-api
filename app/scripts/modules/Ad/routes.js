module.exports = ['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('app.ad', {
      url: '/ad',
      abstract: true,
      views: {
        'nav-content': {
          template: '<ui-view></ui-view>'
        }
      }
    })

    .state('app.ad.list', {
      url: '/list',
      template: require('./views/list.jade'),
      controller: 'AdListCtrl'
    })
    .state('app.ad.create', {
      url: '/create',
      template: require('./views/form.jade'),
      controller: 'AdCreateCtrl'
    })
    .state('app.ad.update', {
      url: '/:id/edit',
      template: require('./views/form.jade'),
      controller: 'AdUpdateCtrl'
    });
}];