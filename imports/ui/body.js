import { Template } from 'meteor/templating';

import { Itens } from '../api/itens.js';

import './body.html';

Template.body.helpers({
  title : 'botes',
  itens() {
    return Itens.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const descricao = target.text.value;

    // Insert a task into the collection
    Itens.insert({
      descricao,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
});
