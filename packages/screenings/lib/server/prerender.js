if (Meteor.settings.PrerenderIO) {
  var prerender = Npm.require('prerender-node')
    .set('protocol', 'http')
    .set('host', 'screenings.io')
    .set('prerenderToken', Meteor.settings.PrerenderIO.token);

  Meteor.startup(function() {
    WebApp.rawConnectHandlers.use(prerender);
  });
}