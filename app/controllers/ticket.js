var TicketController = Ember.ObjectController.extend({
    statuses: ['New', 'Open', 'Closed'],
    needs: ['users'],
    users: Ember.computed.oneWay('controllers.users'),
    selectedPerson: null,

    programmers: [
        {firstName: "Yehuda", id: 1},
        {firstName: "Tom",    id: 2}
    ],
    currentProgrammer: {
        id: 1
    },

    selected: 'Yehuda',

    creatorId: function(key, value) {
        if (arguments.length === 1) {
            return this.get('creator.id');
        } else {
            var user = this.get('users').findBy('id', value);

            return this.set('creator', user);
        }
    }.property('creator.id'),

    assigneeId: function(key, value) {
        if (arguments.length === 1) {
            return this.get('assignee.id');
        } else {
            var user = this.get('users').findBy('id', value);
            return this.set('assignee', user);
        }
    }.property('assignee.id')
});

export default TicketController;
