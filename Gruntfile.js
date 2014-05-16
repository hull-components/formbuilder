module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-hull-widgets');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  var config = grunt.file.readYAML('config.yml');

  console.log("Starting with config: ", config);

  grunt.initConfig({

    hull_widgets: {
      app: {
        src: 'aura_components',
        before: [],
        dest: 'dist',
        optimize: false
      }
    },

    watch: {
      components: {
        files: ['aura_components/**/*'],
        tasks: ['hull_widgets', 'cssmin:minify']
      }
    },

    cssmin: {
      minify: {
        expand: true,
        src: 'aura_components/**/*.css',
        dest: 'dist/',
        ext: '.min.css'
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'dist/'
        }
      }
    },

    copy: {
      html: {
        src: ['*.html'],
        dest: 'dist/',
        options: {
          process: function(content, srcpath) {
            return content
                      .replace('{{initConfig}}', JSON.stringify(config.init))
                      .replace('{{formUid}}', config.form.uid);
          }
        }
      }
    }

  });

  grunt.registerTask('default', ['connect:server', 'hull_widgets', 'cssmin:minify', 'copy:html', 'watch']);
};