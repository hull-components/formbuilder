this.Hull = this.Hull || {};
this.Hull.templates = this.Hull.templates || {};
this.Hull.templates._default = this.Hull.templates._default || {};
Hull.templates._default["modal/modal"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\n      </div>\n      <div class=\"modal-body\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayForm), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    </div>\n  </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <h3>Hello "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.me)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n        <div data-hull-component='form@formbuilder' data-hull-id=\"entity:"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.formName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
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