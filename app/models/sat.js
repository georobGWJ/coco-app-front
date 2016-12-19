import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  address: DS.attr('string'),
  locationName: DS.attr('string')
});
