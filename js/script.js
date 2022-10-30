const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
}



for(let i = 0; i < 2; i++){
    const a = prompt('Last watched film?', ''),
    b = prompt('How will you rate this film?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50 ){
        personalMovieDB.movies[a] = b;
        console.log('done');
    }else{
        console.log('error');
        i--
    }
}

if(numberOfFilms < 10){
    alert("Просмотрено довольно мало фильмов")
}else if( numberOfFilms >= 10 && numberOfFilms <= 30){
    alert('Вы классический зритель')
}else if (numberOfFilms > 30){
    alert('Вы киноман')
}else{
    alert('Произошла ошибка')
}

console.log(personalMovieDB);