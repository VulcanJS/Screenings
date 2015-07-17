Posts.views.add("short", function (terms) {
  return {
    find: {"media.duration": {$lte: 500}},
    options: {sort: {sticky: -1, score: -1}}
  };
});