Template.newsletter_banner.helpers({
  showBanner2: function () {
    // note: should not be reactive
    if(
          Settings.get('showBanner', false) === false
      ||  !Users.can.view(Meteor.user())
      ||  Cookie.get('showBanner') === "no"
      ||  (Meteor.user() && Meteor.user().getSetting('newsletter.showBanner', true) === false)
      ||  (Meteor.user() && Meteor.user().getSetting('newsletter.subscribeToNewsletter', false) === true)
    ){
      return false;
    }else{
      return true;
    }
  }
});