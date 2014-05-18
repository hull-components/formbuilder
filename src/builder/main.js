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
    this.injectLinkTag('formbuilder');
    this.injectLinkTag('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min');
  },

  beforeRender: function(data) {
    this.formId = data.form.id;
    data.isAdmin = (data.me.id && data.me.is_admin);
  },

  afterRender: function(data) {
    if (this.options.namespace || data.isAdmin) {
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
    var href = file + '.css';
    if (!/^http/.test(file)) {
      href = this.options.baseUrl + '/css/' + href;
    }
    e.href = href;
    e.rel = 'stylesheet';

    document.getElementsByTagName('head')[0].appendChild(e);

    this.linkTagsInjected = true;
  }
});