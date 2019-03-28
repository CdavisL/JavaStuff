console.log("Objects come in key/value pairs. Another way to think of this is noun/adjective. Additionally, objects can also hold functions, which would correlate to a verb. Nouns name, adjectives describe, and verbs do.");

console.log("Objects can be created in two different ways: var obj = { key : value} and function obj() {}. The former is called literal notation and the latter constructor notation.");

var Noct = {"name" : "Noctis Lucis Caelum", "age" : 20, "status" : "Prince of Lucis", "hobbies" : "fishing, hunting, and exploring", "skills" : "swordsmanship, diplomacy, fishing, magic and alchemy", "time off" : function() {"Let's go fishing!"}, "fight" : function() {"Meh, let's put it out of it's misery."} };

console.log(Noct, "This is an example of a literal notation object.");

console.log("Objects can contain objects! This encapsulation can give your object more depth. This can effectively form a heirarchy kind of like a parent object with child(ren) objects.");

console.log("Syntax is the way a language is written and defined by the creators of the language.");

console.log("API is application programming interface. All languages have it. API is a collection of functions and properties. Take a look at the window object in JS, that is the JS API in a nutshell.");

console.log("API can contain other APIs. For instance, you can attach JQuery to the window object in JS. This is called embedded or extension API. This is what libraries are (embedded API that uses native API). Whenever you create an object with functions and properties, you are creating an API.");

console.log("You can not create a program without simple data.");

console.log("A simple manipulation for strings is using the backslash. Using the backslash allows you to escape a character. This is useful for writing a quote within strings. You can also alternate the use of single and double quotes.");

var Gladio = "Gladio infamously says, \"C'mon, I got a date with a cup of noodles.\"";
console.log(Gladio);

console.log("Numbers can be broken down into 2 types, whole numbers and floating points. Floating points or fractional numbers (decimals).");

console.log("Null and undefined are easy to get confused. Null and undefined could mean no value is assigned. NaN is not a number.");

var name = "Ignis Scientia";
const Iggy = "he just enjoys cooking and is very loyal to Noctis";

console.log("Does " + name + " have interests outside of serving the crown?", "No, " + Iggy + ".");

console.log("A value to a var can be anything; string, number, boolean, null/undefined, NaN, function/method, object, array, list... Var change values, but const is constant. It is possible to create a var with no value, awaiting an assignment. It is NOT possible to create a const without assigning a value.");

console.log("JS is loose with datatypes. It is possible to create a var in JS with a string datatype and change that var to another datatype.");

var game = "Final Fantasy XV";
console.log(game);

var game = 15;
console.log(game);

console.log("const is good for security purposes, nothing can change that part of the program.");

console.log("Programs need to have the ability to store these things. To do this, in the window object there is something called the symbols table. The symbols table houses all symbols (ex. var name) to allow us to access the value.");

console.log();