import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addTodo(text) {
			this.store.createRecord('todo', {text: text});
		}
	}
});
