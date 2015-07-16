Router.route("post", {
	path: "post/:_id",
	template: "post",
	data: function(){
		Session.set("postID", this.params._id);
		return Meteor.subscribe("posts");
	}
})