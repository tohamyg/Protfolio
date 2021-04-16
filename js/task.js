
/*
myDiv=document.getElementById('add');
console.log(myDiv.childElementCount);

var myNewElement=document.createElement('div');
 myDiv.appendChild(myNewElement);
myNewElement.classList.add('text');
*/
/*
var myDiv=document.getElementById('add'),
    myBtn=document.getElementById('btn');

myBtn.onclick=function(){

this.parentNode.style.display='none';

}
*/
/*
var myFristDiv=document.getElementById('test1');

myFristDiv.onclick =  function() {

document.body.scrollTop += 100;

console.log(document.body.scrollTop )
};
*/
/*
var myDiv = document.createElement('div');
document.body.appendChild(myDiv);
*/



/************************************start change color****************************************/

/*

var myL=document.querySelectorAll('.color-switcher li');

var myA=[];

for( var i=0;i<myL.length;i++ ){

myA.push(myL[i].getAttribute('data-color'));

myL[i].addEventListener('click' ,

 function(){

document.body.classList.remove(...myA);

document.body.classList.add(this.getAttribute('data-color'));

localStorage.setItem('pageColor',this.getAttribute('data-color'));

},false);
/

}
console.log(myA);

*/



/************************************ end change color****************************************/

/********************************************  شرح حساب عدد الtextarea باستخدام oninput *****************************************/
/*

var $count=document.getElementById('count'),
    $text=document.getElementById('text'),
    $maxlength=$text.getAttribute('maxlength');

$text.oninput=function(){

$count.innerHTML= $maxlength - this.value.length;

}
*/
/* placeholder remove and add*/
/*
var myInput=document.getElementById('myInput');
myInput.onfocus=function(){
this.setAttribute('data-input',this.getAttribute('placeholder'));
this.setAttribute("placeholder",'');
}
myInput.onblur=function(){
this.setAttribute('placeholder',this.getAttribute('data-input'));
this.setAttribute("data-input" , ' ');
}
*/

/*ظهور نص ف مكان معين */
/*
var myText="Hello from Java script";
var myButton=document.getElementById('myBtn');
var i=0;
window.onload=function(){


var test=setInterval(function(){

document.getElementById('type').textContent += myText[i];
i++;
if( i > myText.length-1){

clearInterval(test);

}

},200);

};
*/
/*
myBtn=document.getElementById('goup');

window.onscroll=function(){

if(window.pageYOffset >=800){
  myBtn.style.display='block';
}
else{
  myBtn.style.display='none';

}
//console.log(window.pageYOffset)

};

myBtn.onclick=function(){

window.scrollTo(0,0);

}
*/
/*
function arrayR(string){

var old=string.split(' ');
var newA=[ ];
for(var i=0 ; i<old.length ;i++){

newA.push(old[i].charAt(0).toUpperCase() + old[i].slice(1));

}

return newA.join(' ');


}

console.log(arrayR('mahmoud talaat mohmoud'));
*/

/*

if(window.location.hash){
  console.log('Good hash');
}
else{
  console.log('bad hash');
}
*/
/*  serial number
 function serialNum(){
    var mytextserial="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    mypara=document.getElementById('para'),
    myserialLeng=20,
    mySerial=' ',
    randomSerial;



  for(var i = 0 ; i < myserialLeng ; i=i+1){
  randomSerial=Math.floor(Math.random() * mytextserial.length );

  mySerial += mytextserial.substring( randomSerial , randomSerial + 1) ;

   };

mypara.innerHTML= mySerial;

   };
*/
