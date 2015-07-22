Template.post_item.helpers({
  summary: function () {
    return Telescope.utils.trimWords(this.htmlBody, 20);
  },
  duration: function () {
    if (this.media && this.media.duration) {
      var duration = moment.duration(this.media.duration, 'seconds');
      return duration.humanize().replace("minutes", "min");
    }
  }
});