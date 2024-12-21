'use strict';

document.addEventListener("DOMContentLoaded", () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv  = document.querySelectorAll(".promo__adv img"),
          poster = document.querySelector(".promo__bg"),
          genre = poster.querySelector(".promo__genre"),
          moviesList = document.querySelector(".promo__interactive-list"),
          addForm = document.querySelector("form.add"),
          addInput = addForm.querySelector(".adding__input"),
          checkbox = addForm.querySelector('[type="checkbox"]'),
          deleteFilms = moviesList.querySelectorAll(".delete");

    console.log(deleteFilms)

    addForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = newFilm.substring(0,21) + "..."
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, moviesList);

            addForm.reset();
        }

    });
 
    const deleteAdv = (arr) => {
        arr.forEach(e => {
            e.remove();
        }); 
    };

    const makeChanges = () => {
        genre.textContent = "ДРАМА";
    
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";

        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += ` \
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        moviesList.querySelectorAll(".delete").forEach((deleteFilm, i) => {
            deleteFilm.addEventListener("click", () => { 
                deleteFilm.parentNode.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });

    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, moviesList);

});


