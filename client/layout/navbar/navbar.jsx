Template.navbar.events({
	'click #mercados': function () {
		return $('#sidebar').sidebar('toggle');
	}
});

var valor;

Template.navbar.helpers({
	VEFrate: function(){
		var dolartoday = EJSON.parse(Session.get("dolart").content);
		var referencia = dolartoday.USD.dolartoday * parseFloat(Session.get("bitfinex").ask);
		valor = Session.get("surbitcoin").sell + Session.get("pricesDivisas").LocalBitcoins_coupons.XVE + referencia;
		Session.set("VEFrate", valor / 3);
		return Session.get("VEFrate").toFixed(2);
	},

	USDrate:  function(){
		valor = parseFloat(Session.get("bitfinex").ask) + parseFloat(Session.get("pricesDivisas").LocalBitcoins_coupons.USD) + Session.get("btcE").btc_usd.avg;
		Session.set("USDrate", valor / 3);
		return Session.get("USDrate").toFixed(2);
	},

	ARSrate: function(){
		valor = Session.get("pricesDivisas").BTC.ARS + parseFloat(Session.get("satoshitango").compra.arsbtcround) + parseFloat(Session.get("argenBTC").btc_venta);
		Session.set("ARSrate", valor / 3);
		return Session.get("ARSrate").toFixed(2);
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