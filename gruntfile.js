module.exports = function(grunt) {
    // Configure Grunt
    grunt.initConfig({
        // Get the configuration information from package.json
        pkg: grunt.file.readJSON('package.json'),

        // Configure jshint to check js files for errors
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },

        build: ['Gruntfile.js', 'src/**/*.js']
        },

        // Configure uglify to minify js files
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("mm-dd-yyyy") %> \n*/\n'
            },
        build: {
            // Specify which files to minify
            files: {
                // Minify all js files into one js file
                'dist/js/scripts.min.js': ['src/**/*.js']
            }
        }
        },

        // Configure cssmin to minify css files
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("mm-dd-yyyy") %> \n*/\n'
            },
            build: {
                // Specify which files to minify
                files: {
                    'dist/css/style.min.css' : 'src/css/style.css',
                }
            }
        },

        // Configure htmlmin to minify html files
        htmlmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("mm-dd-yyyy") %> \n*/\n',
                removeComments: true,
                collapseWhitespace: true
            },
            build: {
                // Specify which files to minify
                files: {
                    'dist/index.html' : 'src/index.html'
                }
            }

        }


        

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');


    // Create tasks to run multiple tasks
    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'htmlmin']);

};

