var banPop = false;

function creaOverlay(color,contenedor,tipo){
	pos = (tipo==1)?'absolute':'fixed';
	var divOverlay =  $("<div>");
	var c = $(contenedor);
	c.css("position","relative");
	divOverlay.attr({"id":"banOverlay","class":"modal"});
	altoTotal = c.height();
	anchoTotal = c.width();
	divOverlay.css({"position":pos,"top":"0","left":"0","width":(anchoTotal*1.20)+"px","background":color,"opacity":".8","height":"100%",'display':'none'});
	c.append(divOverlay);
	divOverlay.fadeIn("slow");
	divOverlay.click(destruyeOverlay);
	banPop = true;
	
}

function creaModal(contenedor,tipo,contenido){ 
	pos = (tipo==1)?'absolute':'fixed';
	var c = $(contenedor);
	divContent = $("<div>");

	divCerrar = $("<div>");
	divCerrar.attr({"id":"cerrarBtn","class":"modal"});
	divCerrar.css({"position":"absolute","top":"0","right":"0","background":"url(../img/botones/cerrar.png) center","width":"30px","height":"30px","cursor":"pointer"});
	divCerrar.click(destruyeOverlay);

	divContent.attr({"id":"contentOverlay","class":"modal"});
	divContent.css({"position":pos,"top":"0","left":"50%","width":(anchoTotal-140)+"px","padding":"40px","height":(altoTotal/2)+"px","border":"1px solid black","display":"block","z-index":"1000","box-shadow":"0 0 5px #ccc","overflow":"auto","background":"white","margin-left":"-","margin-top":"10%"});
	divContent.css({"margin-left":"-"+((divContent.width()/2)+40)+"px"})
	divContent.fadeIn("slow");
	

	c.append(divContent);
	divContent.load(contenido,function(){
		divContent.append(divCerrar);
	});

}





function destruyeOverlay(){
	if(banPop){
		$(".modal").each(function(){
			$(this).fadeOut("slow",function(){
				$(this).remove();
			})
		});

		return false;

	}
}


function shortcuts(){
	$('body').keypress(function(e){
    switch(e.which){
   			case 0:
   				destruyeOverlay();
   			break;

   			default:
   			break;
   		}


	});
}

$(function(){
	shortcuts();
})


