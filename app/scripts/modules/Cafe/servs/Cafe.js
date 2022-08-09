module.exports = ['$resource', '$q', 'API_URL',
  function($resource, $q, API_URL) {
    const CafeAPI = $resource(API_URL + '/cafe/:id', null, {
      'update': {
        method: 'PUT'
      },
      'addUsers': {
        method: 'POST',
        url: API_URL + '/cafe/:id/users'
      },
      'generateUsers': {
        method: 'POST',
        url: API_URL + '/cafe/:id/users/generate'
      },
      'updateAd': {
        method: 'PUT',
        url: API_URL + '/cafe/:id/ad'
      },
      'updateConfig': {
        method: 'PUT',
        url: API_URL + '/cafe/:id/config'
      },
      'addMac': {
        method: 'POST',
        url: API_URL + '/cafe/:id/mac'
      }
    });
    return {
      list: function() {
        return CafeAPI.query().$promise
          .then(function(res) {
            return res;
          })
          .catch(function(res) {
            return $q.reject(res.message);
          });
      },
      get: function(id) {
        return CafeAPI.get({
            id: id
          }).$promise
          .then(function(res) {
            return res;
          })
          .catch(function(res) {
            return $q.reject(res.message);
          });
      },
      create: function(cafe) {
        return CafeAPI.save(cafe).$promise
          .then(function(res) {
            return res;
          })
          .catch(function(res) {
            return $q.reject(res.message);
          });
      },
      delete: function(id) {
        return CafeAPI.delete({
            id: id
          }).$promise
          .then(function(res) {
            return res;
          })
          .catch(function(res) {
            return $q.reject(res.message);
          });
      },
      update: function(id, cafe) {
        return CafeAPI.update({
            id: id
          }, cafe).$promise
          .then(function(res) {
            return res;
          })
          .catch(function(res) {
            return $q.reject(res.message);
          });
      },
      addUsers: function(id, users) {
        return CafeAPI.addUsers({
            id: id
          }, users).$promise
          .then(function(res) {
            return res;
          })
          .catch(function(res) {
            return $q.reject(res.message);
          });
      },
      generateUsers: function(id, userTemplate) {
        return CafeAPI.generateUsers({
            id: id
          }, userTemplate).$promise
          .then(function(res) {
            return res.users;
          })
          .catch(function(res) {
            return $q.reject(res.message);
          });
      },
      updateAd: function(id, ad) {
        return CafeAPI.updateAd({
            id: id
          }, ad).$promise
          .then(function(res) {
            return res;
          })
          .catch(function(res) {
            return $q.reject(res.message);
          });
      },
      updateConfig: function(id, config) {
        return CafeAPI.updateConfig({
            id: id
          }, {
            ads: config
          }).$promise
          .then(function(res) {
            return res;
          })
          .catch(function(res) {
            return $q.reject(res.message);
          });
      },
      addMac: function(id, mac) {
        return CafeAPI.addMac({
            id: id
          }, {
            mac: mac
          }).$promise
          .then(function(res) {
            return res;
          })
          .catch(function(res) {
            return $q.reject(res.message);
          });
      }
    }
  }
];