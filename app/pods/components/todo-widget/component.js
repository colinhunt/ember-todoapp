import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		addTodo(text) {
			this.get('addTodo')(text);
		},
		checked(todo) {
			todo.checkMe();
		}
	}
});
