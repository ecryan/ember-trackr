var TicketsNewRoute = Ember.Route.extend({
    model: function() {
        return {};
    },
    afterModel: function() {
        var usersController = this.controllerFor('users');

        var promise = this.get('store').findAll('user').then(function(users) {
            usersController.set('model', users);
        });

        return promise;
    },

    actions: {
        save: function() {
            var attrs = this.get('controller').getProperties(
                'title',
                'status',
                'description',
                'creator',
                'assignee'
            );
            var ticket = this.store.createRecord('ticket', attrs);

            var promise = ticket.save();

            this.transitionTo('ticket', promise);
        },
        cancel: function() {
            this.transitionTo('tickets');
        }
    }
});

export default TicketsNewRoute;
