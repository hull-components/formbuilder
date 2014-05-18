Hull.component({
  templates: ['modal'],
  refreshEvents: ['hull.auth.login'],

  initialize: function() {
    this.modalOpened = false;
    this.sandbox.on('form.saved', function(form) {
      this.hide();
    }, this);
  },

  beforeRender: function(data) {
    var formData = false;
    if (data.me && data.me.profile && data.me.profile[this.options.formName]) {
      data.formData = formData = data.me.profile[this.options.formName];
    }
    data.formComplete = formData;
    data.displayForm = this.loggedIn() && !data.formComplete;
    data.displayModal = !this.loggedIn() || !data.formComplete;
  },

  afterRender: function(data) {
    var self = this;
    if (data.displayModal) {
      setTimeout(function() {
        self.show();
      }, (this.options.delay || 1000));
    } else {
      this.hide();
    }
  },

  show: function() {
    if (!this.modalOpened) {
      this.$el.modal('show');
      this.modalOpened = true;
    }
  },

  hide: function() {
    this.modalOpened = false;
    this.$el.modal('hide');
  }
});