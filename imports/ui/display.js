import './display.html';

import { Itens } from '../api/itens.js';

Template.display.helpers({
  itens() {
    var id = FlowRouter.current().params._id;
    var page = FlowRouter.current().params._page;
    return Itens.find({view: id}
      , {
        sort: {createdAt: -1},
        limit: 5,
        skip: (page -1) * 5
        });
  },
  _id(){
    return FlowRouter.current().params._id;
  },
  nextPage(){
    return parseInt(FlowRouter.current().params._page) + 1;
  },
  prevPage(){
    var page = parseInt(FlowRouter.current().params._page);
    return page == 1 ? 1 : page -1;
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
       FlowRouter.go('/display/' + viewValue + '/1');
   },
});
