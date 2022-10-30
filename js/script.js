
// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length,
// а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив
// Место для первой задачи
/* function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    // Пишем решение вот тут
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i])
    }
    
    // Не трогаем
    return result;
} */


// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
// Место для второй задачи

/*  function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    // Пишем решение вот тут
    for(let i = 0; i < data.length; i++){
        if(typeof data[i] === 'number'){
            data[i] *= 2;
        }else if (typeof data[i] === 'string'){
            data[i] += ' - done'
        }
    }
    //Не трогаем
      console.log(data);
}
secondTask() 
 */



// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//     for(let i = data.length-1; i >= 0; i--){
//         result.push(data[i])
//     }
//     // Пишем решение вот тут
//     console.log(result);
    
//     // Не трогаем
//     return result;
// } 

// thirdTask()