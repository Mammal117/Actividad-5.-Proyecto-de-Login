let alumnos = [];

let modalEdadInstancia;

function verificarSesion() {
    const correoActivo = localStorage.getItem('usuarioActivo');

    if (!correoActivo) {
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('correoUsuarioActivo').textContent = correoActivo;
}



function cerrarSesion() {
    Swal.fire({
        title: '¿Cerrar sesión?',
        text: 'Tendrás que iniciar sesión de nuevo para volver a entrar.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, salir',
        cancelButtonText: 'Cancelar'
    }).then(function (resultado) {
        if (resultado.isConfirmed) {
            localStorage.removeItem('usuarioActivo');
            window.location.href = 'login.html';
        }
    });
}

function mostrarSeccion(nombreSeccion) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function (seccion) {
        seccion.classList.add('d-none');
    });

    document.getElementById('seccion' + capitalizar(nombreSeccion)).classList.remove('d-none');
}



function registrarAlumno() {
    const nombre = document.getElementById('nombreAlumno').value.trim();
    const numeroControlTexto = document.getElementById('numeroControl').value.trim();
    const telefono = document.getElementById('telefonoAlumno').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimientoAlumno').value;

    if (!soloLetras(nombre)) {
        Swal.fire('Nombre inválido', 'El nombre solo debe contener letras y espacios.', 'error');
        return;
    }

    const numeroControl = Number(numeroControlTexto);
    if (numeroControlTexto === '' || isNaN(numeroControl) || !validarLongitud(numeroControl, 8)) {
        Swal.fire('Número de control inválido', 'Debe ser un número de máximo 8 dígitos.', 'error');
        return;
    }

    if (!validarTelefono(telefono)) {
        Swal.fire('Teléfono inválido', 'El teléfono debe tener exactamente 10 dígitos.', 'error');
        return;
    }

    if (fechaNacimiento === '') {
        Swal.fire('Fecha requerida', 'Ingresa la fecha de nacimiento del alumno.', 'error');
        return;
    }

    const edad = calcularEdad(fechaNacimiento);
    if (edad === -1) {
        Swal.fire('Fecha inválida', 'La fecha de nacimiento ingresada no es válida.', 'error');
        return;
    }

    const esMayor = esMayorDeEdad(fechaNacimiento);

    const usuarioGenerado = generarNombreUsuario(nombre);

    const nuevoAlumno = {
        id: Date.now(),
        nombre: nombre,
        numeroControl: numeroControlTexto,
        usuario: usuarioGenerado,
        telefono: telefono,
        edad: edad,
        esMayor: esMayor
    };

    alumnos.push(nuevoAlumno);

    renderizarTablaAlumnos();
    limpiarFormularioAlumno();
    mostrarModalEdad(nuevoAlumno);
}


function limpiarFormularioAlumno() {
    document.getElementById('nombreAlumno').value = '';
    document.getElementById('numeroControl').value = '';
    document.getElementById('telefonoAlumno').value = '';
    document.getElementById('fechaNacimientoAlumno').value = '';
}



function renderizarTablaAlumnos() {
    const tabla = document.getElementById('tablaAlumnos');
    const mensajeSinAlumnos = document.getElementById('mensajeSinAlumnos');

    tabla.innerHTML = '';

    if (alumnos.length === 0) {
        mensajeSinAlumnos.style.display = 'block';
        return;
    }

    mensajeSinAlumnos.style.display = 'none';

    alumnos.forEach(function (alumno) {
        const fila = document.createElement('tr');
        fila.innerHTML =
            '<td>' + alumno.nombre + '</td>' +
            '<td>' + alumno.numeroControl + '</td>' +
            '<td><code>' + alumno.usuario + '</code></td>' +
            '<td>' + alumno.telefono + '</td>' +
            '<td>' + alumno.edad + ' años</td>' +
            '<td><button class="boton-eliminar-alumno" onclick="eliminarAlumno(' + alumno.id + ')"><i class="bi bi-trash-fill"></i></button></td>';
        tabla.appendChild(fila);
    });
}


function eliminarAlumno(id) {
    Swal.fire({
        title: '¿Eliminar alumno?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then(function (resultado) {
        if (resultado.isConfirmed) {
            alumnos = alumnos.filter(function (alumno) {
                return alumno.id !== id;
            });
            renderizarTablaAlumnos();
        }
    });
}



function mostrarModalEdad(alumno) {
    document.getElementById('modalNombreAlumno').textContent = alumno.nombre;
    document.getElementById('modalEdadValor').textContent = alumno.edad;

    const estadoEdad = document.getElementById('modalEstadoEdad');
    if (alumno.esMayor) {
        estadoEdad.textContent = 'Mayor de edad';
        estadoEdad.className = 'badge estado-edad mayor';
    } else {
        estadoEdad.textContent = 'Menor de edad';
        estadoEdad.className = 'badge estado-edad menor';
    }

    modalEdadInstancia.show();
}


document.addEventListener('DOMContentLoaded', function () {
    verificarSesion();
    modalEdadInstancia = new bootstrap.Modal(document.getElementById('modalEdad'));
    renderizarTablaAlumnos();
});
