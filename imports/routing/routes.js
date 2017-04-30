FlowRouter.route('/display/:_id/:_page', {
  action: function(params) {
    render("vazio");
    render("display", {_id: params._id, _page:params._page});
  },
});

FlowRouter.route('/newView', {
  action: function(params) {
    render("incluirView");
  },
});

FlowRouter.route('/incluir/:_id', {
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
