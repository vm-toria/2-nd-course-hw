// task 1
let a = 10;
alert(a);
a = 20;
alert(a);


// task 2
const iphoneDate = 2007;
alert('The original iPhone was introduced by Steve Jobs ' + iphoneDate);


// task 3
const languageCreator = "Brendan Eich";
alert('JavaScript was invented by ' + languageCreator);


// task 4
const num1 = 10;
const num2 = 2;
alert('Sum: ' + (num1 + num2));
alert('Difference: ' + (num1 - num2));
alert('Product: ' + (num1 * num2));
alert('Quotient: ' + (num1 / num2));


// task 5
const result = 2 ** 5; 
alert(result);


// task 6
const c = 9;
const b = 2;
const remainder = c % b;
alert(remainder); 


// task 7
let num = 1;
num += 5; 
num -= 3;  
num *= 7; 
num /= 3;  
num++;     
num--;    
alert(num);


// task 8
let age = prompt("How old are you?");
alert("You are " + age + " years old.");


// task 9
let user = {
    name: "Alice", 
    age: 31,      
    isAdmin: true 
};

console.log(user);


// task 10
let myName = prompt("What is your name?");
alert(`Hello, ${myName}!`);


// task 11
let number = prompt("Please think of any number and enter it:");

let doubled = number * 2;
alert(`Your number doubled is: ${doubled}`);

let addedTen = doubled + 10;
alert(`Now, added 10: ${addedTen}`);

let dividedByTwo = addedTen / 2;
alert(`Now, divided by 2: ${dividedByTwo}`);

let result2 = dividedByTwo - number;
alert(`Finally, subtracting your original number: ${result2}`);

alert("The answer is 5.");