'use strict'


/* const hamburger = 5 ;
const fries = 0 ;

if (hamburger && fries){
    console.log("I'm Full");
}
 */


/* const hamburger = 3;
const fries = 1 ;

if (hamburger === 3 && fries){
    console.log("Все сыты");
}else{
    console.log("Мы уходим");
} */


//////////////// OR || /////////////////////
//////////Как только находит правду то прекращает работу//////////////////
const hamburger = 3;
const fries = 0 ;
const cola = 0;

console.log(hamburger || cola || fries);

if (hamburger === 3 && fries){
    console.log("Все довольны");
}else{
    console.log("Мы уходим")
}


let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);