$(function(){


  $(".navbar .humbarger").on("click",function(){

    $(this).toggleClass("active");
    $(".navbar ul").toggleClass("active");
  });

$("#header .navbar .list .fa").on("click",function(){
console.log("hello");
$(this).toggleClass("fa-angle-down fa-angle-up");
$("#header .navbar .list li ul").toggleClass("block");


});


$("#header .navbar .humbarger  ").hover(function(){


$(".hov ").css("display","block");

},function(){

  $(".hov ").css("display","none");


});




$(".sign-out ").hover(function(){


$(".hovv").css("display","block");

},function(){

  $(" .hovv").css("display","none");


});





});
