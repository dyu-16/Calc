const calculator = {
    numberKeys: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    signKeys: ["divide", "multiply", "subtract", "plus", "equal"],
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

let startState = true;
let storedNumOne = 0;
let storedNumTwo = undefined;
let storedSign = "";

const masterConsole = function() {
    console.log("Display: " + display.innerHTML, "storedNumOne: " + storedNumOne, "storedNumTwo: " + storedNumTwo, "storedSign: " + storedSign, "startState: " + startState);
}

const numClicked = function() {
    for (let i = 0; i < calculator["numberKeys"].length; i++) {
        let currentNumId = document.getElementById(calculator["numberKeys"][i]);
        currentNumId.onclick = function() {
            if (storedNumOne === 0 && startState === true) {
                display.innerHTML = calculator["numbers"][i];
                storedNumOne = calculator["numbers"][i];
                startState = false;
                masterConsole();
            } else if (storedNumOne !== 0 && startState === false) {
                display.innerHTML = calculator["numbers"][i];

            } else {
                display.innerHTML += calculator["numbers"][i];
                storedNumOne = JSON.parse(display.innerHTML);
                masterConsole();
            }
        }
    }
}

numClicked();

allClear.onclick = function() {
    display.innerHTML = "0";
    storedNumOne = 0;
    storedNumTwo = undefined;
    storedSign = "";
    startState = true;
    masterConsole();
}


const equalsEtc = function() {

    const softReset = function () {
        storedNumTwo = undefined;
        display.innerHTML = storedNumOne;
        masterConsole();
    }

    if (storedSign === "/") {
        storedNumOne = storedNumOne / storedNumTwo;
        softReset();
    } else if (storedSign === "*") {
        storedNumOne = storedNumOne * storedNumTwo;
        softReset();
    } else if (storedSign === "+") {
        storedNumOne = storedNumOne + storedNumTwo;
        softReset();
    } else if (storedSign === "-") {
        storedNumOne = storedNumOne - storedNumTwo;
        softReset();
    }
}

const signClicked = function () {
    for (let i = 0; i < calculator["signKeys"].length; i++) {
        let currentSignKey = calculator["signKeys"][i];
        let currentSignKeyId = document.getElementById(currentSignKey);
        currentSignKeyId.onclick = function() {
            console.log(currentSignKey + " clicked");
            if (storedNumTwo === undefined && calculator["signs"][i] !== "=") {
                storedSign = calculator["signs"][i];
                display.innerHTML = "0";
                console.log(storedSign);
            } else if (typeof storedNumTwo === "number") {
                equalsEtc();
            }
        }
    }
}

signClicked();






// git commit testZero (amended after clear mishap)

// git commit testZero v2