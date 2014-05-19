this.Hull = this.Hull || {};
this.Hull.templates = this.Hull.templates || {};
this.Hull.templates._default = this.Hull.templates._default || {};
Hull.templates._default["modal/edit"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n      <h4 class=\"modal-title\">Editing "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n    </div>\n    <div class=\"modal-body\">\n      <div data-hull-component='builder@formbuilder' data-hull-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.form)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  };
Hull.templates._default["modal/modal"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.modalEngine), "bootstrap", options) : helperMissing.call(depth0, "ifEqual", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.modalEngine), "bootstrap", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\" id=\"myModalLabel\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n        </div>\n        <div class=\"modal-body\">\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayForm), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      </div>\n    </div>\n  ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <div data-hull-component='form@formbuilder' data-hull-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.form)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\n          ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "\n          <div data-hull-component='login/shopify@hull' data-hull-redirect-on-login=\"false\"></div>\n          ";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayForm), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div data-hull-component='form@formbuilder' data-hull-id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.form)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\n    ";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return "\n    <div data-hull-component='login/shopify@hull' data-hull-redirect-on-login=\"false\"></div>\n    ";
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

    this.detectModalEngine();
  },

  detectModalEngine: function() {
    var self = this;
    if ($.fn.fancybox) {
      this.options.modalEngine = 'fancybox';
      this.modal = function(opts) {
        if (opts === 'show') {
          $.fancybox(self.$el);
          self.modalOpened = true;
        } else if (opts === 'hide') {
          $.fancybox.close();
          self.modalOpened = false;
        }
      }
    } else if ($.fn.modal) {
      this.options.modalEngine = 'bootstrap';
      this.$el.on('hide.bs.modal', function() {
        self.modalOpened = false;
      });

      this.$el.on('show.bs.modal', function() {
        self.modalOpened = false;
      });

      this.modal = function(opts) {
        self.$el.modal(opts); 
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