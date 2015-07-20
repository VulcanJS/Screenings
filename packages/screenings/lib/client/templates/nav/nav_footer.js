Template.nav_footer.onCreated(function () {
  var template = this;
  template.searchOpen = new ReactiveVar(false);
});

Template.nav_footer.helpers({
  menuItems: function () {
    return Telescope.menuItems.get("userMenu");
  },
  searchOpen: function () {
    return Template.instance().searchOpen.get();
  }
});

Template.nav_footer.events({
  "click .js-toggle-search": function (event, template) {
    event.preventDefault();
    template.$(".nav-footer-search").toggleClass("search-closed");
    // var searchOpen = template.searchOpen.get();
    // if (searchOpen) {
    //   template.searchOpen.set(false);
    // } else {
    //   template.searchOpen.set(true);
    // }
  }
});