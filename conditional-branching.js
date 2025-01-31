// Task 1
let password = 'password';
let userInput = prompt('Enter password');
if (userInput === password) {
    alert('Password entered correctly');
} else {
    alert('Password entered incorrectly');
}

// Task 2
let c = 2; 
if (c > 0 && c < 10) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// Task 3
let d = 150;
let e = 50;
if (d > 100 || e > 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// Task 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Task 5
let monthNumber = 12;
if (monthNumber < 1 && monthNumber > 12) {
    console.log('Invalid month number');
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Winter');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Spring');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Summer');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Autumn');
            break;
        default:
            console.log('Incorrect number')
            break;
    }
}

// Additional task 1
let number = Number(prompt('Please enter any number'));
if (!isNaN(number)) {
    if (number % 2 === 0) {
        alert('The number is even');
    } else {
        alert('The number is odd');
    }
} else {
    alert('You entered not a number');
}

// Additional task 2
let clientOS = 1; // 0 - iOS, 1 - Android
if (clientOS === 0) {
    console.log('Install the iOS version of the app via the link');
} else if (clientOS === 1)  {
    console.log('Install the Android version of the app via the link');
} else {
    console.log('Unknown device')
}

// Additional task 3
let clientDeviceYear = 2014;
if (clientDeviceYear < 2015) {
    if (clientOS === 0) {
        console.log('Install the lightweight version of the app for iOS via the link');
    } else {
        console.log('Install the lightweight version of the app for Android via the link');
    }
} else {
    if (clientOS === 0) {
        console.log('Install the iOS version of the app via the link');
    } else {
        console.log('Install the Android version of the app via the link');
    }
}
