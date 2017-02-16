$( document ).ready(function() {
	$(".button-collapse").sideNav();

	$( "#btn-first" ).click(function() {
		$( "header" ).addClass( "desaparecer" );
		$( "#register" ).removeClass( "desaparecer" ).addClass( "aparecer" );
	});

	$( "#btn-second" ).click(function() {
		$( "header" ).addClass( "desaparecer" );
		$( "#register" ).removeClass( "aparecer" ).addClass( "desaparecer" );
		$( "#catplay" ).removeClass( "desaparecer" ).addClass( "aparecer" );
	});
	$( "#link-record" ).click(function() {
		$( "header" ).addClass( "desaparecer" );
		$( "#register" ).removeClass( "aparecer" ).addClass( "desaparecer" );
		$( "#catplay" ).removeClass( "aparecer" ).addClass( "desaparecer" );
		$( "#record" ).removeClass( "desaparecer" ).addClass( "aparecer" );
	});
});
