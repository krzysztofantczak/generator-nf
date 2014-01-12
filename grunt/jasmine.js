module.exports = {
    coverage: {
        src: '.tmp/bundle_spec.js',
        options: {
            specs: '.tmp/bundle_spec.js',
            template: require('grunt-template-jasmine-istanbul'),
            templateOptions: {
                coverage: '<%= meta.bin.coverage %>/coverage.json',
                report: [
                    {
                        type: 'html',
                        options: {
                            dir: '<%= meta.bin.coverage %>/html'
                        }
                    },
                    {
                        type: 'text-summary'
                    }
                ]
            }
        }
    }
};