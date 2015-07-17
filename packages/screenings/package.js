Package.describe({
  name: "screenings",
  summary: "Screenings theme",
  version: "0.0.1",
  git: "https://github.com/TelescopeJS/screenings"
});


Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'telescope:core@0.21.1'
  ]);

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  api.addFiles([
    'lib/modules.js',
    'lib/icons.js',
    'lib/callbacks.js',
    'lib/custom_fields.js',
    'lib/views.js',
    'lib/routes.js',
    'lib/menus.js',
    'lib/colors.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/stylesheets/screenings.scss',
    'lib/client/js/jquery.fitvids.js',
    'lib/client/templates/custom_newsletter_banner.html',
    'lib/client/templates/custom_post_page.html',
    'lib/client/templates/custom_post_page.js',
    'lib/client/templates/custom_after_post_item.html',
    'lib/client/templates/custom_after_post_item.js',
    'lib/client/templates/custom_post_submit.html',
    'lib/client/templates/custom_post_thumbnail.html',
    'lib/client/templates/custom_post_thumbnail.js',
    'lib/client/templates/custom_post_title.html',
    'lib/client/templates/custom_submit_button.html',
    'lib/client/templates/custom_comment_submit.html',
    'lib/client/templates/custom_comment_submit.js',
    'lib/client/templates/custom_categories_menu.html',
    'lib/client/templates/custom_posts_views_nav.html',
    'lib/client/templates/custom_notifications_menu.html',
    'lib/client/templates/custom_post_vote.html',
    'lib/client/templates/custom_post_vote.js',
    'lib/client/templates/post_footer.html',
    'lib/client/templates/post_edit_icon.html',
    'lib/client/templates/post_summary.html',
    'lib/client/templates/post_summary.js',
    'lib/client/templates/nav_footer.html',
    'lib/client/templates/nav_footer.js',
    'lib/client/templates/custom_menu_item.html',
    'lib/client/templates/user_menu_icon.html',
    'lib/client/templates/user_menu_icon.js',
    'assets/screenings.png',
  ], ['client']);

  api.addFiles([
    "i18n/en.i18n.json"
  ], ["client", "server"]);

});
