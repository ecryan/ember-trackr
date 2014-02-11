var TicketsRoute = Ember.Route.extend({
    model: function() {
        return this.store.findAll('ticket');
    }

});

export default TicketsRoute;
