//import User from 'appkit/models/user';

import { test, moduleForModel } from 'appkit/tests/helpers/module_for';

var App;

moduleForModel('user', 'Integration - Model', {
    setup: function () {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, 'destroy');
    }
});


test('displayName', function() {
    var user = this.subject();
    var  store = this.store();

    Ember.run(function() {
        user = store.createRecord('user', {
            firstName: 'Tom',
            lastName: 'Dale'
        });

    });

    ok(user);
    equal(user.get('displayName'), 'Tom Dale');
});

test('editing user details', function() {
    visit('/users/1')
        .click('button:contains("Edit")')
        .fillIn('input[name="firstName"]', 'Tomhuda')
        .fillIn('input[name="lastName"]', 'KatzDale')
        .fillIn('input[name="email"]', 'tomster@emberjs.com')
        .click('button:contains("Done")')
        .then(function() {
            ok(find('.list-group-item:contains("Tomhuda KatzDale")').length,
            'expected title in master list to update');
            ok(find('.panel-title:contains("Tomhuda KatzDale")').length,
            'expected title in detail view to update');
            ok(find('img[src^="http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a.jpg"]').length,
            'expected gravatar to update');
        });
});


test('creating new user', function() {
    visit('/users')
        .click('a:contains("New User")')
        .fillIn('[name="firstName"]', 'Peter')
        .fillIn('[name="lastName"]', 'Wagenet')
        .fillIn('[name="email"]', 'peter@tilde.io')
        .click('button:contains("Save")')
        .then(function() {
            ok(find('.list-group-item:contains("Peter Wagenet")').length,
            'expected new user to appear in master list');
            ok(find('.panel-title:contains("Peter Wagenet")').length,
            'expected to see user in the detail view');
            ok(find('img[src^="http://www.gravatar.com/avatar/dc9c0271686d50337151a0f862edf3c2.jpg"]').length,
            'expected to see gravatar image in detail view');
        });
});

test('canceling user creation', function() {
    visit('/users/new')
        .click('button:contains("Cancel")')
        .then(function(){
            equal(find('[name=firstName]').length, 0,
                'expected not to find firstName field');
        });
});


//TODO: Remove gravatar related code
//These test can be removed because they are tested in the component
//test('gravatarURL', function() {
//    var user = this.subject();
//    var  store = this.store();
//
//    Ember.run(function(){
//        user = store.createRecord('user', {
//            email: 'tom@example.com'
//        });
//    });
//
//    equal(user.get('gravatarURL'),
//    'http://www.gravatar.com/avatar/e4f7cd8905e896b04425b1d08411e9fb.jpg?s=80');
//});
//
//test('gravatarURL with blank email', function(){
//    var user = this.subject();
//    var  store = this.store();
//
//    Ember.run(function() {
//        user = store.createRecord('user', {
//            email: ''
//        });
//    });
//
//    equal(user.get('gravatarURL'),
//        'http://www.gravatar.com/avatar/00000000000000000000000000000000.jpg?s=80');
//});
//
//test('gravatarURL with undefined email', function() {
//    var user = this.subject();
//
//    var  store = this.store();
//
//    Ember.run(function() {
//        user = store.createRecord('user');
//    });
//
//    equal(user.get('gravatarURL'),
//    'http://www.gravatar.com/avatar/00000000000000000000000000000000.jpg?s=80');
//});







