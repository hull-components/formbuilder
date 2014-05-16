this["Hull"] = this["Hull"] || {};

this["Hull"]["templates"] = this["Hull"]["templates"] || {};

this["Hull"]["templates"]["_default"] = this["Hull"]["templates"]["_default"] || {};

this["Hull"]["templates"]["_default"]["builder/main"] = function(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [ 4, ">= 1.0.0" ];
    helpers = this.merge(helpers, Handlebars.helpers);
    data = data || {};
    var stack1, self = this;
    function program1(depth0, data) {
        return '\n<div class="alert alert-warning">\n  You must be logged as an admin to do that...\n</div>\n';
    }
    stack1 = helpers.unless.call(depth0, depth0.isAdmin, {
        hash: {},
        inverse: self.noop,
        fn: self.program(1, program1, data),
        data: data
    });
    if (stack1 || stack1 === 0) {
        return stack1;
    } else {
        return "";
    }
};

Hull.component({
    templates: [ "main" ],
    require: [ "formbuilder" ],
    datasources: {
        form: function() {
            var def = {
                path: this.options.id
            };
            if (this.options.namespace) {
                def.provider = "admin@" + this.options.namespace;
            }
            return this.api(def);
        }
    },
    initialize: function() {
        Formbuilder.options.AUTOSAVE = false;
        this.injectLinkTag("formbuilder-combined");
    },
    beforeRender: function(data) {
        this.formId = data.form.id;
        data.isAdmin = data.me.id && data.me.is_admin;
    },
    afterRender: function(data) {
        if (data.isAdmin) {
            var self = this;
            var bootstrapData = [];
            if (data.form.extra && data.form.extra.fields) {
                bootstrapData = data.form.extra.fields || [];
            }
            this.$builder = new Formbuilder({
                selector: this.$el,
                bootstrapData: bootstrapData
            });
            this.$builder.on("save", function(payload) {
                self.saveForm.call(self, JSON.parse(payload).fields);
            });
        }
    },
    saveForm: function(fields) {
        var def = {
            path: this.formId
        };
        if (this.options.namespace) {
            def.provider = "admin@" + this.options.namespace;
        }
        this.api.put(def, {
            type: "form",
            extra: {
                fields: fields
            }
        });
    },
    injectLinkTag: function(file) {
        if (this.linkTagInjected || this.options.injectLinkTag === false) {
            return;
        }
        var e = document.createElement("link");
        e.href = this.options.baseUrl + "/css/" + file + ".min.css";
        e.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(e);
        this.linkTagsInjected = true;
    }
});