Package.describe({
  name: "screenings",
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
    'telescope:core@0.21.1',
    'utilities:compile-svg'
  ]);

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  api.addFiles([
    'lib/config.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/server/prerender.js'
  ], ['server']);

  api.addFiles([

    'lib/client/templates/typekit.html',
    'lib/client/templates/sidebar.html',
    'lib/client/templates/main_posts_list.html',
    'lib/client/templates/categories_menu.html',
    'lib/client/templates/categories_menu_item.html',
    'lib/client/templates/views_menu.html',
    'lib/client/templates/views_menu_item.html',
    'lib/client/stylesheets/screenings.scss',

  ], ['client']);

  api.addFiles([
    "i18n/en.i18n.json"
  ], ["client", "server"]);


  api.addAssets([
    'assets/screenings.png',
    'assets/screeningsc.png',
    'assets/logo.svg',
    'assets/bg.jpg',
    'assets/favicon.ico'
    
    // 'assets/icons/best.svg',
    // 'assets/icons/new.svg',
    // 'assets/icons/short.svg',
    // 'assets/icons/top.svg',
    // 'assets/icons/pending.svg',

    // 'assets/icons/all_categories.svg',
    // 'assets/icons/animation.svg',
    // 'assets/icons/documentaries.svg',
    // 'assets/icons/illustration.svg',
    // 'assets/icons/interviews.svg',
    // 'assets/icons/lettering.svg',
    // 'assets/icons/logo-design.svg',
    // 'assets/icons/photography.svg',
    // 'assets/icons/product-design.svg',
    // 'assets/icons/prototyping.svg',
    // 'assets/icons/talks.svg',
    // 'assets/icons/typography.svg',
    // 'assets/icons/ui-design.svg',
    // 'assets/icons/ux.svg'

  ], ["client", "server"]);
  
});
