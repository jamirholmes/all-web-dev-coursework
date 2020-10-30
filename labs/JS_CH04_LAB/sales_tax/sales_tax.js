'use strict';

const MINSUBTOTAL = 0.01;
const MAXSUBTOTAL = 10000.00;
const MINTAXRATE  = 1;
const MAXTAXRATE  = 12;

let $ = function (id) {
    return document.getElementById(id); 
};

let processEntries = function(){
    const SUBTOTALMSG = "Subtotal must be >0 and <=10000.00";
    const TAXRATEMSG = "Tax rate must be >=1 and <=12";
    
    let taxRate = parseFloat($("tax_rate").value);
    let total = 0;
    let salestax = 0;
    let subtotal = parseFloat ($("subtotal").value);

    //validate subtotal
    if (isNaN(subtotal) || (subtotal < MINSUBTOTAL) || (SUBTOTAL > MAXSUBTOTAL)) {
        alert(SUBTOTALMSG);
        clearSubtotal ();
    }
    //validate tax rate
    else if (isNaN(tax_rate) || (tax_rate < MINTAXRATE) || (tax_rate >MAXTAXRATE)) {
        alert(TAXRATEMSG);
        clearRate();
    }
    //both valid calculate total
    else {
        salesTax = subtotal * (taxRate / 100);
        total = subtotal + salesTax;
    }
    //display results
    $("subtotal").value = subtotal;
    $("tax_rate").value = tax_rate;
    $("sales_tax").value = salesTax;
    $("total").value = total;

    //set focus to sub
    $("subtotal").focus();

}


//clear entries
let clearEntries = function(){

}

//clear the tax rate textbox
let clearRate = function() {
    $("tax_rate").value = "";
}
//clear subtotal text
let clearSubtotal = function() {
    $("subtotal").value = "";
}

//onload
window.onload = function () {
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearEntries;
    $("subtotal").onclick = clearSubtotal;
    $("tax_rate").onclick = clearRate;
    $("subtotal").focus();
}

