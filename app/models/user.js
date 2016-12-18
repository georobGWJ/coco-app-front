import DS from 'ember-data';

export default DS.Model.extend({
  userType: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  phoneNumber: DS.attr(),
  gradeLevel: DS.attr(),
  address: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  zipcode: DS.attr(),
  prefLanguage: DS.attr(),
  password: DS.attr(),
  passwordConfirmation: DS.attr()
});
