'use strict';

module.exports = function (grunt) {

  var path = require('path');
  var webpack = require('webpack');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  var watchFiles = ['Gruntfile.js','./dev/**/*.js', './dev/**/*.css', './dev/**/*.html'];

  grunt.initConfig({

    webpack: {
      client: {
        entry: __dirname + '/dev/js/client.js',
        output: {
          path: path.join(__dirname, '/public'),
          filename: 'bundle.min.js'
        },
        // plugins: [
        //   new webpack.optimize.UglifyJsPlugin({minimize: true})
        // ]
      }
    },

    copy: {
      html: {
        cwd: 'dev/',
        expand: true,
        flatten: false,
        src:'**/*.html',
        dest:'public/',
        filter: 'isFile'
      },
      images: {
        cwd: 'dev/',
        expand: true,
        flatten: false,
        src: 'images/**/*',
        dest: 'public/'
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dev/',
          src: 'css/**/*.css',
          dest: 'public/',
          ext: '.min.css'
        }]
      }
    },

    clean: {
      dev: {
        src: 'public/'
      }
    },

    watch: {
      files: watchFiles,
      html: {
        files: ['./dev/**/*.html'],
        options: {
          livereload: true
        }
      },
      css: {
        files: ['./dev/**/*.css'],
        options: {
          livereload: true
        }
      },
      tasks: ['build']
    },

    nodemon: {
      dev: {
        src: watchFiles
      }
    }
  });

  grunt.registerTask('build', ['webpack:client', 'copy:html', 'cssmin', 'copy:images'])
};
