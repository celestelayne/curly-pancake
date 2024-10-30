/*
    FUNCTION SYNTAX
*/


function sayHello() {
    document.write('Hello');
}

sayHello();

/*
    CONDITIONAL SYNTAX
*/

let valueOne = 11;
let valueTwo = 11;

if(valueOne === valueTwo) {
    // do something
    console.log("yay! they are equal")
} else {
    // do something else
    console.log("they are not equal")
}

/*
    FOR LOOP
*/

let fruits = ['apple', 'banana', 'orange', 'kiwi', 'grapes'];

for(let i = 0; i < fruits.length; i++){
    if(fruits[i] === 'orange') { break }
    console.log("Total fruits", fruits[i]);
}