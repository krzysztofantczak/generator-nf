module.exports = function(grunt)
{
//    [ 'grunt-browserify',
//      'grunt-contrib-uglify',
//      'grunt-contrib-jasmine',
//      'grunt-contrib-watch',
//      'grunt-shell-spawn',
//      'grunt-protractor-runner',
//      'grunt-conventional-changelog' ].map(function( task )
//    {
//        grunt.loadNpmTasks ( task );
//    });
//    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig
    ({
        // configuration
        //
        meta: {
            package: grunt.file.readJSON('package.json'),
            src: {
                main: 'src',
                test: 'test/spec'
            },
            bin: {
                coverage: '.tmp/coverage'
            }
        },

        // tasks
        //
        browserify : require ( './grunt/browserify' ),
        jasmine    : require ( './grunt/jasmine'    ),
        uglify     : require ( './grunt/uglify'     ),

        connect: {
            coverage: {
                options: {
                    port: 5555,
                    base: '.tmp/coverage/html',
                    keepalive: true
                }
            }
        },

        open: {
//            devserver: {
//                path: 'http://localhost:8888'
//            },
            coverage: {
                path: 'http://localhost:5555'
            }
        },

        watch: {
            all: {
                files: ['src/**/*.*', 'test/spec/**/*.*'],
                tasks: ['browserify', 'jasmine:coverage']
            }
        },

        shell: {
            options: {
                stdout: true
            },
            selenium: {
                command: './selenium/start',
                options: {
                    stdout: false,
                    async: true
                }
            },
            protractor_install: {
                command: 'node ./node_modules/protractor/bin/webdriver-manager update'
            },
            npm_install: {
                command: 'npm install'
            }
        },

        protractor: {
            options: {
                keepAlive: true,
                configFile: "./test/protractor.conf.js"
            },
            singlerun: {},
            auto: {
                keepAlive: true,
                options: {
                    args: {
                        seleniumPort: 4444
                    }
                }
            }
        },

        changelog: {
            options: {
                template: 'grunt/changelog.tpl'
            }
        }
    });

    //installation-related
    grunt.registerTask('install', ['update','shell:protractor_install']);
    grunt.registerTask('update', ['shell:npm_install']);

//    grunt.registerTask('test:coverage', ['jasmine:coverage', 'watch']);
    grunt.registerTask('default', ['update', 'browserify', 'uglify:distme', 'jasmine:coverage', 'open:coverage', 'connect:coverage', 'watch']);
};
