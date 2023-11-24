// JavaScript para la animación del corazón
const corazon = document.getElementById("corazon");
function volar() {
    let x = 50; // Posición inicial X
    let y = 50; // Posición inicial Y
    let angle = 0; // Ángulo inicial
    const radio = 50; // Radio de la órbita, ajusta según sea necesario
    function animar() {
        angle += 0.01; // Velocidad de rotación
        const offsetX = Math.sin(angle) * radio;
        const offsetY = Math.cos(angle) * radio;
        x = 50 + offsetX;
        y = 50 - offsetY;
        corazon.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
        requestAnimationFrame(animar);
    }
    animar();
}
volar(); // Iniciar la animación cuando se carga la página
//Botón que hace scroll hacia top
// Obtén el botón de scroll top
var btnScrollTop = document.getElementById("btn-scroll-top");
// Agrega un evento de clic al botón
btnScrollTop.addEventListener("click", function() {
    // Desplázate suavemente hacia la parte superior de la página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Agrega un evento de desplazamiento para mostrar u ocultar el botón
window.addEventListener("scroll", function() {
    // Si el desplazamiento es mayor que 500px, muestra el botón; de lo contrario, ocúltalo
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) btnScrollTop.style.display = "block";
    else btnScrollTop.style.display = "none";
});

//# sourceMappingURL=index.de5c0784.js.map
