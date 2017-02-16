$( document ).ready(function() {
	$(".button-collapse").sideNav(); //Ejecuta hamburguesa mobile

	$( "#btn-first" ).click(function() { //oculta título y botón y muestra 
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

function namePlayers(){
	var first = document.getElementById("first_player");
	var second = document.getElementById("second_player");

	var namePlayer1 = document.getElementById("name-player-1");
	var namePlayer2 = document.getElementById("name-player-2");

	//var play1 = document.createTextNode(first);
	//var play2 = document.createTextNode(second);

	//namePlayer1.appendChild(play1);
	//namePlayer2.appendChild(play2);

	namePlayer1.innerHTML = first.value;
	namePlayer2.innerHTML = second.value;
}
namePlayers();


	//la idea es validar el formulario y que cuando este ok, 
	//se habilite el botón con el evento que traspasa los nombres
	var first = document.getElementById("first_player").value;
	var second = document.getElementById("second_player").value;

	function validateNamePlayer1(){
		if(first == null || first.length == 0 || !(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/).test(first)){
			alert("ERROR: El campo nombre no debe ir vacío, lleno de espacios en blanco y la primera letra debe ser mayúscula");
			return false;
		} 
	}
	validateNamePlayer1();

	function validateNamePlayer2(){
		if(first == null || first.length == 0 || !(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/).test(first)){
			alert("ERROR: El campo nombre no debe ir vacío, lleno de espacios en blanco y la primera letra debe ser mayúscula");
			return false;
		}
	}
	validateNamePlayer2();

	function buttonPlay(){
		if( validateNamePlayer1 && validateNamePlayer2 === false){
			alert("Resulta!!");
		}
	}
	buttonPlay();