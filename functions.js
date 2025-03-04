// Task 1
function getMin(a, b) {
    return a < b ? a : b;
}

// Task 2
function checkEvenOdd(n) {
    return n % 2 === 0 ? 'The number is even' : 'The number is odd';
}

// Task 3
function printSquare(n) {
    console.log(n * n);
}

function getSquare(n) {
    return n * n;
}

// Task 4
function checkAge() {
    let age = parseInt(prompt('How old are you?'));
    if (isNaN(age) || age < 0) {
        console.log('You entered an incorrect value');
    } else if (age <= 12) {
        console.log('Hello, friend!');
    } else {
        console.log('Welcome!');
    }
}

// Task 5
function multiplyNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'One or both values are not numbers';
    }
    return a * b;
}

// Task 6
function cubeNumber() {
    let n = prompt('Enter a number:');
    if (isNaN(n)) {
        return 'The passed parameter is not a number';
    }
    return `${n} cubed is equal to ${Math.pow(n, 3)}`;
}

// Task 7
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);
