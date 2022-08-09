angular.module('ultrafiControlPanel.cafe', [])
  .config(require('./routes'))
  .controller('CafeListCtrl', require('./ctrls/List'))
  .controller('CafeCreateCtrl', require('./ctrls/Create'))
  .controller('CafeUpdateCtrl', require('./ctrls/Update'))
  .controller('CafeAddUsersCtrl', require('./ctrls/AddUsers'))
  .controller('CafeUpdateAdCtrl', require('./ctrls/UpdateAd'))
  .controller('CafeAddMacCtrl', require('./ctrls/AddMac'))
  .service('CafeService', require('./servs/Cafe'));