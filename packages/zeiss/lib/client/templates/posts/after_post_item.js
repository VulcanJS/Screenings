Template.after_post_item.helpers({
  showNewsletter: function () {
    return this.rank === 0;
  }
});