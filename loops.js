// Task 1
console.log("Hello");
console.log("Hello");

// Task 2
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Task 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Task 4
const obj = {
    "Kolya": 200,
    "Vasya": 300,
    "Petya": 400
};

for (let key in obj) {
    console.log(`${key} — salary ${obj[key]} dollars`);
}

// Task 5
let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}

console.log(`Result: ${n}, number of iterations: ${num}`);

// Task 6
let firstFriday = 3;
for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Today is Friday, the ${day}th. It is necessary to prepare a report.`);
}

// Additional tasks
// Task 1
let k = 100;
let iterations = 0;

while (k >= 0) {
    k -= 7;
    iterations++;
}

console.log(`Result: ${k}, number of iterations: ${iterations}`);

// Task 2
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

months.forEach((month, index) => {
    console.log(`${index + 1} - ${month}`);
});

// Task 3
const book = {
    title: "War and Peace",
    author: "Leo Tolstoy",
    year: 1869,
    genre: "Novel"
};

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// Task 4
let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log("Array of numbers:", numbers);
console.log("Minimum number:", Math.min(...numbers));
