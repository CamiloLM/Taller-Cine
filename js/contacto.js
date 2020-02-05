if (localStorage.getItem("Usuario") != null) {
    let usuario = document.querySelector('.nombreUsuario')
    usuario.innerHTML = localStorage.getItem("Usuario")
    let boton = document.querySelector('.formulario form button')
    boton.innerText = "Salir"
}