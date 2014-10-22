requirejs.config({
	baseUrl: 'assets/js',
	paths: {
		app: 'app',
		text: '../../bower_components/requirejs-text/text',
		underscore: '../../bower_components/underscore/underscore', 
		backbone: '../../bower_components/backbone/backbone',
		jquery: '../../bower_components/jquery/dist/jquery',
		templates: '../templates'
	}
});

requirejs(['main']);