import PreloadUsers from 'appkit/mixins/preload-users';

var TicketsNewRoute = Ember.Route.extend(PreloadUsers, {
    model: function() {
        return {};
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
