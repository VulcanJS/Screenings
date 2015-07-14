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
    'lib/modules.js',
    'lib/icons.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/stylesheets/screenings.scss',
    'lib/client/templates/custom_after_post_item.html',
    'lib/client/templates/custom_after_post_item.js',
    'lib/client/templates/custom_post_thumbnail.html',
    'lib/client/templates/custom_submit_button.html',
    'lib/client/templates/custom_categories_menu.html',
    'lib/client/templates/custom_user_menu.html',
    'lib/client/templates/custom_notifications_menu.html',
    'lib/client/templates/custom_post_vote.html',
    'lib/client/templates/custom_post_vote.js',
    'lib/client/templates/post_summary.html',
    'lib/client/templates/post_summary.js',
  ], ['client']);

});
