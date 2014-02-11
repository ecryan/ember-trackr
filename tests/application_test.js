var App;

module('Application', {
    setup: function(){
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, 'destroy');
    }
});

test('footer', function() {
    expect(1);

    visit('/').then(function() {
        var year = new Date().getFullYear(),
            expect = 'Copyright ' + year + ' EmberTrackr Inc.',
            actual = $.trim(find('footer').text());
        equal(actual, expect);
    });
});