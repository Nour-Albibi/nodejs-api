module.exports = ['$resource', '$q', 'API_URL',
  function($resource, $q, API_URL) {
    const AdAPI = $resource(API_URL + '/ads/:id', null, {
      'update': {
        method: 'PUT'
      }
    });
    return {
      list: function() {
        return AdAPI.query().$promise
          .then(function(res) {
            return res;
          })
          .catch(function(res) {
            return $q.reject(res.message);
          });
      },
      get: function(id) {
        return AdAPI.get({
            id: id
          }).$promise
          .then(function(res) {
            return res;
          })
          .catch(function(res) {
            return $q.reject(res.message);
          });
      },
      create: function(ad) {
        return AdAPI.save(ad).$promise
          .then(function(res) {
            return res;
          })
          .catch(function(res) {
            return $q.reject(res.message);
          });
      },
      delete: function(id) {
        return AdAPI.delete({
            id: id
          }).$promise
          .then(function(res) {
            return res;
          })
          .catch(function(res) {
            return $q.reject(res.message);
          });
      },
      update: function(id, ad) {
        return AdAPI.update({
            id: id
          }, ad).$promise
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