import { Template } from 'meteor/templating';

import { Views } from '../api/views.js';

import './body.html';

Template.body.helpers({
  title : 'botes',
  views() {
    return Views.find({});
  },
});
