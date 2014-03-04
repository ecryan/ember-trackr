import NeedsUsers from 'appkit/mixins/needs-users';

var TicketsNewController = Ember.ObjectController.extend(NeedsUsers, {
    statuses: ['New', 'Open', 'Closed']

});

export default TicketsNewController;
