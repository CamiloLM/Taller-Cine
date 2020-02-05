const contenedorCartelera = document.querySelector(".cartelera");
const contenedorEstrenos = document.querySelector(".estrenos");
const key = "e809586c3180988d9a8bbbba0536c511";
const cartelera = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&page=1`;
const estrenos = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&page=1`

jQuery.ajax(cartelera, {
    method: "GET",
    success: function(response) {
        for (let index = 0; index < 4; index++) {
            const element = response.results[index]
            contenedorCartelera.innerHTML += `
            <div class="col-3 mt-2">
                <div class="card" style="width: 15rem;">
                    <img src="http://image.tmdb.org/t/p/w300${element.poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text"><b>Fecha de estreno:</b></p>
                        <p class="card-text">${element.release_date}</p>
                        <a href="#" class="btn btn-primary">Saber mas</a>
                    </div>
                </div>
            </div>`;
        };
    },
    error: function() {
        console.log("Error en cartelera");
    }
});

jQuery.ajax(estrenos, {
    method: "GET",
    success: function(response) {
        for (let index = 2; index < 6; index++) {
            const element = response.results[index]
            contenedorEstrenos.innerHTML += `
            <div class="col-3 mt-2">
                <div class="card" style="width: 15rem;">
                    <img src="http://image.tmdb.org/t/p/w300${element.poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text"><b>Fecha de estreno:</b></p>
                        <p class="card-text">${element.release_date}</p>
                        <a href="#" class="btn btn-primary">Saber mas</a>
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