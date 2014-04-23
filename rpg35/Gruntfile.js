/*global module:false*/
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');

  // Project configuration.
  grunt.initConfig({
    builddir: 'build',
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
          options:{
              port: 8000,
              base: 'app',
              keepalive: true
          }
      }
    }
  });

  grunt.registerTask('default', ['connect:server']);

};
