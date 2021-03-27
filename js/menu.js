let btnMenu=document.getElementById("btnmenu"); /*capturamos el objeto boton de menu*/
let menux=document.getElementById("menu"); /*capturamos el objeto menu*/



btnMenu.addEventListener("click",function(){
    'use strict';
    menux.classList.toggle('mostrar');
})