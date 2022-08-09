module.exports = ['$mdToast', function($mdToast) {
  const position = 'top left';
  return {
    info: function(message, delay) {
      $mdToast.show(
        $mdToast.simple()
        .textContent(message)
        .position(position)
        .hideDelay(delay || 3000)
      );
    }
  }
}];