import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  query(store, type, query) {
    var keys = Object.keys(query);
    for(var index = 0; index < keys.length; index++) {
      var key = keys[index],
          classifiedKey = Ember.String.classify(key);
          query[classifiedKey] = query[key];
          delete query[key];
    }
    return this._super(store, type, query);
  }
});
