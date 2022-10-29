const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
}

/* let askFilm = prompt('Last watched film?')
let ratingFilm = prompt('How will you rate this film?')
personalMovieDB.movies[askFilm] = ratingFilm

askFilm = prompt('Last watched film?')
ratingFilm = prompt('How will you rate this film?')
personalMovieDB.movies[askFilm] = ratingFilm

console.log(personalMovieDB.movies); */

///////////////////////////////////////////////////////////////
const a = prompt('Last watched film?'),
        b = prompt('How will you rate this film?'),
        c = prompt('Last watched film?'),
        d = prompt('How will you rate this film?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);