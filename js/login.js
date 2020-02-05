const boton = document.querySelector('.btn')
const usuario = document.querySelector('#exampleInputEmail1')
const contraseña = document.querySelector('#exampleInputPassword1')

localStorage.clear();

boton.addEventListener('click', function () {
    localStorage.setItem("Usuario", usuario.value)
    localStorage.setItem("Contraseña", contraseña.value)
    if (usuario.value!='' && contraseña.value!='') {
        window.location.href = "index.html";
    } else {
        alert('Por favor ingrese los dos campos')
    }
})