require(
	[
		'underscore',
		'backbone',
		'text!templates/main.html'
	]
	, function(_, Backbone, ViewTemplate){
		return Backbone.View.extend({
			template: _.template(ViewTemplate),
			initialize: function(){
				
			},
			events: {

			},
			serialize: function(){

			}
		})
	}
)