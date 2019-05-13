//JavaScript Document

$(document).ready(function(e){
document.addEventListener("deviceready",function(){
		
$('#Izquierda').on("swipeleft",function(){
navigator .notification .alert("Deslizó a la izquierda",function(){"Aplicacion ","Aceptar"});
});

$('#Derecha').on("swiperight",function(){
navigator .notification .confirm("¿Qué quieres hacer?",function(opt){
	switch(opt)
	{
		case 1:
		navigator.notification.beep(1);
		break;
		
		case 2:
		navigator.notification.vibrate(2000);
		break;
	}
	},"Aplicación ","Beep,Vibrar,Cancelar");
	
});
},false); //deviceready
}); //ready
