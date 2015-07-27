Template.post_page.helpers({
  postLink: function () {
    return Posts.getLink(this);
  },
  postPageUrl: function () {
    return Posts.getPageUrl(this, true);
  }
});

Template.post_page.onRendered(function () {
  $(".js-video").fitVids();
  $(".body-overlay").css("background-image", "url("+this.data.post.thumbnailUrl+")");
});

Template.post_page.onDestroyed(function () {
  $(".body-overlay").css("background-image", "");
});