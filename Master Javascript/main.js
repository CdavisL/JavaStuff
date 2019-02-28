"use strict";

console.log("Note: while javascript tags can go anywhere, it's best to put them in the body, after all the coding. Some scripts, like Google Adsense go at the top of the body. However, when it doubt, place it just before the closing body tag.");

console.log("jsfiddle is a good site to experiment with JS. Another good one is codepen.io!");

console.log("The most important thing to know about web development is how to use comments. In a javascript file, comments are marked by either // or with /* text */. // comment out a line of code, while the other can take out several lines. Either comment type can be used inbetween a javascript script tag in a html file. In html, <!-- text --> is used to comment out code or notes. Remember to use this when writing code for future reference for yourself and others. It's also preferable to delete!");

console.log("The no script tag is important. It basically functions as an error message to tell the user that javascript is not enabled, so the site cannot function properly. It belongs in the html file. The message is only visible if javascript is not enabled for whatever reason.");

console.log("The console log is useful for a number of reasons, but it's good primarily for debugging. This is true of alert as well.");

console.log("The importance of var is that they let you store data. To create a var, simple type: var varName = 'xyz';. I will create a var to print to the console below this.");

var Noctis = "King of Kings";
console.log(Noctis);

console.log("There are certain rules for var. For instance, certain words are unable to be used a var names. Var names cannot start with a number and they cannot use special characters except for underscore. Remember to use camelCase with var names as well.");

let Gladio = "The King's Shield";
console.log(Gladio);

console.log("The above print out is declared with let. Let behaves differently from var. To begin with var can also be declared as var varName;. And write the value when you please. Let needs to be declared immediately. Let can also reduce the scope of a var to a block {let name = 'xyz';}.");

console.log("Remember var can be reassigned.");

var favGame = prompt("What is your favorite game?", "I'm not judging!");
console.log(favGame);
//remember to print out a prompt or confirmation to the log, type the name of the function into console.log().

console.log("Prompt is a simple function that allows the user to input information. Adding a comma and using 'text' will allow you add default text to the prompt.");

console.log();

console.log();

console.log();