/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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
    
    const adv = document.querySelectorAll(".promo__adv img"),
          genre = document.querySelector(".promo__genre"),
          poster = document.querySelector(".promo__bg"),
          filmList = document.querySelector(".promo__interactive-list"),
          addForm = document.querySelector("form.add"),
          addInput = addForm.querySelector("input.adding__input"),
          checkbox = addForm.querySelector("[type='checkbox']");


    addForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
               newFilm = `${newFilm.substring(0 , 22)}...`
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, filmList);

            e.target.reset();
        }

    });

    function createMovieList(films, parent) {

        parent.innerHTML = "";
    
        films.forEach((item, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i+1}.${item}
            <div class="delete"></div>
            </li>`
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
            });
        });
    
    }

    function removeAdv(arr) {
        arr.forEach(item => {
            item.remove();
        });
    }

    const makeChanges = () => {
        genre.textContent = "Драма";
        poster.style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    }

    removeAdv(adv);
    makeChanges();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, filmList);

});









