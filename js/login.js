// Logica propia de la pantalla de login (esto SI puede tener document.getElementById)

// Muestra u oculta el texto de la contraseña al dar clic en el icono del ojo
function togglePassword() {
    const inputPassword = document.getElementById("password");
    const icono = document.getElementById("iconoOjo");

    const esTipoPassword = inputPassword.type === "password";
    inputPassword.type = esTipoPassword ? "text" : "password";

    icono.classList.toggle("bi-eye-fill", !esTipoPassword);
    icono.classList.toggle("bi-eye-slash-fill", esTipoPassword);
}

function iniciarSesion() {
    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value;

    // Usamos las funciones de utileria.js para validar
    if (!validarCorreo(correo)) {
        Swal.fire("Correo inválido", "El correo no tiene un formato válido.", "error");
        return;
    }

    if (!validarPassword(password)) {
        Swal.fire(
            "Contraseña inválida",
            "La contraseña necesita mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres.",
            "error"
        );
        return;
    }

    // Guardamos el correo para que index.html sepa quien inicio sesion
    localStorage.setItem("usuarioActivo", correo);

    Swal.fire({
        title: "Acceso exitoso",
        text: "Bienvenido/a, " + correo + ". Tu sesión se inició correctamente.",
        icon: "success",
        timer: 1400,
        showConfirmButton: false
    }).then(function () {
        // Redirige al sistema una vez cerrada la alerta
        window.location.href = "index.html";
    });
}