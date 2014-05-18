Hull.component({
  templates: ['modal', 'edit'],
  refreshEvents: ['hull.auth.login'],

  initialize: function() {
    var self = this;
    this.modalOpened = false;
    this.sandbox.on('form.edit', function(formName) {
      debugger
      console.warn("Edit", formName);
      this.render('edit', { formName: formName, displayModal: true });
    }, this);
    this.sandbox.on('form.saved', function(form) {
      this.hide();
    }, this);

    this.$el.on('hide.bs.modal', function() {
      console.warn("Modal Hide", this, arguments);
      this.modalOpened = false;
    });

    this.$el.on('show.bs.modal', function() {
      console.warn("Modal Show", this, arguments);
      this.modalOpened = false;
    });


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
    }
  },

  hide: function() {
    this.$el.modal('hide');
  }
});