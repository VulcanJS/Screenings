Template.post_summary.helpers({
  summary: function () {
    return Telescope.utils.trimWords(this.htmlBody, 20);
  }
});