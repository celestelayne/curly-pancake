console.log("main.js");
/* 

Instructions: when a user clicks on one of the colored dots, the    background color of the entire page changes to match that dot. You should not need to change any HTML or CSS. 

Hint: Classes for each color have already been defined in the CSS tab.

*/

// 1 -- Select each button

let grayBtn = document.getElementById("grayButton");
let yellowBtn = document.getElementById("yellowButton");
let whiteBtn = document.getElementById("whiteButton");
let blueBtn = document.getElementById("blueButton");

// 3 -- Write an event handler to change the color of the page when each circle is pressed.

function switchToGray() {
    let body = document.querySelector("body");
    // body.className = "gray-theme";
    body.style.backgroundColor = "gray";
    body.style.color = "white";
}

function switchToYellow() {
    let body = document.querySelector("body");
    body.className = "yellow-theme";
    // body.style.backgroundColor = "yellow";
}

function switchToWhite() {
    let body = document.querySelector("body");
    body.className = "white-theme";
    // body.style.backgroundColor = "white";
    body.style.color = "black";
}

function switchToBlue() {
    let body = document.querySelector("body");
    body.className = "blue-theme";
    body.style.color = "white"; 
}

// 2 -- Add an event listener to each circle
grayBtn.addEventListener("click", switchToGray);
yellowBtn.addEventListener("click", switchToYellow);
whiteBtn.addEventListener("click", switchToWhite);
blueBtn.addEventListener("click", switchToBlue);
