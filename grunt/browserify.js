module.exports = {
    bundle_src: {
        src: ['./src/**/*.js'],
        dest: '.tmp/bundle_src.js',
        options: {
//                    alias: ["./src/client/_testme:testme"],
            ignore: ['src/server/**/*.js']
        }
    },
    bundle_spec: {
        src: ['./test/spec/**/*.js'],
        dest: '.tmp/bundle_spec.js',
        options: {
//                    alias: ["./src/client/_testme:testme"],
            ignore: ['test/spec/client/e2e/*']
        }
    }
};