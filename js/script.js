/////ВЛОЖЕННЫЕ ЦИКЛЫ/////

/* for(let i = 0; i < 3; i++){
    console.log(i);

    for(let j = 4; j < 7; j++){
        console.log(j);
    }
}

 */

/////////////////EXERCISE WITH TREE////////////
/* let result = '';
const length = 7;

for(let i = 1; i < length; i++){

    for(let j = 0; j < i; j++){
        result += '*'
    }

    result += '\n';
}
console.log(result); */
////////////////////////////////////

///////Метки///////

/* first : for(let i = 0; i < 3; i++){
    console.log(`First level : ${i}`);

    for(let j = 0; j < 3; j++){
        console.log(`Second level : ${j}`);
        
        for(let k = 0; k < 5; k++){
            if (k === 2) continue first;
            console.log(`Third level : ${k}`);
        }
    }
}
 */


///////////PRACTICE WITH CYCLES AND LABELS//////////////

/* При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

При помощи цикла for выведите чётные числа от 2 до 10 включительно */

//  for(let i = 5; i <= 10; i++){
//     console.log(i);
// } 

// for(let i = 20; i >= 10; i--){
//     if(i === 13){
//         break
//     }
//     console.log(i);
// }

// for(let i = 2; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }else{
//         continue
//     }
// }




// let i = 2
// while(i <= 16){
    
//     if(i % 2 === 0){
//         i++;
//         continue
//     }else{
//         console.log(i);
//     }
//     i++
// } 

// let array = [];

// for(let i = 5; i <= 10; i++){
//     array.push(i)
// }
// console.log(array);


