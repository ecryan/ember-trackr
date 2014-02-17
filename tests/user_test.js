//import User from 'appkit/models/user';

import { test, moduleForModel } from 'appkit/tests/helpers/module_for';

var App,
    store,
    user;

moduleForModel('user', 'Integration - Model', {
    setup: function () {
        App = startApp();
        user = this.subject();
        store = this.store();
    },
    teardown: function() {
        Ember.run(App, 'destroy');
        user = null;
    }
});


test('displayName', function() {

    Ember.run(function() {
        user = store.createRecord('user', {
            firstName: 'Tom',
            lastName: 'Dale'
        });

    });

    ok(user);
    equal(user.get('displayName'), 'Tom Dale');
});


test('gravatarURL', function() {

    Ember.run(function(){
        user = store.createRecord('user', {
            email: 'tom@example.com'
        });
    });

    equal(user.get('gravatarURL'),
    'http://www.gravatar.com/avatar/e4f7cd8905e896b04425b1d08411e9fb.jpg?s=80');
});

