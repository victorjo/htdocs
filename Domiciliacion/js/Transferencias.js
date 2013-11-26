
var globalVarOfVal = 0;
var globalFlah = 0;
var normal = 1610;

$(document).ready(function(){
	posWidgets();
	$(".widget-min").click(function(){
		getInstance(this);
	});
	$(".btnHeader").click(function(){
		globalFlah++;
		console.log(globalFlah);
	});
});


//para commit
window.onresize = function(){
	posWidgets();
}

var widgets = [
				{
					type:1,
					order:1,
					contentMin:'<div class="cabecera" style="height: 10px; background: none repeat scroll 0% 0% black; color: white; font-size: 12px; padding: 9px;"><div><p>Administración de tarjeta</p></div><div class="btnCabecera"></div><div class="btnCabecera"></div></div>',
					contentMax:'<h2>Content Maxified 1</h2>'
				},
				{
					type:2,
					order:2,
					contentMin:'<div class="on"><div id="widgetred"><div id="headerwidred"><div class="btnHeader"><img src="../img/botones/maximize.png" /></div><div class="btnHeader"><img src="../img/botones/info.png" /></div><p style="width:80%;">TRANSFERENCIA DE SALDOS</p></div><div id="titlewidred"><p>Conoce la transferencia de saldos:</p></div><div class="txtwidred"><p>El beneficio de la Tasa Preferencial<br />Promocional, tendrá una vigencia de 12<br />meses, contados a partir del mes en que se<br />realice la transferencia de saldo a la Tarjeta<br />Santander, una vez transcurrido este periodo,<br />si el tarjetahabiente no terminó de liquidar la<br />deuda objeto de la transferencia, el saldo<br />remanente de la deuda será sujeto a las<br />condiciones del saldo revolvente de la tarjeta<br />de Crédito</p></div><div class="botonera" style="top:10%"><div class="btnwidred" style="margin-right:10px">Sí, me interesa</div></div></div></div><div class="off" style="display:none"></div>',
					contentMax:'<h2>Content Maxified 2</h2>'
				},
				{
					type:2,
					order:3,
					contentMin:'<div class="cabecera" style="height: 10px; background: none repeat scroll 0% 0% black; color: white; font-size: 12px; padding: 9px;"><div><p>Administración de tarjeta</p></div><div class="btnCabecera"></div><div class="btnCabecera"></div></div>',
					contentMax:'<h2>Content Maxified 3</h2>'
				},
				{
					type:3,
					order:4,
					contentMin:'<div class="cabecera" style="height: 10px; background: none repeat scroll 0% 0% black; color: white; font-size: 12px; padding: 9px;"><div><p>Administración de tarjeta</p></div><div class="btnCabecera"></div><div class="btnCabecera"></div></div>',
					contentMax:'<h2>Content Maxified 3</h2>'
				},
				{
					type:1,
					order:5,
					contentMin:'<div class="cabecera" style="height: 10px; background: none repeat scroll 0% 0% black; color: white; font-size: 12px; padding: 9px;"><div><p>Administración de tarjeta</p></div><div class="btnCabecera"></div><div class="btnCabecera"></div></div>',
					contentMax:'<h2>Content Maxified 3</h2>'
				},
				{
					type:2,
					order:6,
					contentMin:'<div class="cabecera" style="height: 10px; background: none repeat scroll 0% 0% black; color: white; font-size: 12px; padding: 9px;"><div><p>Administración de tarjeta</p></div><div class="btnCabecera"></div><div class="btnCabecera"></div></div>',
					contentMax:'<h2>Content Maxified 3</h2>'
				},
				{
					type:2,
					order:7,
					contentMin:'<div class="cabecera" style="height: 10px; background: none repeat scroll 0% 0% black; color: white; font-size: 12px; padding: 9px;"><div><p>Administración de tarjeta</p></div><div class="btnCabecera"></div><div class="btnCabecera"></div></div>',
					contentMax:'<h2>Content Maxified 3</h2>'
				},
				{
					type:3,
					order:8,
					contentMin:'<div class="cabecera" style="height: 10px; background: none repeat scroll 0% 0% black; color: white; font-size: 12px; padding: 9px;"><div><p>Administración de tarjeta</p></div><div class="btnCabecera"></div><div class="btnCabecera"></div></div>',
					contentMax:'<h2>Content Maxified 4</h2>'
				}
			];

function posWidgets(){
	var wrapper = $("#wrappWidgets");
	wrapper.children(".widget-min").remove();
	wrapper.css('height',$(window).height()-wrapper.offset().top);
	$("#dataClient").css("width", $(window).width()-830);
	var widgetTypes = {
					1:{
						styles: ['widget-min','col1','altoTotal']
					},
					2:{
						styles: ['widget-min','col1','alto2']
					},
					3:{
						styles:['widget-min','col2','alto2']
					}
				};

	var parser = 0;
	//fatal hardcode
	$.ajax({
		url:'balance_maquetas/informativo.html',
        type:'GET',
        dataType:'html',
        success: function(res){
        	$('.off').html(res);
        }
    });
    //end of fatal hardcode
    wids = sortByKey(widgets, 'order');
	$.each(wids,function(i,v){
		var newWidget = $('<div>');
		var c = fillStyles(v.type);
		newWidget.attr("class",c);
		newWidget.html(v.contentMin);
		wrapper.append(newWidget);
		newWidget.attr("data-pos",parser+1);
		if(((parser%3)==0 && parser!=0)) newWidget.css('float','right');
		var posWid = newWidget.offset();
		var posWra = wrapper.offset()
		var a = posWid.top-posWra.top;
		var b = posWid.left-posWra.left;
		newWidget.css({'top': a+"px",'left':b+"px"});
		parser++;
	});

	function sortByKey(array, key) {
	    return array.sort(function(a, b) {
	        var x = a[key]; var y = b[key];
	        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	    });
	}

	function fillStyles(type){
		var attrClass = "";
		$.each(widgetTypes[type].styles,function(i,v){
			attrClass += v+" ";	
		});
		return attrClass;
	}

	(function (wrapper){
		if($(window).width()>1490) 
		{
			$("#wrappWidgets").css("width","1028px");
			var alen = 1030;
		}else{
			$("#wrappWidgets").css("width","771px");
		}
		var obj = $("#navContent");
		var posLeft = wrapper.offset().left;
		posLeft += alen || 790;
		var posTop =  wrapper.height()/2;
		obj.css({'left':posLeft,'top':(posTop-obj.height())});
		var c;
		var altoScrolling = wrapper[0].scrollHeight;
		var altosScroll = [];

		c = $('.btnNavWidget').size(); 
		altoScrolling = altoScrolling/(c);
		for (c;c>=0;c--){altosScroll.push(altoScrolling*c);}
		altosScroll.reverse();
		$('.btnNavWidget').each(function(i,v){
			$(this).attr('onclick','moveScroll(this,'+altosScroll[i]+')');
		});

		banPosSelect = 0;
		posScroll = 0;
		banderita=false;
		wrapper.scroll(function(){
			if(globalVarOfVal>0) return false;
			var thisS = $(this);
			
			if(posScroll > thisS.scrollTop()){
					banderita =false;
			}else{
					banderita = true;
			}
			
			posScroll = thisS.scrollTop();

			if((posScroll+100) > altosScroll[banPosSelect] && banderita){
				banPosSelect++;
			}else if((posScroll-100) <= altosScroll[(banPosSelect-1)] && !banderita)
			{
				if(banPosSelect<=1){
					banPosSelect = 1 ;
				}else{
					banPosSelect--;
				}
			}
				activaBtn($('#navContent > div:nth-child('+banPosSelect+')'));

		});
	})(wrapper);
}




function moveScroll(obj,math){

	if($(obj).hasClass('ActiveNav')) return false;
	globalVarOfVal++;
	if($(obj).next().hasClass('ActiveNav')) ope = '-';
	else ope = '+';
	//alert($("#wrappWidgets").scrollTop()+"math"+math);
	//$("#wrappWidgets").animate({'scrollTop': ope+math+'px'},'slow',function(){ globalVarOfVal=0; });
	$("#wrappWidgets").animate({'scrollTop': math+'px'},'slow',function(){ globalVarOfVal=0; });
	activaBtn(obj);

}

function getInstance(obj){
	var thisW = $(obj);
	if(typeof thisW.data("instanced") == 'undefined' || thisW.data("instanced") == 'undefined') thisW.data("instanced",new newWidgetInstance(thisW));
	else thisW.find(".btnHeader").click(function(){thisW.data('instanced').routerAction()});
}

function newWidgetInstance(obj)
{
	this.obj = obj;
	this.topPos = this.obj.offset().top;
	this.leftPos = this.obj.offset().left;
	this.topPosIn = this.obj.css('top');
	this.leftPosIn = this.obj.css('left');
	this.width = this.obj.width();
	this.height = this.obj.height();
	this.chPost = function () {
			this.obj.attr({"instanced":"true"});
			this.obj.css({'position':'fixed','top':this.topPos,'left':this.leftPos,'z-index':50});
			this.obj.animate({left: ($(window).width()/2)-467+'px',top:'10%'},300,function(){creaOverlay('#000',document.body,0); var scope = $(this); $(scope).children('.on').fadeOut(800,function(){ $(scope).children('.off').fadeIn(300) }) }).animate({width:'935px',height:'541px'},800);
			};
	this.routerAction = function(positionMax){
						if(globalFlah>0) return false;
						destruyeOverlay();
						$(this.obj).children('.off').fadeOut('slow',function(){console.log(this.obj); $(this).parent().children('.on').fadeIn()});
						this.obj.animate({'top':this.topPosIn,'left':this.leftPosIn,'width':this.width+'px','height':this.height+'px'},800,function(){ $("#wrappWidgets").animate({scrollTop:'0px'}); }).animate({'top':'+='+$("#wrappWidgets").offset().top,'left':'+='+$("#wrappWidgets").offset().left},300,function(){
							var io = $(this);
							io.css({'top':'-='+$("#wrappWidgets").offset().top,'left':'-='+$("#wrappWidgets").offset().left,'position':'static','z-index':0});
							io.attr({"instanced":"false"});
							io.data('instanced','undefined')
						});
						globalFlah = 0;
					};
	this.chPost();
}