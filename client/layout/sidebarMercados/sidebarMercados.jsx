Template.sidebarMercados.helpers({
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
	}
});