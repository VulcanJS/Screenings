Telescope.menuItems.removeAll("viewsMenu");
Telescope.menuItems.add("viewsMenu", [
  {
    route: 'posts_default',
    label: 'Popular',
    description: 'The most popular videos right now'
  },  
  {
    route: 'posts_best',
    label: 'Best',
    description: 'The all-time higest-rated videos'
  },
  {
    route: 'posts_short',
    label: 'Short',
    description: 'Videos under three minutes'
  }
]);