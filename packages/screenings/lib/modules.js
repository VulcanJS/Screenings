Telescope.modules.remove("hero", "newsletter_banner");

Telescope.modules.remove("postsListTop", "posts_views_nav");

Telescope.modules.remove("postComponents", "post_rank");

Telescope.modules.remove("postHeading", "post_domain");

Telescope.modules.remove("postHeading", "post_categories");

Telescope.modules.add("postMeta", {
  template: "post_summary",
  order: 10
});

Telescope.modules.add("postMeta", {
  template: "post_categories",
  order: 20
});