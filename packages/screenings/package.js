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
    'lib/client/templates/post_summary.html',
    'lib/client/templates/post_summary.js',
  ], ['client']);

});
