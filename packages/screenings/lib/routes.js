Posts.controllers.short = Posts.controllers.list.extend({
  view: 'short'
});

Router.route('/short/:limit?', {
  name: 'posts_short',
  controller: Posts.controllers.short
});