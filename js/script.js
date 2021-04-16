
$(document).ready(function() {
  /*****

  var x=  $(".p").width();
  var y=  $(".p").height();
$("button").click(function(){
  $(this).addClass("button");
$("span").html(x);
});

*************/
/************
$("p").filter($(".p")).siblings().css("color","red");
***********/
/********************
$("button").on("click",function(){

$("<p> mahmoud talaat mohmed abd elwahed</p>").insertAfter($("button"));

});

$("p").on("click" ,function(){
$(this).hide();
});
****************************/
/**************************************
$(window).on("resize" , function(){
  var wid=$(window).width();
$(".more").height($(window).height() - 100)
if(wid <800){
$("div").addClass("remove");
}
});
***********************************/
/******************
$(window).on("scroll" , function(){
var sc=$(window).scrollTop();
console.log(sc);
if(sc >1000){
  console.log("screen is large than 1000px");}
});
*************/
/************
$("html").mousemove(function(e){

$("span").text( "x-axis"  +  e.pageX  + "   " + "y-axis" + e.pageY  );

});
****************/

// calculate body paddingTop depend on navbar height

$("body").css("paddingTop", $(".navbar").innerHeight());
//

// scrolling

$(".navbar li a").click(function(e){

e.preventDefault();

$(" html , body ").animate({

scrollTop:$('#' + $(this).attr("data-scroll")).offset().top +1

},1000);

});
//

//class active
$(".navbar li a").click(function(){



  $(this).addClass("active").parent().siblings().find("a").removeClass("active");

});



//sync Navbar links with selection


$(window).scroll(function(){

$(".block").each(function(){
if($(window).scrollTop() > $(this).offset().top ){
var blockId =$(this).attr("id");
$(".navbar a").removeClass('active');
  $('.navbar li a[data-scroll = "'+ blockId +'"] ').addClass("active");
}
});
});

/***
$(".test").css("height","400px").addClass("room").end().find("p").css("color","red");

$("span").click(function(){
  if($(this).siblings().is("p"))
  console.log("your parent is div");
  else {
    console.log("not true");
  }
});
$("button").click( function () {
$("span").wrap("<div></div>");
});
*//////////////
/*
$(".test").find("span").css("color","#f00").end().find("p").css("color","green").end().find("h1").css("color","#f00");
*/

/*****
console.log( $(".test").offset().top );
console.log($(window).scrollTop());
*/


/*
$("html").mousemove(function(e){

$("span").text("x-axis" +  e.pageX + "y-axis" +e.pageY);


});
*/


/****
$("html").mousemove(function(e){

$(".test").show();

$(".test").offset({
top:e.pageY,
left:e.pageX
});
});
**/


/*************
$("div:first-child").css("color","red");
$("p:nth-child(2)").css("color","#333");
$("p:nth-child(3)").css("color","#999");
$("div:last-child").css("color","red");
$(".roo").find("p").css("color","#333");

$("<h1> mahmoud talaat Abd elwahed</h1>").appendTo(".learn");
********************************/


























$(".li").click(function(){

  console.log( "."+ $(this).data("target"));
$("."+ $(this).data("target")).fadeIn(1000);
$("img").not("."+ $(this).data("target")).fadeOut(1000);

});



});
