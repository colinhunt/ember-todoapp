import Ember from 'ember';

export default Ember.Component.extend({
	hovering: false,

	mouseEnter() {
		this.set('hovering', true);
	},

	mouseLeave() {
		this.set('hovering', false);
	},

	actions: {
		submit() {
			this.get('todo').save();
			this.set('editing', false);
		},
		edit() {
			this.set('editing', true);
		},
		delete() {
			this.get('todo').destroyRecord();
		}
	}
});
