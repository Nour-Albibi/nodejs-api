angular.module('ultrafiControlPanel.ad', [])
  .config(require('./routes'))
  .controller('AdListCtrl', require('./ctrls/List'))
  .controller('AdCreateCtrl', require('./ctrls/Create'))
  .controller('AdUpdateCtrl', require('./ctrls/Update'))
  .service('AdService', require('./servs/Ad'));