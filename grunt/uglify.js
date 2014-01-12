module.exports = {
    options: {
        banner: '/*! <%= meta.package.name %> - v<%= meta.package.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> */\n\n',
        mangle: {
            except: ['jQuery', 'Backbone', 'angular']
        },
        compress: true,
        report: 'gzip',
        preserveComments: false
    },
    distme: {
        files: {
            '.dist/bundle.min.js': ['.tmp/bundle_src.js']
        }
    }
};