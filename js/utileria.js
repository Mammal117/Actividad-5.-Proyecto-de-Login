// Libreria de utileria: SOLO funciones puras de validacion.
// No debe tener nada de document.getElementById aqui, para que
// tanto login.html como index.html la puedan usar sin conflictos.
function validarCorreo(correo) {
    if (typeof correo !== "string") return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(correo.trim());
}
function soloLetras(texto) {
    if (typeof texto !== "string" || texto.trim() === "") return false;
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return regex.test(texto);
}
function validarLongitud(numero, maxLongitud) {
    if (typeof numero !== "number" || isNaN(numero)) return false;
    const cantidadDigitos = Math.abs(Math.trunc(numero)).toString().length;
    return cantidadDigitos <= maxLongitud;
}
function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    if (isNaN(nacimiento.getTime())) return -1;
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const noHaCumplidoAnios =
        hoy.getMonth() < nacimiento.getMonth() ||
        (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate());
    if (noHaCumplidoAnios) {
        edad--;
    }
    return edad;
}
function esMayorDeEdad(fechaNacimiento) {
    const edad = calcularEdad(fechaNacimiento);
    if (edad === -1) return false;
    return edad >= 18;
}
function validarPassword(password) {
    if (typeof password !== "string") return false;
    const tieneLongitudMinima = password.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    return tieneLongitudMinima && tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial;
}
function generarNombreUsuario(nombreCompleto) {
    if (typeof nombreCompleto !== "string" || nombreCompleto.trim() === "") return "";
    const sinAcentos = nombreCompleto
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    const soloLetrasYEspacios = sinAcentos.replace(/[^a-z\s]/g, "");
    const nombreUnido = soloLetrasYEspacios.replace(/\s+/g, "");
    const numeroAleatorio = Math.floor(Math.random() * 900) + 100;
    return nombreUnido + numeroAleatorio;
}
function validarTelefono(telefono) {
    if (typeof telefono !== "string") return false;
    const soloDigitos = telefono.replace(/[\s-]/g, "");
    const regex = /^[0-9]{10}$/;
    return regex.test(soloDigitos);
}
function capitalizar(texto) {
    if (typeof texto !== "string" || texto.trim() === "") return "";
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}