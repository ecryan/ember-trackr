var MailToComponent = Ember.Component.extend({
    tagName: 'a',

    attributeBindings: ['href'],

    href: function() {
        return 'mailto:' + this.get('email');
    }.property('email')

});

export default MailToComponent;
