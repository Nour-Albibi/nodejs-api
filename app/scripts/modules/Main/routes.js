module.exports = ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      views: {
        'main': {
          template: require('./views/dashboard.jade'),
          controller: 'DashboardCtrl'
        },
        'nav-menu': {
          template: require('./views/nav-menu.jade')
        }
      }
    })
    .state('app.overview', {
      url: '/overview',
      views: {
        'nav-content': {
          template: require('./views/overview.jade'),
          controller: 'OverviewCtrl'
        }
      }
    })
    .state('app.reports', {
      url: '/reports',
      views: {
        'nav-content': {
          template: require('./views/reports.jade'),
          controller: 'ReportsCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/app/cafe/list')
}];