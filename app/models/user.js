var User = DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),
    ticketsCreated: DS.hasMany('ticket', {
        async: true,
        inverse: 'creator'
    }),
    ticketsAssigned: DS.hasMany('ticket', {
        async: true,
        inverse: 'assignee'
    }),

    displayName: function() {
        return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')
});


User.FIXTURES = [
    {
        id: 1,
        firstName: 'Yehuda',
        lastName: 'Katz',
        email: 'wycats@gmail.com',
        ticketsCreated: [1, 3],
        ticketsAssigned: [2]
    },
    {
        id: 2,
        firstName: 'Tom',
        lastName: 'Dale',
        email: 'tom@tomdale.net',
        ticketsCreated: [2],
        ticketsAssigned: [1]
    },
    {
        id: 3,
        firstName: 'Elrick',
        lastName: 'VM',
        email: 'ryan.elr.htc@gmail.com'
    }
];

export default User;
