import './display.html';

import { Itens } from '../api/itens.js';

Template.display.helpers({
  itens() {
    var id = FlowRouter.current().params._id;
    return Itens.find({view: id}, {sort: {createdAt: -1}});
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
       var autorValue = event.target.autor.value;
       var viewValue = event.target.id.value;

       Itens.insert({
         descricao: descricaoValue,
         autor: autorValue,
         createdAt: new Date(),
         view: viewValue
       });
      //  event.target.descricao.value = '';
       FlowRouter.go('/display/' + viewValue);
   },
});
