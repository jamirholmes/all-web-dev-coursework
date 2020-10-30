'use strict';

const MINAMT = 1;
const MAXAMT = 99;
const ERRMSG = "Entry must be > 0 and <=100";
let $ = function(id) {
    return document.getElementById(id);
};

let processEntry = function() {
    //grab value from textbox
    let entry = $("cents").value;

    //attempt to convert value to integer
    let cents = parseInt(entry);

    if (isNaN(entry) || (entry < MINAMT) || (entry > MAXAMT)) {
        alert (ERRMSG);
        $("cents").value = "";

    }
    else {
        makeChange(cents);
    }
}

let makeChange = function(cents) {
    let numQuarters = 0;
    let numDimes = 0;
    let numNickels = 0;
    let numPennies = 0;
    let changeLeft = 0;

    //num of quarters
    numQuarters = Math.floor(cents / 25);
    changeLeft = Math.floor(cents % 25);

    //num of dimes
    numDimes = Math.floor(changeLeft / 10);
    changeLeft = Math.floorchangeLeft % 10);

    //num of nickels and pennies
    numNickles = changeLeft / 5;
    numPennies = changeLeft % 5;

    //display amounts in respective boxes
    $("quarters").value = numQuarters;
    $("dimes").value = numDimes;
    $("nickels").value = numNickels;
    $("quarter").value = numPennies;

}

//on load
window.onload = function() {
    $("Calculate").onclick = processEntry;
    $("cents").focus();
}
;