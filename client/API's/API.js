setInterval(function(){
	HTTP.get("https://public-api.wordpress.com/rest/v1.1/sites/bitven.wordpress.com/posts/", function(err, data){
		if(err){
			return console.log(err);
		}else{
			ServerSession.set("postsWP", EJSON.parse(data.content));
			return Session.set("postsWP", EJSON.parse(data.content));
		}
	});

	HTTP.get("http://api.bitcoinvenezuela.com/DolarToday.php?json=yes", function(err, data){
		if(err){
			return console.log(err);
		}else{
			return Session.set("dolart", data);
		}
	});

	HTTP.get('http://api.bitcoinvenezuela.com/', function(err, data){
		if(err){
			return err;
		}else{
			return Session.set('prices', data);
		}
	});

	var prices = Session.get('prices').content;
	prices = EJSON.parse(prices);

	Session.set('pricesDivisas', prices);
}, 5000);

Meteor.call("surbitcoinAPI", "https://api.blinktrade.com/api/v1/VEF/ticker", "surbitcoin", function(err, data){
	if(err){
		return console.log(err);
	}else{
		return Session.set("surbitcoin", EJSON.parse(data));
	}
});

Meteor.call("foxbitAPI", "https://api.blinktrade.com/api/v1/BRL/ticker", "foxbit", function(err, data){
	if(err){
		return console.log(err);
	}else{
		return Session.set("foxbit", EJSON.parse(data));
	}
});

Meteor.call("bitfinexAPI", "https://api.bitfinex.com/v1/pubticker/btcusd", "bitfinex",function(err, data){
	if(err){
		return console.log(err);
	}else{
		return Session.set("bitfinex", EJSON.parse(data));
	}
});

Meteor.call("huobiAPI", "http://api.huobi.com/staticmarket/ticker_btc_json.js", "huobi", function(err, data){
	if(err){
		return console.log(err);
	}else{
		return Session.set("huobi", EJSON.parse(data));
	}
});

Meteor.call("blockchainAPI", "https://blockchain.info/es/stats?format=json", "blockchain", function(err, data){
	if(err){
		return console.log(err);
	}else{
		return Session.set("blockchain", EJSON.parse(data));
	}
});