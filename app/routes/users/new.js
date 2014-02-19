var UsersNewRoute = Ember.Route.extend({
    actions: {
        save: function() {
            var attrs = this.get('controller').getProperties(
                'firstName',
                'lastName',
                'email'
            );

            var user = this.store.createRecord('user', attrs);

            var promise = user.save();

            this.transitionTo('user', promise);
        },
        cancel: function() {
            this.transitionTo('users');
        }
    }
});

export default UsersNewRoute;
