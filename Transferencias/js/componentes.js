$(function(){

           	$("#on").click(function(){
           		$("#switchbox > div").animate({
           			left:"-=45"
           			},"fast");
           		$("#form").fadeOut("slow");
           		});
           		
           	 $("#off").click(function(){
           		$("#switchbox > div").animate({
           			left:"+=45"
           			},"fast");
           		$("#form").fadeIn("slow");
           		});
           		

           		
});

