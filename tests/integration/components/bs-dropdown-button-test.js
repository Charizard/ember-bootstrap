import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-dropdown-button', 'Integration | Component | bs-dropdown-button', {
  integration: true
});

test('dropdown button has correct default markup', function(assert) {
  this.render(hbs`{{#bs-dropdown-button}}Test{{/bs-dropdown-button}}`);

  assert.equal(this.$(':first-child').prop('tagName'), 'BUTTON', 'dropdown button is a button');
  assert.equal(this.$(':first-child').hasClass('dropdown-toggle'), true, 'has dropdown-toggle class');
  assert.equal(this.$(':first-child').attr('data-toggle'), 'dropdown', 'has data-toggle=dropdown attribute');
  assert.equal(this.$(':first-child').attr('role'), 'button', 'has role=button');
});

test('clicking dropdown button sends toggleDropdown action', function(assert) {
  let actionHandler = {
    toggleDropdown() {
      assert.ok(true, 'toggleDropdown action has been called');
    }
  };
  this.render(hbs`{{#bs-dropdown-button targetObject=actionHandler}}Test{{/bs-dropdown-button}}`);
  this.set('actionHandler', actionHandler);

  this.$('button').click();
});
