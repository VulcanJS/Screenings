Package.describe({
  name: "zeiss",
  summary: "Zeiss theme",
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
    'lib/config.js',
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
    'lib/server/templates/custom_emailDigest.handlebars',
    'lib/server/templates/custom_emailPostItem.handlebars'
  ], ['server']);

  api.addFiles([

    'lib/client/jquery.quickfit.js',

    'lib/client/templates/common/head.html',
    'lib/client/templates/common/layout.html',
    'lib/client/templates/common/logo.html',
    'lib/client/templates/common/logo.js',
    'lib/client/templates/common/newsletter_banner.html',
    'lib/client/templates/common/newsletter_banner.js',
    'lib/client/templates/common/page.html',
    'lib/client/templates/common/footer_social.html',

    'lib/client/templates/post_page/post_page.html',
    'lib/client/templates/post_page/post_page.js',
    'lib/client/templates/post_page/comment_submit.html',
    'lib/client/templates/post_page/comment_submit.js',

    'lib/client/templates/posts/post_admin.html',
    'lib/client/templates/posts/post_item.html',
    'lib/client/templates/posts/post_item.js',
    'lib/client/templates/posts/after_post_item.html',
    'lib/client/templates/posts/after_post_item.js',
    'lib/client/templates/posts/post_submit.html',
    'lib/client/templates/posts/post_thumbnail.html',
    'lib/client/templates/posts/post_thumbnail.js',
    'lib/client/templates/posts/post_vote.html',
    'lib/client/templates/posts/post_vote.js',
    'lib/client/templates/posts/post_footer.html',
    'lib/client/templates/posts/post_edit_icon.html',

    'lib/client/templates/nav/submit_button.html',
    'lib/client/templates/nav/categories_menu.html',
    'lib/client/templates/nav/posts_views_nav.html',
    'lib/client/templates/nav/nav_footer.html',
    'lib/client/templates/nav/nav_footer.js',
    'lib/client/templates/nav/menu_item.html',
    'lib/client/templates/nav/user_menu_icon.html',
    'lib/client/templates/nav/user_menu_icon.js',

    'lib/client/stylesheets/_colors.scss',
    'lib/client/stylesheets/_global.scss',
    'lib/client/stylesheets/_posts_grid.scss',
    'lib/client/stylesheets/_mixins.scss',
    'lib/client/stylesheets/_nav.scss',
    'lib/client/stylesheets/_other.scss',
    'lib/client/stylesheets/_post_page.scss',
    'lib/client/stylesheets/_accounts.scss',
    'lib/client/stylesheets/screen.scss',

    'assets/screenings.png',
    'assets/logo.svg',
    'assets/bg.jpg',
    'assets/favicon.ico'

  ], ['client']);

  api.addFiles([
    "i18n/en.i18n.json"
  ], ["client", "server"]);

});
