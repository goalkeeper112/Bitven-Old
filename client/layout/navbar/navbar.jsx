Template.navbar.events({
	'click #mercados': function () {
		return $('#sidebar').sidebar('toggle');
	}
});

Template.navbar.helpers({
	surbitcoin: function(){
		return Session.get("surbitcoin");
	},

	bitfinex:  function(){
		return Session.get("bitfinex");
	},

	foxbit: function(){
		return Session.get("foxbit");
	},

	huobi: function(){
		return Session.get("huobi");
	},

	blockchain: function(){
		return Session.get("blockchain");
	}
});