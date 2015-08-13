Package.describe({
  name: "telescope:screenings",
  summary: "Screenings theme",
  version: "0.0.1",
  git: "https://github.com/TelescopeJS/screenings"
});

Npm.depends({
  'prerender-node': '2.0.1'
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
    
  ], ['client', 'server']);

  api.addFiles([
    'lib/server/prerender.js'
  ], ['server']);

  api.addFiles([

    'lib/client/templates/typekit.html',
    'lib/client/stylesheets/screenings.scss',

    'assets/screenings.png',
    'assets/logo.svg',
    'assets/bg.jpg',
    'assets/favicon.ico'

  ], ['client']);

  api.addFiles([
    "i18n/en.i18n.json"
  ], ["client", "server"]);

});
