import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('signup');

  this.route('users', function() {
    this.route('show', { path: '/:user_id' });

    this.route('events', { path: '/:user_id' }, function() {
      this.route('new');
      this.route('show');
    });

    this.route('requirements', { path: '/:user_id' }, function() {
      this.route('show');
    });
  });

  this.route('requirements', function() {});
  this.route('sats', function() {});
  this.route('welcome', function() {});
  this.route('messages', function() {
    this.route('comments', function() {
      this.route('new');
    });
    this.route('show', { path: '/:user_id' });
  });

  this.route('users', function() {
    this.route('requirements', function() {
      this.route('show');
    });
  });
  this.route('chats', function() {});
  this.route('applications', function() {});
});

export default Router;
