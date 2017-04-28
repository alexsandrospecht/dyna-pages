import './view.html';

import { Views } from '../api/views.js';

Template.incluirView.events({
  'submit .form-register-view': function(event) {
       event.preventDefault();
       var nomeValue = event.target.nome.value;

       Views.insert({
         nome: nomeValue,
         tipo: 'info'
       });

       event.target.nome.value = '';
       FlowRouter.go('/');
   },
});
