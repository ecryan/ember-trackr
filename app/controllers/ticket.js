import NeedsUsers from 'appkit/mixins/needs-users';

var TicketController = Ember.ObjectController.extend(NeedsUsers, {
    statuses: ['New', 'Open', 'Closed']
});

export default TicketController;
