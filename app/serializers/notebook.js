import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalize(typeClass, hash, prop) {
    hash.title = hash.Title;
    delete hash.Title;
    hash.user = hash.User;
    delete hash.User;
    return this._super(typeClass, hash, prop);
  },
  serialize(snapshot, options) {
    var json = {
      Title: snapshot.attr('title');
      User: snapshot.belongsTo('user').id
    };
    return json;
  }
});
