import './display.html';

import { Itens } from '../api/itens.js';

Template.display.helpers({
  itens() {
    var id = FlowRouter.current().params._id;
    return Itens.find({view: id});
  },
  _id(){
    return FlowRouter.current().params._id;
  }
});

Template.incluirItem.helpers({
  _id(){
    return FlowRouter.current().params._id;
  }
});

Template.incluirItem.events({
  'submit .form-register': function(event) {
       event.preventDefault();
       var descricaoValue = event.target.descricao.value;
       var viewValue = event.target.id.value;

       console.log(viewValue)
       console.log(descricaoValue)

       Itens.insert({
         descricao: descricaoValue,
         view: viewValue
       });

       event.target.descricao.value = '';
   },
});
