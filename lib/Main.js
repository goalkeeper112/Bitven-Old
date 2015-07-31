Router.route('main', {
	path: "/",
	template: "main",
	waitOn: function(){
		Session.get("pricesDivisas");
		Session.get("foxbit");
		Session.get("surbitcoin");
		Session.get("blockchain");
		Session.get("VEFrate");
		Session.get("USDrate");
		Session.get("ARSrate");
		Session.get("bitfinex");
		Session.get("huobi");
		Session.get("argenBTC");
		Session.get("dolart");
		Session.get("postsWP");
		Session.get("satoshitango");
		Session.get("btcE");
		return Meteor.subscribe('posts');
	}
});