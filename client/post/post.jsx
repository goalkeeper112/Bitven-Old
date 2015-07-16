Template.post.rendered = function(){
	$("#titlePost").html(Posts.findOne({_id: Session.get("postID")}).post.title);
	$("#content").html(Posts.findOne({_id: Session.get("postID")}).post.content);
	$("#url").html(Posts.findOne({_id: Session.get("postID")}).post.url);
};

Template.post.helpers({
	post: function(){
		return Posts.find({_id: Session.get("postID")});
	}
});
