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

//TODO: Remove related code
//Gravatar related code is now in component and can be removed
//    gravatarURL: function() {
//        var email = this.get('email'),
//            computedMD5;
//
//        if(Ember.isEmpty(email)) {
//            computedMD5 = '00000000000000000000000000000000';
//        } else {
//            computedMD5 = md5(email);
//        }
//
//        return 'http://www.gravatar.com/avatar/%@.jpg?s=80'.fmt(computedMD5);
//
//    }.property('email')
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
        email: 'tom@tomdale.net'
        ticketsCreated: [2],
        ticketsAssigned: [1]
    }
];

export default User;
