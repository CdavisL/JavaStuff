"use strict";
//Ultimate JS Strings

//Learn the limitations and capabilities of strings in JS

//Quiz 1
console.log("The answers for Quiz 1 are: The flag to replace() to replace every instance is g. Node is a backend framework that uses JS strings. Strings can contain numbers and letters. The result of 'Jon' + 'Snow' is JonSnow.");


//All About Strings
//What is a string?
console.log("A string is any series of numbers and letters, as well as many symbols, like colons, backwards slash, etc. Strings are expressed with quotes in JS. Numbers can be strings but to ensure they are read as strings, you put them in quotes. If a string is only numbers, it's possible to still be confused as a number.");

console.log("An important thing to note about strings is that they are sequence. They are a data format structure that can hold almost anything.");

console.log("Strings are one of the most useful data structures around. Strings can represent a message or doc. There's no limit to the length of a string. You could keep a book in a string. Whenever authentification is happening such as logging in, the password is stored as a string. Strings store passwords and tokens as well. You can represent a program function with eval(), which takes a string and when pass(ed) can be interpreted as code and run. This is not recommended, but people do it anyway.");
//Stick to console.log and alert for debugging.

console.log("Strings are one of the most versatile data structures available.");

console.log("Every website is virtually guaranteed to use a string. Strings work on every browser as well. Node.js uses them as well. Drones, Raspberry Pi, and robots use strings as well.");

console.log("We will create strings using three different syntaxes, multiline strings, concatenation, string replacement, and string cases. I know how to do this already, so nail this!");

console.log("Three main ways to create strings in JS. You can put a string in double quotes and it works fine. You can also use single quotes and it works fine. You can use tilde/a `c`. It is the best way to create multiline and template strings.");
//Using f12 on chrome will open terminal/console.

//var needed when declaring this string in VSC.
var str = "I wish FFXV focused a little more on the lore of its world."

console.log("This is a valid string because it is wrapped in quotes. Without quotes, it is invalid because JS does not recognize it.");

console.log(str);

console.log('FFXV does a poor job of handling Gladio. He cannot simply be dumb muscle, but Ignis has the strategist archtype, Prompto has the loyal best friend archtype, and Noctis is the lead. This leads to Gladio being left out and out of focus in comparison to the rest. And Gladio is not the only character that has happened to. Loz, Basch, (lesser extent) Snow are undefined as characters beyond "Big Guy." What a waste.');

console.log("The above rant is a valid string. Chrome may default single quotes to double.");

console.log(`The astrals and royal tombs aspect of XV was woefully underused as well. Not quite sure how the royal family and astrals worked together to take out Ardyn either.`);

console.log("Using tilde to create strings unlocks more options than the first two.");

console.log("It's possible to store strings in memory. Using the keyword var or let will allow you to store a string.");

console.log("I've saved this string as var: " + str);

console.log("Here is my let example.");

let interest = "FFXV, despite it's flaws, is one of my favorite games because I adore the boys.";
console.log(interest);

console.log("These var and let will be remembered in this program.");

var anoStr = interest;
console.log(anoStr);

console.log("anoStr is now tied to interest and will print out the same string.");