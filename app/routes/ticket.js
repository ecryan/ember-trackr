import PreloadUsers from 'appkit/mixins/preload-users';

var TicketRoute = Ember.Route.extend(PreloadUsers, {

    actions: {
        edit: function() {
            this.set('controller.isEditing', true);
        },
        done: function() {
            this.set('controller.isEditing', false);

            this.modelFor('ticket').save();
        }
    }
});

export default TicketRoute;
