var TicketController = Ember.ObjectController.extend({
    statuses: ['New', 'Open', 'Closed'],
    needs: ['users'],
    users: Ember.computed.oneWay('controllers.users.model'),

    selectedCreator: null,
    selectedAssignee: null,

    selectedCreatorSetModel: function() {
        var user = this.get('users').findBy('id', this.selectedCreator.id);
        this.set('creator', user);
    }.observes('selectedCreator'),

    selectedAssigneeSetModel: function() {
        var user = this.get('users').findBy('id', this.selectedAssignee.id);
        this.set('assignee', user);

    }.observes('selectedAssignee')
});

export default TicketController;
