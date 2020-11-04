"use strict";

let $ = function (id) {
    return document.getElementById(id);
};
let processEntry = function() {
    CONST ERRMSG = "Income must be a valid number greater than or equal to zero"

    let income =$("income").value;

        if (isNaN(income) || (income <= 0)) {
            alert (ERRMSG);
        }
        else {
            income = Math.cell(parseFloat(income));
            $("tax").value = calculateTax(income);
        }
        $("income").focus();
    }
let calculateTax = function(income) {
    let tax = 0;

    if (income <= 9275) {
        tax = income * .1;
    }
    else if ((income > 9275) && (income <= 37650)) {
        tax = 927.50 + ((income - 9275) * .15);
    }
    else if ((income > 37650) && (income <= 91150)) {
        tax = 5193.75 + ((income - 37650) * .25);
    }
    else if ((income > 91150) && (income <= 190150)) {
        tax = 18558.75 + ((income - 91150) * .28);
    }
    else if ((income > 190150) && (income <= 413350)) {
        tax = 46275.75 + ((income - 190150) * .33);
    }
    else if ((income > 413350) && (income <= 415050)) {
        tax = 119934.75 + ((income - 415050) * .35);
    }
    else if (income > 415050) {
        tax = 120529.75 + ((income - 415050) * .396);
    }

    tax= tax.toFixed(2)
}


window.onload = function () {
    $("calculate").onclick = processEntry;
};