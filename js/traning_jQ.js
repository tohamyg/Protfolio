$(function(){


// scroll to top
$(".navbar .navbar_ul li a").on("click",function(e){
e.preventDefault();
//console.log("#"+$(this).data("attribute"));
$("html ,body").animate({
 scrollTop: $("."+$(this).data("attribute")).offset().top+1
},1000)
///// class  active

$(this).addClass("active").parent().siblings().find('a').removeClass("active");

});
// paddingTop of body
$("body").css("paddingTop",$(".navbar").innerHeight());



$(window).on("scroll" , function(){
  //sync links
$(".block").each(function(){
if($(window).scrollTop() > $(this).offset().top ){
var block_Id=$(this).attr('id');
$(".navbar a").removeClass('active');
$(' .navbar li a[data-attribute=  "'  + block_Id +'"]').addClass('active');

}
});
if($(window).scrollTop() >= 1000){

  $(".btn").fadeIn(500);
  $(".btn").click(function(){
    $("html ,body").animate({
     scrollTop: 0,

   },1000)


  });
}
else{

  $(".btn").fadeOut(500);

}
});




$(".react").hover(function(){
  $(".span1").animate({
    width: 1+"%",
    height:100+"%"

  },1000)
  $(".span2").animate({
    width: 100+"%",
    height:5+"%"

  },1000)
  $(".span3").animate({
    width: 100+"%",
    height:5+"%"

  },1000)
  $(".span4").animate({
    width: 1+"%",
    height:100+"%"

  },1000)



},function(){
  $(".span1").animate({
    width: 0,
    height:0

  },1000)
  $(".span2").animate({
    width: 0,
    height:0

  },1000)
  $(".span3").animate({
    width: 0,
    height:0

  },1000)
  $(".span4").animate({
    width: 0,
    height:0

  },1000)



});



$(".color li").on("click",function(){

$("body").attr("data-body",$(this).data("color"));


});



$(".block .pic .row .small img").on("click",function(){
$(this).addClass("select").siblings().removeClass("select");
$(".block .pic .pig img").hide().attr("src",$(this).attr("src")).fadeIn(500)

});


$(".block .pic .pig .fa-chevron-right").on("click" , function(){


if($(".block .pic .row .small img.select").is(":last-child")){

$(".block .pic .row .small img:first-child").click();

}
else {
  $(".block .pic .row .small img.select").next().click();

}


});









$(".block .pic .pig .fa-chevron-left").on("click" , function(){


if($(".block .pic .row .small img.select").is(":first-child")){

$(".block .pic .row .small img:last-child").click();

}
else {
  $(".block .pic .row .small img.select").prev().click();

}


});






var placeholder1="";


$("[placeholder]").focus(function(){

 placeholder1=$(this).attr("placeholder");

$(this).attr("placeholder"," ");

}).blur(function(){

  $(this).attr("placeholder",placeholder1);


});




$("[required]").blur(function(){

if($(this).val() == ""){
$(this).next("span").fadeIn(300).delay(1000).fadeOut(300);

}

});



});
