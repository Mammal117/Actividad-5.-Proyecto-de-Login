# Sistema Escolar - Login y Panel Interno

Proyecto desarrollado en equipo (2 integrantes) que simula el acceso a un sistema escolar mediante un login y un panel interno conectados entre si, usando HTML, CSS y JavaScript.

## Integrantes del equipo

- Ortiz Bautista Josue Ahuitz - Encargado del login
- Perez Cruz Haniel Eliud - Encargado del panel interno (index)


## Link de GitPages:  https://mammal117.github.io/Actividad-5.-Proyecto-de-Login/index.html


## Descripcion del proyecto

Este proyecto simula el flujo de acceso a un sistema, sin conexion a una base de datos real. Se utilizo **Bootstrap** como framework de CSS para el diseño, y JavaScript puro para las validaciones y la logica de la aplicacion.

El proyecto se divide en dos pantallas conectadas:

- **login.html**: pantalla de acceso con formulario de correo y contraseña. Valida los datos con funciones propias antes de dejar entrar al usuario.
- **index.html**: pantalla del sistema ya dentro, con sidebar, navbar y la funcionalidad de captura de usuarios, registro de alumnos y verificacion de edad.

## Como se conectan login e index

Cuando el usuario llena el formulario en login.html y los datos son validos, se guarda su correo en el almacenamiento local del navegador (localStorage), con la instruccion `localStorage.setItem("usuarioActivo", correo)`. Despues de eso, la pagina redirige automaticamente a index.html.

Ya dentro de index.html, el sistema revisa si existe ese dato guardado con `localStorage.getItem("usuarioActivo")`. Si no encuentra nada guardado, significa que nadie inicio sesion todavia, asi que manda de regreso a login.html. Si el dato si existe, lo toma y lo muestra en el navbar, para que se vea el nombre o correo del usuario que entro al sistema.

Esta misma logica es la que permite que, aunque GitHub Pages siempre cargue primero index.html en la direccion principal del sitio, el sistema detecte que no hay sesion iniciada y mande al usuario directo a login.html.

Cuando el usuario da clic en su nombre en el navbar y selecciona "Salir del sistema", se borra el dato guardado con `localStorage.removeItem("usuarioActivo")` y se regresa a login.html, simulando el cierre de sesion.

## Framework y librerias utilizadas

- **Bootstrap 5**: para la estructura visual, formularios, botones, sidebar (offcanvas), navbar y modal.
- **Bootstrap Icons**: para los iconos dentro de los campos del formulario (sobre, candado, ojo para mostrar/ocultar contraseña).
- **SweetAlert2**: para mostrar los mensajes de error, exito y confirmacion, en lugar de las alertas basicas del navegador.

## Metodos principales

Estos son los metodos mas importantes del proyecto y que hacen:

- **validarCorreo(correo)**: revisa que el correo tenga un formato valido (algo@algo.algo).
- **validarPassword(password)**: revisa que la contraseña tenga minimo 8 caracteres, con mayuscula, minuscula, numero y caracter especial.
- **soloLetras(texto)**: revisa que un texto contenga unicamente letras y espacios.
- **validarLongitud(numero, maxLongitud)**: revisa que un numero no tenga mas digitos de los permitidos.
- **calcularEdad(fechaNacimiento)**: calcula la edad de una persona a partir de su fecha de nacimiento.
- **esMayorDeEdad(fechaNacimiento)**: usa calcularEdad para saber si la persona ya es mayor de edad.
- **generarNombreUsuario(nombreCompleto)**: genera un nombre de usuario a partir del nombre completo de la persona.
- **validarTelefono(telefono)**: revisa que un numero de telefono tenga 10 digitos.
- **iniciarSesion()**: junta las validaciones de correo y contraseña, guarda el usuario activo y redirige al sistema.
- **togglePassword()**: muestra u oculta el texto de la contraseña al dar clic en el icono del ojo.

Todas las funciones de validacion viven en el archivo `js/utileria.js`, para que ambos integrantes las puedan usar tanto en login.html como en index.html sin repetir codigo.

## Proceso de creacion

1. Se definio la estructura de carpetas del proyecto (css, js, img) y se repartieron las tareas: un integrante se encargo del login y el otro del index.
2. Se creo el archivo `utileria.js` con las funciones de validacion que ambas pantallas iban a necesitar, para no duplicar codigo.
3. Se construyo login.html usando Bootstrap para el formulario, reemplazando el diseño anterior hecho con CSS puro.
4. Se agregaron iconos a los campos del formulario (correo, contraseña) usando Bootstrap Icons, incluyendo un boton para mostrar/ocultar la contraseña.
5. Se conecto la logica de login.js para validar los datos con las funciones de utileria.js, mostrar mensajes con SweetAlert2, y guardar el correo del usuario en localStorage al iniciar sesion correctamente.
6. Se construyo index.html con Bootstrap, incluyendo el sidebar con boton hamburguesa, el submenu de Usuarios con la opcion Captura, el formulario de registro de alumnos con numero de control, y el modal para verificar la edad.
7. Se agrego la logica para que index.html revise si hay un usuario activo guardado; si no lo hay, redirige de vuelta a login.html.
8. Se agrego el navbar de index.html mostrando el correo del usuario activo, con un menu desplegable para salir del sistema.
9. Se hicieron pruebas del flujo completo: entrar a login, validar datos incorrectos, iniciar sesion correctamente, navegar dentro del sistema, y cerrar sesion.
10. Se organizo el repositorio con las carpetas correspondientes y se subio a GitHub, activando GitHub Pages para la version en linea.

## Estructura del repositorio

```
├── README.md
├── login.html
├── index.html
├── css/
│   ├── login.css
│   └── estilos.css
├── js/
│   ├── utileria.js
│   ├── login.js
│   └── app.js
└── img/
```

## Capturas de pantalla

A continuacion se muestran capturas del flujo completo funcionando.

### Pantalla de login

<img width="617" height="845" alt="image" src="https://github.com/user-attachments/assets/d73b923b-4f97-4078-b435-795cb7453948" />


### Validacion de datos incorrectos

<img width="641" height="460" alt="image" src="https://github.com/user-attachments/assets/f0dfb6ab-eab1-40ba-a810-239fd68fc254" />


### Acceso exitoso
<img width="880" height="827" alt="image" src="https://github.com/user-attachments/assets/ca0f49f3-8bef-4fae-a1de-720f323e03fa" />



### Panel interno (index) con navbar y sidebar

<img width="1912" height="751" alt="image" src="https://github.com/user-attachments/assets/6df3e929-5d7a-4dff-8259-cf4488e8c7e2" />


### Captura de usuario

<img width="1916" height="728" alt="image" src="https://github.com/user-attachments/assets/765f9785-3df7-4f6a-9ca0-43cf972e402b" />


### Registro de alumno con numero de control

<img width="491" height="132" alt="image" src="https://github.com/user-attachments/assets/928a4d74-7887-467d-860e-55498078ad86" />


### Modal de verificacion de edad

<img width="1122" height="715" alt="image" src="https://github.com/user-attachments/assets/b5f5e87e-4770-494d-ac40-96161e2d9bb3" />


### Cierre de sesion

<img width="361" height="202" alt="image" src="https://github.com/user-attachments/assets/adb88cfb-e4b5-444f-90af-7dcb718557e7" />


## Enlaces

- Repositorio en GitHub: https://github.com/Mammal117/Actividad-5.-Proyecto-de-Login.git
- Sistema en GitHub Pages: 
