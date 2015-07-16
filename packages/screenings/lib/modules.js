Telescope.modules.remove("hero", "newsletter_banner");

Telescope.modules.remove("top", "posts_views_nav");

Telescope.modules.remove("postComponents", "post_rank");

Telescope.modules.remove("postHeading", "post_domain");

Telescope.modules.remove("postHeading", "post_categories");

Telescope.modules.remove("primaryNav", "search");
Telescope.modules.remove("primaryNav", "pages_menu");

Telescope.modules.remove("secondaryNav", "user_menu");
Telescope.modules.remove("secondaryNav", "submit_button");

Telescope.modules.remove("postMeta", "post_author");
Telescope.modules.remove("postMeta", "post_info");
Telescope.modules.remove("postMeta", "post_comments_link");
Telescope.modules.remove("postMeta", "post_admin");

Telescope.modules.add("postMeta", {
  template: "post_summary",
  order: 10
});

Telescope.modules.add("postMeta", {
  template: "post_categories",
  order: 20
});

Telescope.modules.add("secondaryNav", {
  template: "nav_footer",
  order: 20
});

