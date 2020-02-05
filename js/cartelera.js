const contenedorCartelera = document.querySelector(".cartelera");
const key = "e809586c3180988d9a8bbbba0536c511";
const cartelera = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&page=1`

jQuery.ajax(cartelera, {
    method: "GET",
    success: function(response) {
        for (let index = 0; index < 16; index++) {
            const element = response.results[index];
            console.log(index)
            contenedorCartelera.innerHTML += `
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
        console.log("Error en cartelera");
    }
});

if (localStorage.getItem("Usuario") != null) {
    let usuario = document.querySelector('.nombreUsuario')
    usuario.innerHTML = localStorage.getItem("Usuario")
    let boton = document.querySelector('.formulario form button')
    boton.innerText = "Salir"
}