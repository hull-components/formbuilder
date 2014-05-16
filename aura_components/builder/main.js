Hull.component({
  templates: ['main'],

  require: ['formbuilder'],

  datasources: {
    form: function() {
      var def = { path: this.options.id };
      if (this.options.namespace) {
        def.provider = 'admin@' + this.options.namespace;
      }
      return this.api(def);
    }
  },

  initialize: function() {
    Formbuilder.options.AUTOSAVE = false;
    this.injectLinkTag('formbuilder-combined');
  },

  beforeRender: function(data) {
    this.formId = data.form.id;
    data.isAdmin = (data.me.id && data.me.is_admin);
  },

  afterRender: function(data) {
    if (data.isAdmin) {
      var self = this;
      var bootstrapData = [];
      if (data.form.extra && data.form.extra.fields) {
        bootstrapData = data.form.extra.fields || [];
      }
      
      this.$builder = new Formbuilder({ selector: this.$el, bootstrapData: bootstrapData });
      this.$builder.on('save', function(payload) {
        self.saveForm.call(self, JSON.parse(payload).fields);
      });
    }
  },

  saveForm: function(fields) {
    var def = { path: this.formId };
    if (this.options.namespace) {
      def.provider = 'admin@' + this.options.namespace;
    }
    this.api.put(def, { type: 'form', extra: { fields: fields } });
  },

  injectLinkTag: function(file) {
    if (this.linkTagInjected || this.options.injectLinkTag === false) { return; }

    var e = document.createElement('link');
    e.href = this.options.baseUrl + '/css/' + file + '.min.css';
    e.rel = 'stylesheet';

    document.getElementsByTagName('head')[0].appendChild(e);

    this.linkTagsInjected = true;
  }
});