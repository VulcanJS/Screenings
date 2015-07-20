Template.post_page.helpers({
  postLink: function(){
    return Posts.getLink(this);
  }
});

Template.post_page.onRendered(function () {
  $(".js-video").fitVids();
});