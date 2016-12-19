import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('number'),
  satId: DS.attr('number'),
  completed: DS.attr('boolean')
});
