import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('todo');
  },
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
