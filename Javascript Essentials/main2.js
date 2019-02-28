"use strict";

//so the orginal addSim becomes...
/* function addSim(num, num2) {
    var total = num + num2;
    return total;
}
var newTotal = addSim();
alert(total);
//call
addSim(44, 22); */
//This code is not working for some reason. 

//Function Examples

function getName() {
    var nameEle = document.querySelector(".name");
    var name = nameEle.value;

    var newName = name.replace("Name Here", "Enter Job");
    //alert(newName);
    return newName;
}
var currentName = getName();
console.log(currentName);

console.log("Code should always stay dry. Do not repeat yourself.");
//Not working. Technically correct but will not display??? Fourth function to do this. 

console.log("To summarize: If you don't know where to put JS tag in HTML file, place it before the closing body tag. To turn a string to all upper case use .toUpperCase. == means is equal to. Use document.querySelector('.class') to use querySelector. The best reason to use functions is DRY, do not repeat yourself.");