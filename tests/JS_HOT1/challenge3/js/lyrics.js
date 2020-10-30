'use strict';

function main () {


    let numenter = prompt('Please enter a number between 1 and 3', '');
        if (numenter==1){ alert ("One is the loneliest number that you'll ever do");
    }
        else if (numenter==2) { alert ("Two can be just as bad as one, It's the loneliest since the number 1")
    }
        else if (numenter==3) { alert ("There is no Three")
    }
        if (numenter<1 || numenter>3) {
            alert("You entered an invalid number");
        }
}