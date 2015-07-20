Template.post_item.helpers({
  summary: function () {
    return Telescope.utils.trimWords(this.htmlBody, 20);
  }
});