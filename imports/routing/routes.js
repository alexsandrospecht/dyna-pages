FlowRouter.route('/display/:_id', {
  action: function(params) {
    render("vazio");
    render("display", {_id: params._id});
  },
});

FlowRouter.route('/newView', {
  action: function(params) {
    render("incluirView");
  },
});

FlowRouter.route('/display/:_id/incluir', {
  action: function(params) {
    render("incluirItem", {_id: params._id});
  },
});

route('/', 'vazio');

function route(from, toAction) {
  FlowRouter.route(from, {
    action: function(params) {
      render(toAction);
    }
  });
};

function render(action, ...params) {
  renderWithoutLogin(action, params);
}

function renderWithoutLogin(action, ...params) {
  BlazeLayout.render(action, params);
}
