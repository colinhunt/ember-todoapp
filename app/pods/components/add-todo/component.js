import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      this.get('onAdd')(this.get('text'));
      this.set('text', "");
      this.$('input').focus();
    }
  }
});