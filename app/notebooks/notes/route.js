import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('note', { notebook: params.notebook_id });
  },
  actions: {
    addNote() {
      this.store.findRecord('notebook', this.paramsFor('notebook.notes').notebook_id)
        .then((notebook) => {
          console.log(notebook);
          let note = this.store.createRecord('note', {
                title: this.controller.get('title') ,
                notebook: notebook
          });
          console.log(note);
          note.save().then(() => {
            console.log('Save successful');
            this.controller.set('title', null);
            this.refresh();
          }, function() {
            console.log('Save failed');
          });
        });
    }
  }
});
