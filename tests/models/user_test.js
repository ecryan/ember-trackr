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







