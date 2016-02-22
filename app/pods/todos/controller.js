import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addTodo(text) {
			let todo = this.store.createRecord('todo', {
				text: text,
				checked: false
			});
			todo.save();
		}
	}
});
