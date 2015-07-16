Meteor.methods({
	surbitcoinAPI: function(url, api){
		this.unblock();

		HTTP.get(url, function(err, data){
			if(err){
				console.log(err);
				return err;
			}else{
				return ServerSession.set(api, data.content);
			}
		});
		return ServerSession.get(api);

	},

	foxbitAPI: function(url, api){
		this.unblock();

		HTTP.get(url, function(err, data){
			if(err){
				console.log(err);
				return err;
			}else{
				return ServerSession.set(api, data.content);
			}
		});
		return ServerSession.get(api);

	},

	bitfinexAPI: function(url, api){
		this.unblock();

		HTTP.get(url, function(err, data){
			if(err){
				console.log(err);
				return err;
			}else{
				return ServerSession.set(api, data.content);
			}
		});
		return ServerSession.get(api);

	},

	huobiAPI: function(url, api){
		this.unblock();

		HTTP.get(url, function(err, data){
			if(err){
				console.log(err);
				return err;
			}else{
				return ServerSession.set(api, data.content);
			}
		});
		return ServerSession.get(api);

	},

	blockchainAPI: function(url, api){
		this.unblock();

		HTTP.get(url, function(err, data){
			if(err){
				console.log(err);
				return err;
			}else{
				return ServerSession.set(api, data.content);
			}
		});
		return ServerSession.get(api);

	}
});