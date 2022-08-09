angular.module('ultrafiControlPanel.main', [])
  .config(require('./routes'))
  .controller('DashboardCtrl', require('./ctrls/Dashboard'))
  .controller('OverviewCtrl', require('./ctrls/Overview'))
  .controller('ReportsCtrl', require('./ctrls/Reports'))
  .controller('SettingsCtrl', require('./ctrls/Settings'))
  .service('MessageService', require('./servs/Message'));