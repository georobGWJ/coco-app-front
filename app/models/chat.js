import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr('string'),
  years: DS.attr('number'),
  userId: DS.attr('number')
});
