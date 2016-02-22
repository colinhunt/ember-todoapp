import DS from 'ember-data';
import Ember from 'ember';

const { observer } = Ember;

export default DS.Model.extend({
  text: DS.attr('string'),
  checked: DS.attr('boolean'),
  autoCheck: observer('checked', function() {
  	this.save();
  })
});
