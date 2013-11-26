
var globalVarOfVal = 0;
var globalFlah = 0;
var normal = 1610;
var altoVentana = $(window).height();

var tamanoWidget = 587;

$(document).ready(function(){
	posWidgets();
	$(".widget-min").click(function(){
		getInstance(this);
	});
	$(".btnHeader").click(function(){
		globalFlah++;
		console.log(globalFlah);
	});

		genFooterHeight();
		ajustaBannerHeight();

});


//para commit
window.onresize = function(){
	posWidgets();
}


// GENERADOR DE LA BOTONERA
function obtieneAltoTotal (){
	var altoContenedor = $("#wrappWidgets")[0].scrollHeight;
	var numeroDeBtns = Math.floor(altoContenedor / tamanoWidget);
	$("#navContent").html("");
	for(var i=0;i < numeroDeBtns;i++){
		btnDiv = creaBtn();
		$("#navContent").append(btnDiv);
	}

	$("#navContent .btnNavWidget:first-child").removeClass("noActiveNav").addClass("ActiveNav");
}

function creaBtn(){
		var btnDiv = $("<div>");
		btnDiv.attr("class","Fright noActiveNav btnNavWidget");
			return btnDiv;
}



function genFooterHeight(){
		if(altoVentana > tamanoWidget){
			var restaElementos = $("#avatarNavPrin").height();
			restaElementos += $("#wr_btnNav").height();
			restaElementos += $("#tipoServ").height();
			restaElementos +=60;
			restaElementos = altoVentana - restaElementos;
			$("#footer").height(restaElementos);
		}
}


function ajustaBannerHeight(){
		if(altoVentana > tamanoWidget){
			var restaElementos = $("#wr_SuperBanner").height();
			restaElementos += $("#tipoServ").height();
			restaElementos += 10;
			restaElementos = altoVentana - restaElementos;
			$("#wr_SuperBanner").height($("#wr_SuperBanner").height() + restaElementos);
			// centra la imagen al div que lo contiene
			//$("#wr_SuperBanner img").css("margin-top",(restaElementos/2) +"px")
			$("#wr_SuperBanner img").css("margin-top",10 +"px")

		}


}

var widgets = [
				{
					id:1,
					type:2,
					order:1,
					contentMin:'',
					contentMax:''
				},
				{
					id:null,
					type:2,
					order:2,
					contentMin:'',
					contentMax:''
				},{
					id:100,
					type:2,
					order:3,
					contentMin:'',
					contentMax:''
				},
				{
					id:null,
					type:3,
					order:4,
					contentMin:'',
					contentMax:''
				},
				{
					id:null,
					type:1,
					order:5,
					contentMin:'',
					contentMax:''
				},
				{
					id:null,
					type:2,
					order:6,
					contentMin:'',
					contentMax:''
				},
				{
					id:null,
					type:2,
					order:7,
					contentMin:'',
					contentMax:''
				},
				{
					id:null,
					type:3,
					order:8,
					contentMin:'<div class="cabecera" style="height: 10px; background: none repeat scroll 0% 0% black; color: white; font-size: 12px; padding: 9px;"><div><p>Administración de tarjeta</p></div><div class="btnCabecera"></div><div class="btnCabecera"></div></div>',
					contentMax:'<h2>Content Maxified 4</h2>'
				}
			];



function posWidgets(){
	var wrapper = $("#wrappWidgets");
	wrapper.children(".widget-min").remove();
	wrapper.css('height',altoVentana-50);
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
    //end of fatal hardcode
    wids = sortByKey(widgets, 'order');
	$.each(wids,function(i,v){
		var newWidget = $('<div>');
		var c = fillStyles(v.type);
		newWidget.attr("class",c);
		if(v.id==null) newWidget.html(v.contentMin);
		else{
			$.ajax({
				url:'widgets/min/w_'+v.id+'/index.html',
		        type:'GET',
		        dataType:'html',
		        success: function(res){
		        	newWidget.html(res);
		        }
		    });
		}
		wrapper.append(newWidget);
		newWidget.attr({"data-pos":parser+1,"data-id":v.id});
		if((parser%3)==0) newWidget.css('float','right');
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
			$("[data-pos='3']").after('<div class="widget-min col1 alto2 " data-pos="codom"><h1>Publicidad</h1></div>');
			$("[data-pos='7']").css('float','left');
			var alen = 1030;
		}else if($(window).width()<=768){
			$("body").mousemove(function(e){
				if(e.pageX<=0){
					$(".wr_NavPrin").animate({'left':'0px'},'slow');
				}
				if(e.pageX>=190) $(".wr_NavPrin").animate({'left':'-190px'});
			});
		}else{
			$("#wrappWidgets").css("width","771px");
		}
		var obj = $("#navContent");
		var posLeft = wrapper.offset().left;
		posLeft += alen || 790;
		var posTop =  wrapper.height()/2;
		obj.css({'left':posLeft,'top':(posTop-obj.height())});
		var c;
		var altoScrolling = $("#wrappWidgets")[0].scrollHeight;
		var altosScroll = [];

		obtieneAltoTotal();

		c = $('.btnNavWidget').size();
		punteroC = c;
		
		altoScrolling = altoScrolling/(c);
		for (c;c>=0;c--){altosScroll.push(Math.round(altoScrolling*c));}
		altosScroll.reverse();
		$('.btnNavWidget').each(function(i,v){
			$(this).attr('onclick','moveScroll(this,'+altosScroll[i]+')');
		});

		banPosSelect = 1;
		posScroll = 0;
		dirScroll=false;


		/*function disableWhell(e){
    		e.preventDefault();
    	}
 
	var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" 
 
		if (document.attachEvent) 
    document.attachEvent("on"+mousewheelevt, disableWhell)
	else if (document.addEventListener) 
    document.addEventListener(mousewheelevt, disableWhell, false)
 */
		
		wrapper.scroll(function(e){
			//preventDefault(e);

			if(globalVarOfVal>0) return false;
			var thisS = $(this);
			altoScrollTop = $("#wrappWidgets").height()+ thisS.scrollTop();
			if(posScroll > thisS.scrollTop()){
					dirScroll =false;
			}else if(posScroll < thisS.scrollTop()){
					dirScroll = true;
			}
			posScroll = thisS.scrollTop();


			if(altoScrollTop >= altosScroll[(banPosSelect+1)] && dirScroll){
				if(banPosSelect>3){
					banPosSelect=2;
					
				}else{
					banPosSelect++;
				}

			}else if((altoScrollTop-($("#wrappWidgets").height()/2))  <= altosScroll[(banPosSelect-1)] && !dirScroll)
			{

				if(banPosSelect<=1){
					banPosSelect = 1 ;
				}else{
					banPosSelect--;
				}
			}

				if(banPosSelect==0){
					banPosSelect=1;
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
			var forA = this.obj;
			$.ajax({
				url:'widgets/max/w_'+this.obj.attr("data-id")+'/index.html',
		        type:'GET',
		        dataType:'html',
		        success: function(res){
		        	forA.html(res);
		        }
		    });

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