Posts.views.add("short", function (terms) {
  return {
    find: {"media.duration": {$lte: 180}},
    options: {sort: {sticky: -1, score: -1}}
  };
});