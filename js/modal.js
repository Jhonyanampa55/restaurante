/*Con esta linea capturamos todas las imagenes que pertenecen a la clase gallery__img*/
let imagenes = document.querySelectorAll('.gallery__img'); 

/*Con esta linea capturamos el objeto modal por su ID*/
let modal = document.querySelector('#modal');

let img = document.querySelector('#modal__img')

let boton=document.querySelector("#modal__boton");


for (let i =0; i < imagenes.length; i++){
    imagenes[i].addEventListener('click', function(e){
        modal.classList.toggle("modal--open"); //la propiedad toggle agrega una clase solo si no exite la clase, en caso que exista la clase, la quita
        // img.src=e.target.src;
        img.setAttribute("src", e.target.src);
        
    });
}

boton.addEventListener("click", function(){
    modal.classList.toggle("modal--open");
})