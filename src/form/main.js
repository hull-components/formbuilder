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

  require: [
    // Form Validation
    'parsley', 
    // Date Picker
    'pikaday'
  ],

  datasources: {
    // Get the form fields.
    form: ":id",

    // Current user Profile, where the results are stored.
    profile: function() {
      if (this.loggedIn()) {
        return this.api("me/profile");
      }
    }
  },

  initialize: function() {
    // Inject styles
    this.injectLinkTag('parsley');
    this.injectLinkTag('pikaday');
  },

  events: {
    'submit form': function(e) {
      // On form submission, we call the saveForm method.
      e.preventDefault();
      var data = this.sandbox.dom.getFormData(this.$(e.target));
      this.saveForm(data);
    }
  },

  actions: {
    // Reset all information in the current user's Profile
    reset: function(e) {
      e && e.preventDefault();
      this.saveForm(false);
    },

    // Emit an event to display the form builder for the current form.
    // Another component must react to this event to actually display 
    // the formbuilder. 
    edit: function() {
      this.sandbox.emit('form.edit', this.formName);
    }
  },

  saveForm: function(data) {
    var self = this;
    // Disabling submit button
    this.$('[type="submit"]').attr('disabled', true);
    var profileData = {};
    profileData[this.formName] = data;
    // Storing the result of the form inside the current Users's profile.
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

  // Helper to emit form related events
  emitFormEvent: function(eventName, data) {
    var eventData = data;
    eventData.eventName = eventName;
    eventData.formName = this.formName;
    eventData.cid = this.cid;
    this.sandbox.emit('form.' + eventName, eventData);
  },

  listenToFormEvents: function() {
    // Re-render the form on form Events
    if (this.listening) return;
    this.sandbox.on('form.*', function(evt) {
      if (evt && evt.formName) {
        this.$('[type="submit"]').attr('disabled', false);
        this.render();
      }
    }, this);
    // Sets listening flag to true to avoid attaching the listener multiple times.
    this.listening = true;
  },

  beforeRender: function(data) {
    var ns = data.formName = this.formName = this.normalizeFormName(data.form.uid);
    var self = this, _ = this.sandbox.util._,
        profile = (data.profile && data.profile[ns]) || {};
        fields  = data.form.extra.fields || [];
    var formId = Math.round(Math.random() * 1000000);
    
    // Build the list of fields from the form definition
    // and merge them with the user's data coming from his profile
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
      // Pre-render the individual fields
      f.markup = self.renderTemplate('fields/' + f.field_type, f);
    });
    data.fields = fields;
  },

  afterRender: function(data) {
    var self = this, _ = this.sandbox.util._;
    var Pick = this.require('pikaday');
    // Activate form validation with parsley
    this.$('form').parsley();
    // Activate date pickers
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
    // Helper to inject styles
    if (this.linkTagInjected || this.options.injectLinkTag === false) { return; }

    var e = document.createElement('link');
    e.href = this.options.baseUrl + '/' + file + '.css';
    e.rel = 'stylesheet';

    document.getElementsByTagName('head')[0].appendChild(e);

    this.linkTagsInjected = true;
  }
});