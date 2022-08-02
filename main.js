var buyBtns = document.querySelectorAll('.js-btn');
var modal = document.querySelector('.modal');
var modalClose = document.querySelector('.modal-close');

function SHOW(){
    modal.classList.add('open');
}
function CLOSE(){
    modal.classList.remove('open');
}

for(var buyBtn of buyBtns){
    buyBtn.addEventListener('click' , SHOW);
}
modalClose.addEventListener('click' , CLOSE);


// javascrip moblie 
var header = document.querySelector('#header')
var menu = document.querySelector('.menu');
var menuItems = document.querySelectorAll('.nav li a[href*="#"]');

menu.onclick = function (){
   var isHeight = header.clientHeight ===46 ;
   if(isHeight){
    header.style.height = 'auto';
   }else {
    header.style.height = '46px';
   }



}

for(var menuItem of menuItems){
    menuItem.onclick = function(){
    header.style.height = '46px';
}
}



