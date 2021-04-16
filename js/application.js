$(function(){


$(".hamburger").on("click",function(){

  $(this).toggleClass("active");
  $(".header .nav-bar .nav-list ul").toggleClass("active");
});





$(".header .nav-bar .nav-list ul a").on("click" ,function(){

$(".header .nav-bar .nav-list ul").toggleClass("active");

  console.log("#"+$(this).data("after"));
  $("body , html").animate({
   scrollTop:$("#"+$(this).data("after")).offset().top

 },1000)
 

})

});
