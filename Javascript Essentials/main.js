/* Javascript Essentials Mini 

SECTION 1

In this course we will learn transferable skills such as try/catch blocks, 
functions, classes & inheritance

will learn JS basics as well

you can take skills from this course and transfer them to other languages such as Node.js, python, & PHP

also learn about weird bits in JS such as hoisting, scopes, and closure

two small projects included in course, downloadable assignments and code examples as well

will also learn ES6 basics as well */

/* SECTION 2

try CodePen.io

How to ask questions: 
be clear on the problem!
add as many details as possible
spelling and grammar is important
Google problems first */

/* SECTION 3

Where to put javascript: JS can go in head or body of html file

When to put JS in head: You can, but don't! JS relies on DOM (Document Object Model) which is the HTML structure
just with like CSS, browser loads top to bottom,
your JS is trying to grab something in the body which isn't rendered in the body yet
putting script in head will produce an error or something unpredictable will happen

rule of thumb: if DOM (document object model) then place in body

When to put JS in body: the preferred place for DOM
you can place JS after the body tag (like Google Analytics) or at the end, it depends on the script
script that you write will be at the bottom

IF UNCERTAIN WHERE TO PLACE JS, PUT AT BOTTOM--not middle, not top, not header
LIBRARIES (EX: JQUERY) ALWAYS AT BOTTOM

Front End Web Dev
FEWD is compose of three languages HTML, CSS, Javascript
the only script browsers read is JS???

to load JS in HTML
<script type="text/javascript" src=filename.js>

VARIABLES

var are a way to hold information in a way that's easy to memorize
the tricky part with var is data types */

console.log("To write var: var name = string. Numbers and true/false values don't need quotes.");

var name = "Noctis";
console.log(name);
console.log("This means that the var has a value called Noctis!");
//this is a declared var
//; is optional, but best practice to have it

//every line in PHP has to have ;
//Python does not have ;
//in Python, var looks like this: name = "Noctis"

var age = 20;
console.log(age);
console.log("Noctis is 20 years old at the start of Final Fantasy XV.");

var age2 = "20"; 
console.log(age2);
console.log("The difference between 20 and '20' is that 20 is an integer, while '20' is a string!");
console.log("'Noctis' is also a string!");

var pi = 3.14;
console.log(3.14);
console.log("3.14 is not an integer. Since it is a decimal point, it's called a float!");
console.log("Programming is more exact than basic math. 3 !== 3.0 in programming language.");

console.log("There are many ways to declare a var such as camelCase or an_underscore. However, var can't start with numbers or use punctuation! There are certain words you can't use as the name either.");
//var has a hoisting mechanism

//OBJECTS

console.log("To create an object, use this formula: obj = {'key' : 'value', 'key' : 'value'}");

NoctObj = {"hair" : "spikey and black", "eyes" : "steely blue", "build" : "slight", "character" : "kind and gentle, but tough", "status" : "Prince of Lucis, King of Fishing!!!"}
console.log(NoctObj);
//notice that object descriptions work like strings!
console.log("Type objname.keyname to return key.");
console.log(NoctObj.status);

GladioObj = {"hair" : "mullet", age : 23, "weapons" : "greatswords and shields", strength : 255}
console.log(GladioObj);
console.log("Not every key : value pair needs to be a string");
console.log(GladioObj.age + " and " + GladioObj.strength);
console.log("The above is concatenation. There's also a dot notation to concat. Concatting operates way differently than simply printing out two outputs with a comma in the console.");

console.log("An obj is a way to store a var inside a var! You can name them as well and have all these different datapoints inside on var as well.");
console.log("Objects can be person, places, things, etc.");

ProObj = {"hair" : "spikey blond", age : 20, "personality" : "thoughtful, cheerful, and energetic", "skills" : "photography", "likes" : "Cindy"}
console.log(ProObj);
console.log(ProObj.personality);
console.log(ProObj.skills);

console.log("Think of values as sub var.");

console.log("An array is simply a list of var. It is different from an obj by virtue of objname.keyname.");

RegalAry = ["stereo", "4 wheels", "2 sideview mirrors", "1 rearview mirror", "type f", "type D", "luxury", "one of a kind"]
console.log(RegalAry);
console.log("To create an array: arrayname = [var, var2].");
console.log("Arrays start count from zero. Remember this as it's important when looping!");
//cannot rename var in array

console.log("In JS, if you try to access a var or data point that doesn't exist, you get undefined everytime.");

//Practice
var myAge = 31;
console.log(myAge);

hamObj = {"mascot" : "hammerhead shark", "owner" : "Cid", "mechanic" : "Cindy", "cook" : "Takka", "sell" : "services, food, gas, items"}
console.log(hamObj); 

IggyAry = ["cooking", "daggers", "magic", "advisor", "loyal", "knowledge"]
console.log(IggyAry);

var vil = "Ardyn";
console.log(vil);

var num = 64;
console.log(num);

var flo = 3.3333334;
console.log(flo);

console.log("Var, objects, arrays work in all languages, including PHP, Python, and node.");

//STRING MANIPULATION

console.log("String manipulation is taking a string and changing the value dynamically. JS uses dot notation to access functions attached to strings, objects, arrays, etc. Dot notation is also activating a function within a function.");

str = "Ignis: 'A play at mutiny, Noct?'";
console.log(str);
console.log(str.length);

console.log("To find a specific point in the string, use .indexOf.");
console.log(str.indexOf("mutiny"));
console.log("Mutiny is at point 18 in the string.");
console.log("If not found in index, .indexOf returns a -1.");

console.log("Programming is meant to be nice and simple!");

console.log(strUp = str.toUpperCase());
console.log(strLow = str.toLowerCase());

console.log(strUp.indexOf("MUTINY"));
console.log(strLow.indexOf("mutiny"));
//case sensitive

console.log(str);
console.log("Var can be overriden at any time!!!");

console.log("....case works on everything in string.");
console.log("() mean that it is running a function or method! String is object oriented (acts like an object).");

console.log(str);
console.log(chef = str.substring(0, 20));
//did not load on page on refresh/manually entered chef
//forgot to console.log
console.log(chef = str.substring(0, 16));
console.log("So in treating the string the like an obj using .length and .substring, we can manipulate the string further. You can start at any point.");

console.log(sub = str.substring(10, 20));

console.log(slc = str.slice(8, 25));
console.log(".substring gets 10 and meets it at 20, while slice starts at 0, goes to 8 and then 25. Also, string and slice only need one parameter to function, 10 or 8 and will display the rest of string. If you use a negative number on slice and substring, it starts from the end of the string.");

console.log("To replace a string inside of a string, use .replace.");
console.log(rep = str.replace("mutiny", "I've learned a new recipeh"));

console.log("With strings, we can concatenate. We can take one string sentence and append it to another string sentence.");

console.log(shield = "Gladio: 'Yeah, I know.'");
console.log(photo = " Prompto: 'Why ya gotta be so photogenic?'");

console.log("There are many ways to merge string, the most popular is +. These are all concat.");
console.log(sentence = shield + photo);
console.log(shield + photo);
console.log("When adding strings together, no math necessary. They simply join. Python, JS, and node are more strict than other languages. They will only add s with ints and floats and strings with strings.");

console.log("JS is smart enough to figure out string numbers like '64' and multiply them with ints like 10. It will not perform '64 is a number' * 10 though. JS will never perform math between numbers and words.");

console.log("To change string to a number, use Number function.");
console.log(num1 = "15");
console.log(num1 = Number(num1));

console.log("To turn a string into array use aryname = str.split(' ');."); 
console.log(str);
console.log(iggyAry = str.split(" "));
console.log(iggyAry.length);

console.log("To unify array use .join.");
console.log(joinIggyAry = iggyAry.join());
console.log("You can use spaces, dashes, whatever to join words.")
console.log(joinIggyAry = iggyAry.join("_"));
console.log(joinIggyAry = iggyAry.join("-"));

console.log(url = joinIggyAry.toLowerCase());
console.log(url);
console.log("Url trick useful for single page apps and pages.");

//Practice
console.log(str2 = "My hair does NOT look like a chocobo's butt!");
str2.blink();
str2.fontsize(40);
str2.strike();
//work on getElement

//Comments are quite easy to do. 

 //is for single line comments

 /* is
 multi
 line
 comment */

 // <!-- is for html comment -->

 console.log("Use comments a lot when programming. It is helpful for people viewing the code. If working alone, comments can be useful if you are away from a piece for weeks or have to stop work for days or weeks for whatever reason. Good programmers leave comments!");

//Operators
//This is the most important and fundamental thing in JS.
//Programming is very logical and math is not necessarily a requirement.

//Addition

function add(num, num2) {
    result = num + num2;
    console.log(result);
}

add(10, 40);
add(40, 70);

//This function did not work for unknown reasons!!!

/* function sub(num, num2) {
    result = num - num2;
    console.log(result);
}

sub(40, 20);
sub(20, 19); */

function multi(num, num2) {
    result = num * num2;
    console.log(result);
}

multi(4, 4);
multi(6, 6);

function div(num, num2) {
    result = num / num2;
    console.log(result)
}

div(16, 4);
div(14, 3);

function truDiv(num, num2) {
    result = num % num2;
    console.log(result);
}

truDiv(100, 2);
truDiv(99, 3);

console.log("The above functions use arithmetic operators, +, -, *, and /. These function exactly like math symbols. The % symbol is the modulus operator and leaves the remainder.");

truDiv(15, 4);
console.log("The modulus operator leaves a remainder of 3.");

age = 31;
console.log(age);
age++;
console.log(age++);
console.log("Decrement does not work immediately.");
age--;
console.log(age--);
console.log(age--);

console.log("The increment operator is ++ and the decrement operator is --. These are important for loops.")

num = 10
num +=15
num2 = 15
num -=45
console.log(num, num2);
console.log("Assignment operators are += and -=. You can do assignment operators with any logical operator. And be careful not to reassign the var.");

//Comparison Operators

console.log("A comparison operator (boolean) is true or false. Computers are very black and white. This can lead to if/else statements.");

console.log("An = sets a var, while == equals and compares a var and === is strict (or precisely) equal to. == and === will work on integers and strings. == will compare values and === will compare values and data type.");

console.log("> and < are also comparison operators. Here is a complete list: ==, ===, != (not equal), !== (strict not equals), >=, <=. If you want to mix and match comparisons, you have && (and) and || (or).");

age = 20;
drinkAge = 21;
age >= drinkAge;
age <= drinkAge;
console.log(age >= drinkAge, age <= drinkAge);

console.log("JS is smart enough to know that 20 is the same as '20' when using an == comparison. One is an integer, the other a string. If using an === comparison, it will not be true.");

//If/Else Statements
console.log("An if/else statement is a statement that lets you run a certain piece of code if something is true and another if it is false. This is fundamental to all programming languages.");

console.log("The formula for writing an if/else statement is: if(comparison) { code here} else { code here}. Longer if/else statements add else if (comparison) {code here} and then else.");

var name = "Regis"

if (name == "Noctis") {
    alert("All hail Prince Noctis.");
}
else if(name == "Regis") {
    alert("All hail King Regis!");
} else {
    alert("Turn thy gaze upon this fool.");
}

console.log("What an if/else if/else statement does is check for true statements.");

//Practice
favGame = "Final Fantasy XV";

if (favGame == "Horizon Zero Dawn") {
    alert("It's great, but not my favorite.");
} else if (favGame == "Final Fantasy XII") {
    alert("I love XII, but it not my absolute favorite. Pretty high though.");
} else if (favGame == "Chrono Cross") {
    alert("Someone remembered that game!");
} else if (favGame == "Final Fantasy XV") {
    alert("I don't know why, but I love this game so dang much!");
} else {
    alert("Stop trying to guess, we have nothing to talk about.");
}

//If/Else With User Input
console.log("Prompts are no longer cool for user input. Its out of style.");

name = prompt("What is your name?");
if (name.toLowerCase() == "regis") {
    alert("It's good to be King.");
} else {
    alert("You shall not pass!");
}
console.log(name);

var job = prompt("What is your job class?");

console.log(job);
//if you want to log a prompt, put this under the var and log the name of the var.

if (job) {
    alert("You've chosen the " + job + " class well.");
} else {
    alert("You've chosen... poorly.");
}

console.log("Though dated, prompt is an easy way to get user input. This process is called info or data flow and is an important concept to remember.")
console.log("An important note for if/else statements is that if/else follows a chain of command and once it hits a true statement, it runs that code. Changing the order of the code may help fix problems in an if/else statement.");

console.log("As a dev, it's ok to make mistakes. It's also ok not to remember everything. If you hit a speed bump, it's ok to look up your mistake on Google. What matters is getting the code to run correctly. Don't be Bugthesda.");

console.log("User input always comes in as a string. That's because devs have no way of knowing what a user intended when they input.");

//Query Selector
console.log("Query selector shows off why JS is a popular and good programming language, so don't mess this lesson up. Query selectors deal with how do we get info and how do we add info.");

console.log("Query requires either a class, an ID, or element.");

console.log("Queries selector is a method that is part of the page document.");

main = document.querySelector("#main");
console.log(main);
//main.innerHTML = "Long live King Regis! Long live Ser Clarus!"
main.innerHTML += " <p>'Long live King Regis! Long live Ser Clarus!'</p>"
console.log(main.innerHTML);

console.log("OMG it changed! That was cool. Ahem, QS changed the text in the HTML doc it connected to. If you want to add more, you can use a logical operator. You can add HTML tags as well!");

content = main.innerHTML
console.log(content);
main.innerHTML += "<p>I think Clarus and Gladio are related to Gilgamesh.</p>"
console.log(main.innerHTML);

main.innerHTML = "<p><h1>'And now we FIGHT!'</h1></p>"
console.log(content);
console.log(main.innerHTML);
content.toUpperCase().replace("<p><h1>'Now fly, Enkidu! I said FLY!!!'</p></h1>")
console.log(content.toUpperCase().replace());

console.log("Using query selector is easy, but be careful. Its easy to overwrite the original var just like with an assignment operator.");

//Query selector II
//This time we will use a class selector. 

text = document.querySelector(".textfield")
text.innerHTML = "I wish I could visit Altissia!"
console.log(text, "This did not work as intended. This is because we want to change an attribute. So instead of innerHTML, we write value.");

text.value = "I wish I could visit Insomnia!";
console.log(text.value);

//This works but may need to be commented out
input = text.value;
console.log(input);
alert(text.value);
console.log("Using alert with text.value opens a window that shows the live input.");

console.log("If we check against value with query selector, it takes a snapshot of where the value was and stores it in a var for you.");

//main.style.border = "1px solid red";
console.log("You can style elements in JS as well. Instead of using dashes, you use CamelCase.");

//Functions!

console.log("Functions are very important and are apart of every programming language. A function is a set amount of code that you can run over and over again without having to rewrite it. A function can take parameters or arguments and allows you to input to get the desired output. The output is dependent on how good a programmer you are.");

console.log("To write a function: function name(a parameter or argument here) {code here} and a call will follow. A call is written functionname(parameter, argument). The call gives JS the command to start running the code.");

//In order for that function to work correctly, I needed to add the prompt. Just because something is technically correct, does not mean JS will run it correctly. Same for the function below.

function addFun() {
    confirm("Gladio is the best.");
}

addFun();
console.log(true);

favorite = "Gladio"
if (favorite == "Gladio") {
    addFun();
} else {
    alert("I like Noct the most.");
}

/* function simAdd() {
    num = 28;
    num2 = 10;
    //alert(num + num2);
    //total = num + num2;
    return total = num + num2;
}

simAdd(44, 22); */

console.log("Functions should not alert something. Alerts are bad practice in general, but are good for debugging. Also remember that JS is top to bottom and runs functions this way.");

console.log("Var declare a var inside of a scope. Scope is a concept that var only exist in certain areas. If you have a function with var, var can only be accessed inside that function. You don't want var bleeding out of there scope.");

console.log("This is for security purposes, efficiency, keeping the code clean, or not wanting to use the var outside the function.");

console.log("What return does is run the function and return this as the definition of a var.");

console.log("A function should contain a specific set of instructions to run over and over again. Functions are best used to when they are extremely dynamic. To automate the addSim function, make it dynamic, we make num and num2 parameters or arguments. All we do is place them inside the parentheses as separated by commas.");