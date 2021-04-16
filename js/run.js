$(function(){

$(".header").height($(window).height());

$(window).resize(function(){
  $(".header").height($(window).height());

});
$(".links li a").click(function(){
  $(this).parent().addClass("active").siblings().removeClass('active');
});




$(".links li a").click(function(){
$("body , html").animate({
scrollTop:$("#" + $(this).data("value")).offset().top
},1000)
});







// our autoslider auto;

(function autoslider(){

$(".slider .active").each(function(){

if(!$(this).is(":last-child")){
$(this).delay(3000).fadeOut(1000,function(){
$(this).removeClass("active").next().addClass("active").fadeIn();
autoslider();
});
}else {
  $(this).delay(3000).fadeOut(1000,function(){
$(this).removeClass("active");
$(".slider div").eq(0).addClass("active").fadeIn();
autoslider();

  });

}

});
}());






$(".btn.btn-effect").hover(function(){
$(this).find("span").eq(0).animate({
  width:"100%",
  right:"100%"

},300)

},function(){

  $(this).find("span").eq(0).animate({
    width:"0",
    Left:"100%"

  },300)

});


(function autoslider1(){
$(".progress span").each(function(){

$(".progress span").text( $(this).attr('data-progress') );
$(".progress span").animate({
width: $(this).attr('data-progress')
},500,function(){
  $(".progress span").animate({
  width: 0
},500)
autoslider1();

})
});
}());

/*
$('.fixed-menu .fa-envelope-open-o').on('click',function(){
  $("body ").animate({
  marginLeft:"200px"

},1000)
  $(".fixed-menu ").animate({
  marginLeft:0

},1000)

});

*/

$('.fixed-menu .fa-envelope-open-o').on('click' , function(){


  $(".fixed-menu").toggleClass('effectFixed');

  if($(this).parent(".fixed-menu").hasClass("effectFixed")){
$(this).parent(".fixed-menu").animate({
left:"0"

},1000)

    $("body ").animate({
    paddingLeft:$(this).parent('.fixed-menu').width()

  },1000)
  }
else {

  $(this).parent(".fixed-menu").animate({
  left: -$(this).parent('.fixed-menu').width()

},1000)

      $("body ").animate({
      paddingLeft:"0"

    } , 1000)
}

/*
  $(".fixed-menu ").animate({
  marginLeft:"-200px"

},1000)
*/


});




/*change color */

$(".fixed-menu .changeColor li").on("click" , function(){

$("body").attr("data-default-color",$(this).data("color"));

});




var myPlaceHolder="";
$("form input").focus(function(){


  myPlaceHolder=$(this).attr("placeholder");
$(this).attr("placeholder", "")




}).blur(function(){

$(this).attr("placeholder", myPlaceHolder)

})



$("[required]").blur(function(){

if($(this).val() == ""){
  $(this).next("span").fadeIn().delay(1000).fadeOut();
}

});


$("<span class='astric'>*</span>").insertBefore(":input[required]");
$(".astric").each(function(){


$(".astric").css({
"position":"absolute",
"top":0,
"left":$(this).parent().find("[required]").innerWidth()-20


})
console.log($("[required]").innerWidth())
});

// عشان اتحكم ف اتجاه اللغه ف ال input

$(".test").on("keyup",function(){
if($(this).val().charCodeAt(0) < 200){

  $(this).css("direction","ltr");
}
else{


  $(this).css("direction","rtl");


}



});




$(".add-tag").on("keyup",function(event){

var keyBored= event.keyCode || event.which;
if(keyBored === 188){
 var myVal= $(this).val().slice(0,-1);
 console.log(myVal);
$('.tags').append('<span class="tag-span"  > <i class="fa fa-times" ></i>'+ myVal + '</span>');
$(this).val('');
}




});





var cindex=0;

$(".cards .card").on("click", function(){
$(this).animate({
left:"20%",
marginTop:60

},1000,function(){

cindex--;
$(this).css("zIndex",cindex)

}).animate({
  left:"50%",
  marginTop:30



},1000)





})










});
