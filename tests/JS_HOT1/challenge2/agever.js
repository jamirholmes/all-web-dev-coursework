'use strict';

function main() {
	//	const variables go here
    const MINAGE = 1;
    const MAXAGE = 200;

    
    //	non-const variables go here
    let age       = prompt("Please insert your age");
    let runAgain  = true;
    let firstChar = "";
    
    if (age >= 21 && age<=200) {
        alert("Welcome to the venue")
    }

    else if (age < 21)  {
        alert("You are not old enough")
    }
    if(age > $(MAXAGE) || age < $(MINAGE)) {
        alert("Age out of range")
    }
	while (runAgain) {
		
		//	Ask user if s/he wants to run program again
		firstChar = prompt("Run Program Again??? (Y/N)", "Y");
		firstChar = firstChar.charAt(0).toUpperCase();
		
		//alert("firstChar = " + firstChar);
		
		if (firstChar != "Y") {
			runAgain = false;
		}
	}
}