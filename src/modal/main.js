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
  
  datasources: {
    form: ":id"
  },

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

    this.sandbox.on('form.modal.show', function(form) {
      this.modal('show');
    }, this);

    this.sandbox.on('form.modal.hide', function(form) {
      this.modal('hide');
    }, this);

    this.detectModalEngine();
  },

  detectModalEngine: function() {
    var self = this;
    if ($.fn.modal) {
      this.modalEngine = 'bootstrap';
      this.$el.on('hide.bs.modal', function() {
        self.modalOpened = false;
      });

      this.$el.on('show.bs.modal', function() {
        self.modalOpened = false;
      });

      this.modal = function(opts) {
        self.$el.modal(opts); 
      }
    } else if ($.fn.fancybox) {
      this.modalEngine = 'fancybox';
      this.modal = function(opts) {
        if (opts === 'show') {
          $.fancybox(self.$el);
          self.modalOpened = true;
        } else if (opts === 'hide') {
          $.fancybox.close();
          self.modalOpened = false;
        }
      }
    } else {
      var self = this;
      this.modal = function() {
        self.log("No modal engine found");
      }
    }
  },

  beforeRender: function(data) {
    // Rules to display the modal... or not
    var formName = data.form.uid;
    
    var formData = false;
    if (data.me && data.me.profile && data.me.profile[formName]) {
      data.formData = formData = data.me.profile[formName];
    }

    data.formComplete = formData;

    // If displayForm is true, the template will show the form
    data.displayForm = this.loggedIn() && !data.formComplete;

    // Open the modal afterRender if it's hidden
    data.displayModal = !this.loggedIn() || !data.formComplete;

    data.modalEngine = this.modalEngine;
  },

  afterRender: function(data) {
    var self = this;
    this.detectModalEngine();
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
      this.modal('show');
    }
  },

  hide: function() {
    this.modal('hide');
  }
});