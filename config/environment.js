/* jshint node: true */

module.exports = function(environment) {
	var ENV = {
		modulePrefix: 'deckyfx-github-io',
		environment: environment,
		rootURL: '/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			}
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
		},
		contentSecurityPolicy: {
		    'default-src': ["'none'"],
		    'script-src':  ["'self'", "'unsafe-eval'", "'unsafe-inline'", "apis.google.com", "http://*:49152/livereload.js"],
		    'frame-src':   ["'self'", "https://*.firebaseapp.com"],
		    'font-src':    ["'self'"],
		    'connect-src': ["'self'", "wss://*.firebaseio.com", "https://*.googleapis.com", "ws://*:49152/livereload"],
		    'img-src':     ["'self'"],
		    'style-src':   ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
		    'media-src':   ["'self'"]
	  	},
	  	contentSecurityPolicyMeta: true,
	  	contentSecurityPolicyHeader: "Content-Security-Policy", // "Content-Security-Policy-Report-Only"
	  	firebase: {
	  		apiKey: "AIzaSyA9sLvi1P8Av4XOd_ewmNEb4s1HuZMVbD4",
		    authDomain: "deckyfx-github-io.firebaseapp.com",
		    databaseURL: "https://deckyfx-github-io.firebaseio.com",
		    storageBucket: "deckyfx-github-io.appspot.com",
		    messagingSenderId: "601173201687"
	  	},
	  	torii: {
	      	sessionServiceName: 'session'
	    }
	};

	if (environment === 'development') {
		ENV.APP.LOG_RESOLVER = true;
		ENV.APP.LOG_ACTIVE_GENERATION = true;
		ENV.APP.LOG_TRANSITIONS = true;
		ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {
	    ENV.locationType = 'hash';
	    ENV.rootURL = '/deckyfx-github-io/';
	}

	return ENV;
};