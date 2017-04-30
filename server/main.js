import { Meteor } from 'meteor/meteor';

import '../imports/api/views.js';
import '../imports/api/itens.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('itens', function(skipCount) {
  var positiveIntegerCheck = Match.Where(function(x) {
    check(x, Match.Integer);
    return x >= 0;
  });
  check(skipCount, positiveIntegerCheck);

  return Itens.find({}, {
    limit: 5,
    skip: skipCount
  });
});
