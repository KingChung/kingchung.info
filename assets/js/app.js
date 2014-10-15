requirejs.config({
	baseUrl: 'assets/js',
	paths: {
		app: 'app',
		underscore: '../../bower_components/underscore/underscore', 
		backbone: '../../bower_components/backbone/backbone',
		jquery: '../../bower_components/jquery/dist/jquery'
	}
});

requirejs(['main']);