Meteor.methods({
	httpAPI: function(url, api){
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