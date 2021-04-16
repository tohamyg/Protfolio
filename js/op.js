$(function(){


















$(".ul li a").click(function(event){

  $(".ul li a").removeClass("active");

  $(this).addClass("active");

  event.preventDefault();

$(" html , body ").animate({

scrollTop:$( "#" + $(this).data("target")).offset().top +1
} , 1000);
});

$("body").css("paddingTop",$(".ul").innerHeight());

$(window).scroll(function(){

$(".block").each(function(){
if($(window).scrollTop() > $(this).offset().top){
var blockid=$(this).attr("id");
  $(".ul li a").removeClass("active");
  $(".ul li a[data-target='"+blockid+"']").addClass("active");
};


});



if($(window).scrollTop() > 3200){
if($(".scroll-to-top").is(":hidden")){

$(".scroll-to-top").fadeIn(400);
}
}else {
  $(".scroll-to-top").fadeOut(400);
}
});







$(".scroll-to-top").click(function(event){
event.preventDefault();

$(" html ,body").animate({

scrollTop:0

},1000)

});



$(".button-effect").hover(function(){

$(this).find("span").eq(0).animate({
height:"100%"

},500)

} , function(){
  $(this).find("span").eq(0).animate({
  height:"0"

  },500)

});


$(".progress span").each(function(){

$(this).animate({
  width : $(this).attr("data-progress") + "%"
},1000)

$(this).text( $(this).attr("data-progress") + "%");

});


$(".fixed-menu .fa-ambulance").on("click",function(){

$(this).parent(".fixed-menu").toggleClass("is-visible");

if($(this).parent(".fixed-menu").hasClass("is-visible")){

$(".fixed-menu").animate({

left:"0"

},1000)

$("body").animate({

paddingLeft:"190px"

},1000)

}
else{

  $(".fixed-menu").animate({

  left:"-190px"

  },1000)

  $("body , html").animate({

  paddingLeft:"0"

  },1000)


}

});

$(".fixed-menu .colors li").on("click",function(){

$("body").attr("data-default-color", $(this).data("color"));

});


$(".sub-gallery img").on("click" , function(){
$(this).addClass("selected").siblings().removeClass("selected");

$(".gallery .majour img").attr("src",$(this).attr("src"))
console.log($(this).attr("src"));

});

});
