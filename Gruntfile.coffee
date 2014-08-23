module.exports = (grunt) ->

	require("load-grunt-tasks")(grunt)

	grunt.initConfig
		pkg: require "./package"

		watch:
			sencha:
				files: [ "app/**/*.js" ]
				tasks: [ "build" ]

		extract_required:
			sencha:
				files: [
					src: [ "app/**/*.js" ]
					dest: "build/common/required.js"
				]

		browserify:
			sencha:
				files:
					"build/common/required-bundle.js" : [ "build/common/required.js" ]
			options:
				bundleOptions:
					standalone: "require"

		clean:
			sencha:
				src: [ "build/common" ]

	grunt.registerTask "build", [ "extract_required", "browserify" ]
	grunt.registerTask "default", [ "build" ]
