//alert('click aqui');


//var btnMenu = document.getElementsByClassNome('btn-menu');
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

//consele.log(btnMenu);

//Eventos


btnMenu.addEventListener('click',function(){

    //alert('ok');
    //cnsole.log(menu.classList);
    menu.classList.toggle('menu-open');
    this.classList.toggle('x');/*this e o btnMenu*/



})
