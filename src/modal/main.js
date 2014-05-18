Hull.component({

  // Refresh the component on successful login
  refreshEvents: ['hull.auth.login'],

  templates: [
    // Main template for the modal
    'modal', 
    // Template to display the form builder inside the modal
    // Admins only
    'edit'
  ],
  
  initialize: function() {
    var self = this;
    this.modalOpened = false;
    // Listener to display the formBuilder
    // Listens to "form.edit" events with the name of the current form 
    // as param
    this.sandbox.on('form.edit', function(formName) {
      this.render('edit', { formName: formName, displayModal: true });
    }, this);

    // Hide the modal when the form is successfully saved
    this.sandbox.on('form.saved', function(form) {
      this.hide();
    }, this);

    // Listen to bootstrap's modal events
    // to keep internal state of the modal visibility status
    this.$el.on('hide.bs.modal', function() {
      this.modalOpened = false;
    });

    this.$el.on('show.bs.modal', function() {
      this.modalOpened = false;
    });
  },

  beforeRender: function(data) {
    // Rules to display the modal... or not
    var formData = false;
    if (data.me && data.me.profile && data.me.profile[this.options.formName]) {
      data.formData = formData = data.me.profile[this.options.formName];
    }
    data.formComplete = formData;


    // If displayForm is true, the template will show the form
    data.displayForm = this.loggedIn() && !data.formComplete;

    // Open the modal afterRender if it's hidden
    data.displayModal = !this.loggedIn() || !data.formComplete;
  },

  afterRender: function(data) {
    var self = this;
    if (data.displayModal) {
      // Make sure the modal is shown and add a delay to open it
      setTimeout(function() {
        self.show();
      }, (this.options.delay || 1000));
    } else {
      // Hide it otherwise
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