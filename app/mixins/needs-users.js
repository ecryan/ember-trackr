var NeedsUsers = Ember.Mixin.create({

    needs: ['users'],
    users: Ember.computed.oneWay('controllers.users'),

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

export default NeedsUsers;
