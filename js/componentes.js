/*Funcion switch- instanciado mediante clases*/
function switchFunc(object,descripcion1,descripcion2){

var switchO = '<div style="position:relative;width:230px;">';
         switchO += '<div class="on">'+descripcion1+'</div>';
         switchO += '<div class="tope"></div>';
         switchO += '<div class="off">'+descripcion2+'</div>';
         switchO += '</div>';

  var container = $("#"+object);

  container.html(switchO); 
  
  container.children("div:first").find(".on").click(function(){
    container.children("div").animate({
    left:"-=45"
    },"fast");
  });

  container.children("div:first").find(".off").click(function(){
    container.children("div").animate({
    left:"+=45"
    },"fast");
  });
}
