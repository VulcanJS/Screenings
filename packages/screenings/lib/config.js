Telescope.config.addCustomPrefix("scr_");

Telescope.modules.remove("primaryNav", "search");
Telescope.modules.remove("primaryNav", "views_menu");
Telescope.modules.remove("primaryNav", "categories_menu");


Telescope.modules.remove("footer", "footer_social");

// Telescope.modules.add("postsListTop", {
//   template: "sidebar",
//   order: 1,
//   only: ["postsDefault"]
// });

Telescope.modules.add("sidebar", [
  {
    template: "search",
    order: 1 
  },
  {
    template: "views_menu",
    order: 2
  },
  {
    template: "categories_menu",
    order: 3
  },
  {
    template: "footer_social",
    order: 4
  },
  {
    template: "placeholder",
    order: 5
  }
]);

Telescope.colorElements.add(".sidebar .menu-item .menu-item-label-wrapper", "accentColor", "border-color");
Telescope.colorElements.add(".sidebar .menu-item svg.icon", "accentColor", "stroke");

Telescope.colorElements.add(".sidebar .menu-item:hover .menu-item-label-wrapper", "accentColor", "background-color");
Telescope.colorElements.add(".sidebar .menu-item:hover .menu-item-label-text", "accentContrastColor", "color");
Telescope.colorElements.add(".sidebar .menu-item:hover svg.icon", "accentContrastColor", "stroke");



