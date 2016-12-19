import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  // this.route('users', function() {
  //   this.route('user', { path: '/:user_id' });
  // });
  this.route('Sat', function() {});

  this.route('users', function() {
    this.route('show', { path: '/:user_id' });
  });
  this.route('requirements', function() {});
  this.route('sats', function() {});
});

export default Router;
