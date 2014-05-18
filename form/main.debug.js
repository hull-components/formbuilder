this.Hull = this.Hull || {};
this.Hull.templates = this.Hull.templates || {};
this.Hull.templates._default = this.Hull.templates._default || {};
Hull.templates._default["form/fields/checkboxes"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div>\n  <label class='fb-option'>\n    <input type='checkbox' name=\""
    + escapeExpression(((stack1 = (depth1 && depth1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "[]\" value=\"";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.required), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n    ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </label>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked";
  }

function program4(depth0,data) {
  
  
  return "data-parsley-maxcheck=\"1\"";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class='other-option'>\n  <label class='fb-option'>\n    <input type='checkbox' name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "[]\" value=\"other\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.other_value), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n    Other\n  </label>\n\n  <input type='text' name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_other_value\" value=\"";
  if (helper = helpers.other_value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.other_value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.options), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.include_other_option), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  };
Hull.templates._default["form/fields/date"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "required";
  }

  buffer += "<input id=\"";
  if (helper = helpers.input_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.input_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type='text' name='";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class='form-control' \n  ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.required) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.required); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.required) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n  value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n/>";
  return buffer;
  };
Hull.templates._default["form/fields/dropdown"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n    <option value=''></option>\n  ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <option value=\"";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n      ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </option>\n  ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "selected";
  }

  buffer += "<select name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"form-control\">\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.include_blank_option), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.options), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</select>\n";
  return buffer;
  };
Hull.templates._default["form/fields/email"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "required";
  }

  buffer += "<input  id=\"";
  if (helper = helpers.input_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.input_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type='email' name='";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class=\"form-control\"\n  ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.required) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.required); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.required) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n  data-parsley-trigger=\"change\"\n  value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" \n  placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n/>";
  return buffer;
  };
Hull.templates._default["form/fields/number"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "min=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.min)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "max=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.max)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "data-parsley-type=\"integer\"";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <span class=\"add-on input-group-addon\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.units)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n  ";
  return buffer;
  }

  buffer += "<span class=\"input-group input-append\">\n\n  <input type='text' name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"  class=\"form-control\"\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.min), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.max), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.integer_only), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    data-parsley-trigger=\"change\"\n    data-parsley-errors-container=\"#parsley-errors-";
  if (helper = helpers.input_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.input_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n  /> \n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.units), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</span>\n\n<span id=\"parsley-errors-";
  if (helper = helpers.input_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.input_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span>\n";
  return buffer;
  };
Hull.templates._default["form/fields/paragraph"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<textarea  id=\"";
  if (helper = helpers.input_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.input_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"form-control\">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>";
  return buffer;
  };
Hull.templates._default["form/fields/radio"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div>\n  <label class='fb-option'>\n    <input type='radio' name=\""
    + escapeExpression(((stack1 = (depth1 && depth1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\"";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n    ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </label>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class='other-option'>\n  <label class='fb-option'>\n    <input type='radio' name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"other\" ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.value), "other", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.value), "other", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " />\n    Other\n  </label>\n\n  <input type='text' name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_other_value\" value=\"";
  if (helper = helpers.other_value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.other_value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.options), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.include_other_option), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  };
Hull.templates._default["form/fields/text"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "required";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-parsley-minlength=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.minlength)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-parsley-maxlength=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.maxlength)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

  buffer += "<input id=\"";
  if (helper = helpers.input_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.input_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type='text' name='";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class='form-control' \n  ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.required) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.required); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.required) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n  value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.minlength), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.maxlength), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n/>";
  return buffer;
  };
Hull.templates._default["form/fields/website"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "required";
  }

  buffer += "<input  id=\"";
  if (helper = helpers.input_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.input_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type='url' name='";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "' class=\"form-control\" ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.required) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.required); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.required) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " value=\"";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"http://\"/>";
  return buffer;
  };
Hull.templates._default["form/main"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <h1>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n  <p>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.field_type), "checkboxes", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.field_type), "checkboxes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-hull-field-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <label for=\"";
  if (helper = helpers.input_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.input_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        ";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.required), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n      ";
  if (helper = helpers.markup) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.markup); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.description), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "checkkbox";
  }

function program6(depth0,data) {
  
  
  return "form-group";
  }

function program8(depth0,data) {
  
  
  return "*";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <p class=\"help-block\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field_options)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n      ";
  return buffer;
  }

function program12(depth0,data) {
  
  
  return "\n  <button class=\"btn btn-danger btn-block\" data-hull-action=\"reset\">Reset</button>\n  ";
  }

  buffer += "<form role=\"form\" data-hull-form-namespace=\"";
  if (helper = helpers.formNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.formNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  ";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.form) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.form); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.form) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.fields), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <button class=\"btn btn-primary btn-block\" type=\"submit\" >Save</button>\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.resetButton), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</form>\n";
  return buffer;
  } ; 

Hull.component({

  templates: ['main', 
    'fields/text', 
    'fields/date', 
    'fields/number', 
    'fields/dropdown', 
    'fields/paragraph', 
    'fields/radio', 
    'fields/checkboxes',
    'fields/website',
    'fields/email'
  ],

  require: ['parsley', 'pikaday'],

  datasources: {
    form: ":id",
    profile: function() {
      if (this.loggedIn()) {
        return this.api("me/profile");
      }
    }
  },

  initialize: function() {
    this.options.debug = /debug/.test(document.location.toString());
    this.injectLinkTag('parsley');
    this.injectLinkTag('pikaday');
  },

  events: {
    'submit form': function(e) {
      e.preventDefault();
      var data = this.sandbox.dom.getFormData(this.$(e.target));
      this.saveForm(data);
    }
  },

  actions: {
    reset: function(e) {
      e && e.preventDefault();
      this.saveForm(false);
    }
  },

  saveForm: function(data) {
    var self = this;
    this.$('[type="submit"]').attr('disabled', true);
    var profileData = {};
    profileData[this.formName] = data;
    this.api.put('me/profile', profileData).then(function(res) {
      var val = res[self.formName];
      if (data != false) {
        self.emitFormEvent('saved', { data: val });
      } else {
        self.emitFormEvent('reset', { data: false });
      }
    }, function(err) {
      self.emitFormEvent('error', { errors: err });
    });
  },

  emitFormEvent: function(eventName, data) {
    var eventData = data;
    eventData.eventName = eventName;
    eventData.formName = this.formName;
    eventData.cid = this.cid;
    this.sandbox.emit('form.' + eventName, eventData);
  },

  listenToFormEvents: function() {
    if (this.listening) return;
    console.warn("Listeing now... ", this.cid)
    this.sandbox.on('form.*', function(evt) {
      if (evt && evt.formName) {
        this.$('[type="submit"]').attr('disabled', false);
        this.render();
      } else {
        console.warn("... not for me.... ", evt);
      }
    }, this);
    this.listening = true;
  },

  beforeRender: function(data) {
    var ns = data.formName = this.formName = this.normalizeFormName(data.form.uid);
    var self = this, _ = this.sandbox.util._,
        profile = (data.profile && data.profile[ns]) || {};
        fields  = data.form.extra.fields || [];
    var formId = Math.round(Math.random() * 1000000);

    _.each(fields, function(f) {
      f.input_id = ['input', formId, f.name].join('_');
      f.value = profile[f.name];
      if (f.value && _.isArray(f.field_options.options)) {
        _.each(f.field_options.options, function(o) {
          if (_.isArray(f.value)) {
            o.selected = _.include(f.value, o.label);
          } else {
            o.selected = o.label == f.value;  
          }
        });
        if ((_.isArray(f.value) && _.include(f.value, 'other')) || f.value == 'other') {
          f.other_value = profile[f.name + '_other_value'];
        }
      }
      f.markup = self.renderTemplate('fields/' + f.field_type, f);
    });
    data.fields = fields;
  },

  afterRender: function(data) {
    var self = this, _ = this.sandbox.util._;
    var Pick = this.require('pikaday');
    this.$('form').parsley();
    if (window.Pikaday) {
      _.each(data.fields, function(f) {
        if (f.field_type === 'date') {
          var fmt = f.field_options.format || 'yyyy-mm-dd';
          new Pikaday({ 
            field: document.getElementById(f.input_id),
            format: fmt,
            moment: self.sandbox.util.moment
          });
        }
      });
    }
    this.listenToFormEvents();
  },

  normalizeFormName: function(ns) {
    return ns.replace(/[^a-z0-9_\-]/ig, '_');
  },

  injectLinkTag: function(file) {
    if (this.linkTagInjected || this.options.injectLinkTag === false) { return; }

    var e = document.createElement('link');
    e.href = this.options.baseUrl + '/' + file + '.css';
    e.rel = 'stylesheet';

    document.getElementsByTagName('head')[0].appendChild(e);

    this.linkTagsInjected = true;
  }
});