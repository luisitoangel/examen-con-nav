document.getElementById("inicio").style.display = "block";
document.getElementById("venta").style.display = "none";
document.getElementById("reporte").style.display = "none";
document.getElementById("cliente").style.display = "none";
document.getElementById("producto").style.display = "none";

function inicio() {
    document.getElementById("inicio").style.display = "block";
    document.getElementById("venta").style.display = "none";
    document.getElementById("reporte").style.display = "none";
    document.getElementById("cliente").style.display = "none";
    document.getElementById("producto").style.display = "none";
}
function venta() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("venta").style.display = "block";
    document.getElementById("reporte").style.display = "none";
    document.getElementById("cliente").style.display = "none";
    document.getElementById("producto").style.display = "none";
}
function reporte() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("venta").style.display = "none";
    document.getElementById("reporte").style.display = "block";
    document.getElementById("cliente").style.display = "none";
    document.getElementById("producto").style.display = "none";
}
function cliente() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("venta").style.display = "none";
    document.getElementById("reporte").style.display = "none";
    document.getElementById("cliente").style.display = "block";
    document.getElementById("producto").style.display = "none";
}
function producto() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("venta").style.display = "none";
    document.getElementById("reporte").style.display = "none";
    document.getElementById("cliente").style.display = "none";
    document.getElementById("producto").style.display = "block";
}
