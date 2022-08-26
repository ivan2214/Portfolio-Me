const grande    = document.querySelector('.grande')
const puntos = document.querySelectorAll(".punto");

puntos.forEach((cadaPunto, posicion) => {
  puntos[posicion].addEventListener("click", () => {
    let posicionPunto = posicion;
    //posicion es 0 transformX es 0
    //posicion es 1 transformX es -100%
    //posicion es 2 transformX es -200%
    let operacion = posicionPunto * -33.3;
    grande.style.transform = `translateX(${operacion}%)`;
    puntos.forEach((cadaPunto, posicion) => {
      puntos[posicion].addEventListener("click", () =>{
        puntos[posicion].classList.remove("active")
        puntos[posicion].classList.add("active")
      });
    });
    
  });
});
