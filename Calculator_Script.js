const calculator = {
    numberKeys: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    signKeys: ["divide", "multiply", "substract", 'plus', "equal"],
    topRowKeys: ["allClear", "plusMinus", "percent"],
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    signs: ["/", "*", "-", "+", "="],
    topRow: [["AC", "C"], "* -1", "* 0.01"]
}   

const display = document.getElementById("display");

const decimal = document.getElementById("decimal");

const allClear = document.getElementById("allClear");
const plusMinus = document.getElementById("plusMinus");
const percent = document.getElementById("percent");

const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const plus = document.getElementById("plus");
const equal = document.getElementById("equal");

let storedNumOne = 0;
let storedNumTwo = undefined;
let storedSign = "";
let testSign = "5 * 5";


const numClicked = function() {
    for (let i = 0; i < calculator["numberKeys"].length; i++) {
        let currentNumId = document.getElementById(calculator["numberKeys"][i]);
        currentNumId.onclick = function() {
            if (display.innerHTML === "0") {
                display.innerHTML = calculator["numbers"][i];
                storedNumOne = calculator["numbers"][i];
                console.log(display.innerHTML, storedNumOne);
            } else {
                display.innerHTML += calculator["numbers"][i];
                storedNumOne = JSON.parse(display.innerHTML);
                console.log(display.innerHTML, storedNumOne);
            }
        }
    }
}

numClicked();

const equalsEtc = function() {
    if (storedSign === "/") {
        storedNumOne = storedNumOne / storedNumTwo;
        display.innerHTML = storedNumOne;
    } else if (storedSign === "*") {
        storedNumOne = storedNumOne * storedNumTwo;
        display.innerHTML = storedNumOne;
    } else if (storedSign === "+") {
        storedNumOne = storedNumOne + storedNumTwo;
        display.innerHTML = storedNumOne;
    } else if (storedSign === "-") {
        storedNumOne = storedNumOne - storedNumTwo;
        display.innerHTML = storedNumOne;
    }
}

const signClicked = function () {
    for (let i = 0; i < calculator["signKeys"].length; i++) {
        let currentSignId = document.getElementById(calculator["signKeys"][i]);
        currentSignId.onclick = function() {
            if (storedNumTwo === undefined && calculator["signs"][i] !== "=") {
                storedSign = calculator["signs"][i];
                console.log(storedSign);
            } else if (typeof storedNumTwo === "number") {
                equalsEtc();
            }
        }
    }
}

signClicked();


allClear.onclick = function() {
    display.innerHTML = "0";
    storedNumOne = 0;
    console.log(display.innerHTML, storedNumOne);
}



// git commit testZero (amended after clear mishap)

// git commit testZero v2