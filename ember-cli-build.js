/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var isProduction = EmberApp.env() === "production";

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
        
        storeConfigInMeta: true,
        //autoRun: true,
        minifyJS: {
            enabled: isProduction? true:false,
            exclude: [] // exclude some files
        },
        minifyCSS: {
            enabled: isProduction? true:false,
            exclude: [] // exclude some files
        },
        sourcemaps: {
            enabled: isProduction? true:false,
            extensions: ['js', 'css']
        },
        fingerprint: {
            enabled: isProduction? true:false, // Boolean. Enables fingerprinting if true. True by default if current environment is production.
            exclude: ["emberjs.js", "emberjs.css"], // An array of strings. If a filename contains any item in the exclude array, it will not be fingerprinted.
            ignore: ["emberjs.js", "emberjs.css"], // An array of strings. If a filename contains any item in the ignore array, the contents of the file will not be processed for fingerprinting.
            extensions : ['js', 'css', 'png', 'jpg', 'gif', 'map'], // The file types to add md5 checksums.
            prepend: '', // A string to prepend to all of the assets. Useful for CDN urls like https://subdomain.cloudfront.net/
            replaceExtensions: ['html', 'css', 'js'], // The file types to replace source code with new checksum file names.
            // customHash: null // When specified, this is appended to fingerprinted filenames instead of the md5. Pass null to suppress the hash, which can be useful when using prepend.
        },
        sassOptions: {
            includePaths: ["bower_components/"], // an array of include paths
            sourceMap: isProduction? true:false, // controls whether to generate sourceMaps, defaults to true in development. The sourceMap file will be saved to options.outputFile + '.map'
            extension: "scss", // specifies the file extension for the input files, defaults to scss. Set to sass if you want to use .sass instead.
            // nodeSass: null // Allows a different version of node-sass to be used (see below)
        },
        outputPaths: {
            app: {
                html: 'index.html',
                css: {
                    'app': '/assets/emberjs.css'
                },
                js: '/assets/emberjs.js'
            },
            vendor: {
                css: '/assets/vendor.css',
                js: '/assets/vendor.js'
            }
        },
        'ember-bootstrap': {
            importBootstrapTheme: true,
            importBootstrapCSS: true,
            importBootstrapFont: true
        },
        'ember-cli-bootstrap-sassy': {
            //'js': ['affix','collapse']
            'js': true,
            'glyphicons': true,
            'quiet': true
        }
    });

    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.

    return app.toTree();
};
