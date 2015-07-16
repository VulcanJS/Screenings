Template.post_thumbnail.helpers({
  getDuration: function () {
    if (this.media && this.media.duration) {
      var duration = moment.duration(this.media.duration, 'seconds');
      return duration.humanize();
    }
  }
});