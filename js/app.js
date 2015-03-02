App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.resource('bid');
  this.resource('order');
  this.resource('price');
});

App.BidRoute = Ember.Route.extend ({
	model: function(){
		return order;
	},
	renderTemplate: function() {
    this.render({ outlet: 'bid' });
  }
});

App.OrderRoute = Ember.Route.extend({
	model: function(){
		return orders;
	},

	renderTemplate: function() {
    this.render({ outlet: 'order' });
    this.render({ outlet: 'price' });
  }
});

App.PriceRoute = Ember.Route.extend({
	model: function(){
		return orders;
	},

	renderTemplate: function() {
    this.render({ outlet: 'price' });
  }
});

var orders = [
{	company : "Microsoft Corporation (MSFT)",
	type: "buy",
	bv: 0,
	bp: 0,
	sv: null,
	sb: null },

{	company : "Microsoft Corporation (MSFT)",
	type: "buy",
	bv: 0,
	bp: 0,
	sv: null,
	sb: null }

];

var order = {	
	company : "Microsoft Corporation (MSFT)",
	type: "Buy",
	volume: 0,
	price: 0 
};