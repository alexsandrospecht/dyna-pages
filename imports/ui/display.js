import './display.html';

import { Itens } from '../api/itens.js';

Template.display.helpers({
  itens() {
    var id = FlowRouter.current().params._id;
    return Itens.find({view: parseInt(id)});
  },
});
