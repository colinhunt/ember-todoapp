import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('todo-widget', 'Integration | Component | todo widget', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"



  this.set('model', [{text: "abc"}]);
  this.render(hbs`{{todo-widget todos=model}}`);

  assert.ok(this.$().text().includes("abc"));
});
