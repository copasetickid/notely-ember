import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "span",
  actions: {
    saveNote() {
      this.get('note').save();
    },
    closeNote() {
      this.sendAction('close');
    }
  }
});
