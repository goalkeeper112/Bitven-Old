HTTP.get("https://public-api.wordpress.com/rest/v1.1/sites/bitven.wordpress.com/posts/", function(err, data){
		if(err){
			return console.log(err);
		}else{
			return ServerSession.set("postsWP", EJSON.parse(data.content));
		}
	});

Meteor.startup(function(){
	if(ServerSession.get("postsWP")){
		if(Posts.find().count() === 0 && ServerSession.get("postsWP").found > 0){
			ServerSession.get("postsWP").posts.forEach(function(post){
				Posts.insert({post: post}, function(err){
					if(err){
						return err;
					}else{
						return true;
					}
				});
			});
		}

		if(ServerSession.get("postsWP").found > Posts.find().count()){
			ServerSession.get("postsWP").posts.forEach(function (post) {
				if(Posts.findOne({post: post})){
					return false;
				}else{
					return Posts.insert({post: post}, function(err, data){
						if(err){
							return err;
						}else{
							return true;
						}
					});
				}
			});
		}
	}
});