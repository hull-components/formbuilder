this.Hull = this.Hull || {};
this.Hull.templates = this.Hull.templates || {};
this.Hull.templates._default = this.Hull.templates._default || {};
Hull.templates._default["modal/edit"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n      <h4 class=\"modal-title\">Editing "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n    </div>\n    <div class=\"modal-body\">\n      <div data-hull-component='builder@formbuilder' data-hull-id=\"entity:"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.formName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  };
Hull.templates._default["modal/modal"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n      </div>\n      <div class=\"modal-body\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayForm), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    </div>\n  </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div data-hull-component='form@formbuilder' data-hull-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.form)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\n        <div data-hull-component='login/shopify@hull' data-hull-redirect-on-login=\"false\"></div>\n        ";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayModal), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  } ; 

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