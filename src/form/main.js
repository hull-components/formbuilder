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

  saveForm: function(data) {
    var self = this;
    this.$('[type="submit"]').attr('disabled', true);
    var profileData = {};
    profileData[this.formNamespace] = data;
    this.api.put('me/profile', profileData, function(res) {
      self.render();
    })
  },

  beforeRender: function(data) {
    var ns = data.formNamespace = this.formNamespace = this.normalizeFormNamespace(data.form.uid);
    var self = this, _ = this.sandbox.util._,
        profile = data.profile[ns] || {};
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
  },

  normalizeFormNamespace: function(ns) {
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