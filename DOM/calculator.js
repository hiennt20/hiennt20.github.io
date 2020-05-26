let currDisplay = document.getElementById("display");
let varHistory = document.getElementById("history");

let numBtns = document.querySelectorAll(".number-button");
let opBtns = document.querySelectorAll(".operator-button");

let operator = "";
let preOperator = "";
let number1 = 0;
let number2 = 0;
let isEqualPress = false;
let isOperatorPress = false;
let isFunctionPress = false;
let isCommaPress = false;

//number
for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener('click', () => {
        if (isEqualPress || isOperatorPress || isFunctionPress || currDisplay.value === "0") {
            currDisplay.value = numBtns[i].innerText;
            isEqualPress = false;
            isOperatorPress = false;
            isFunctionPress = false;
        } else {
            currDisplay.value += numBtns[i].innerText;
        }

    })
}
