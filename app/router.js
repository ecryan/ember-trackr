var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
  this.resource('tickets', function() {
      this.resource('ticket', { path: ':ticket_id'});
      this.route('new');
  });
  this.resource('users', function() {
      this.resource('user', { path: ':user_id' });
          this.route('new');
  });
});

export default Router;
