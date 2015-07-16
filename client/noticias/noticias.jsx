Template.noticias.rendered = function () {
	
};

Template.noticias.helpers({
	postWP: function(){
        return Posts.find({});
    }
});