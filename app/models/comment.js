import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  userId: DS.attr('number'),
  messageId: DS.attr('number')
});
