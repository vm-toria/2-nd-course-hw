// Task 1
const array1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
    if (array1[i] === 10) break;
}

// Task 2
const array2 = [1, 5, 4, 10, 0, 3];
console.log(array2.indexOf(4));

// Task 3
const array3 = [1, 3, 5, 10, 20];
console.log(array3.join(' '));

// Task 4
const matrix = [];
for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    matrix.push(row);
}
console.log(matrix);

// Task 5
const array5 = [1, 1, 1];
array5.push(2, 2, 2);
console.log(array5);

// Task 6
const array6 = [9, 8, 7, 'a', 6, 5];
array6.sort();
const filteredArray6 = array6.filter(item => typeof item === 'number');
console.log(filteredArray6);

// Task 7
const array7 = [9, 8, 7, 6, 5];
const userGuess = Number(prompt("Enter a number: "));
alert(array7.includes(userGuess) ? "Correct!" : "Wrong!");

// Task 8
const str8 = 'abcdef';
console.log(str8.split('').reverse().join(''));

// Task 9
const array9 = [[1, 2, 3], [4, 5, 6]];
console.log([...array9[0], ...array9[1]]);

// Task 10
const array10 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);
for (let i = 0; i < array10.length - 1; i++) {
    console.log(array10[i] + array10[i + 1]);
}

// Task 11
function squareArray(arr) {
    return arr.map(num => num ** 2);
}
console.log(squareArray([1, 2, 3, 4]));

// Task 12
function wordLengths(arr) {
    return arr.map(word => word.length);
}
console.log(wordLengths(["hello", "world", "JavaScript"]));

// Task 13
function filterNegatives(arr) {
    return arr.filter(num => num < 0);
}
console.log(filterNegatives([1, -2, 3, -4, 5]));

// Task 14
const randomArray14 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
const evenNumbers = randomArray14.filter(num => num % 2 === 0);
console.log(randomArray14, evenNumbers);

// Task 15
const randomArray15 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);
const sum = randomArray15.reduce((acc, num) => acc + num, 0);
const average = sum / randomArray15.length;
console.log(randomArray15, average);
