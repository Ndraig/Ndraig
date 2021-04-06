let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

comprar = confirm(`El alto es ${alto}, el ancho es:${ancho}`);

if (comprar) {
    alert("compra realizada exitosamente");
} {
    alert("compra cancelada");
}
