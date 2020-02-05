const contenedorEstrenos = document.querySelector(".estrenos");
const key = "e809586c3180988d9a8bbbba0536c511";
const estrenos = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&page=1`

jQuery.ajax(estrenos, {
    method: "GET",
    success: function(response) {
        for (let index = 3; index < 19; index++) {
            const element = response.results[index];
            contenedorEstrenos.innerHTML += `
            <div class="col-6 mb-2">
                <div class="card">
                    <img src="http://image.tmdb.org/t/p/w780${element.backdrop_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.overview}</p>
                    </div>
                </div>
            </div>`;            
        };
    },
    error: function() {
        console.log("Error en estrenos");
    }
});

if (localStorage.getItem("Usuario") != null) {
    let usuario = document.querySelector('.nombreUsuario')
    usuario.innerHTML = localStorage.getItem("Usuario")
    let boton = document.querySelector('.formulario form button')
    boton.innerText = "Salir"
}