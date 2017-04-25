import { Template } from 'meteor/templating';

import { Views } from '../api/views.js';

import './body.html';

Template.body.helpers({
  title : 'botes',
  views() {
    return Views.find({}, { sort: { sequencia: -1 } });
  },
});

// Template.body.events({
//   'submit .new-task'(event) {
//     // Prevent default browser form submit
//     event.preventDefault();
//
//     // Get value from form element
//     const target = event.target;
//     const nome = target.text.value;
//
//     // Insert a task into the collection
//     Views.insert({
//       nome: nome,
//       createdAt: new Date(), // current time
//     });
//
//     // Clear form
//     target.text.value = '';
//   },
// });
