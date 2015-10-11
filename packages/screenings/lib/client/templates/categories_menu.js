Template.categories_menu.helpers({
  customMenuItems: function () {
    // note: is there a better way to call another helper from a helper?
    var menuItems = Template.categories_menu.__helpers[" menuItems"]();
    menuItems[0].template = "categories_menu_item";
    menuItems[0].data = {slug: "all_categories"};
    return menuItems;
  }
});