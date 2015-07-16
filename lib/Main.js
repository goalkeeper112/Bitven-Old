Router.route('main', {
	path: "/",
	template: "main",
	data: function(){
		return Meteor.subscribe('posts');
	}
});