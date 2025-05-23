let userName = 'Teja varma';


if (userName) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log("Hello!");
}

// What do you want to ask the Magic Eight Ball?
let userQuestion = "Will I become a millionaire?";

console.log(`${userName ? userName : 'You'} asked: ${userQuestion}`);

// Time to shake the ball...
let randomNumber = Math.floor(Math.random() * 8);

// Let’s see what the ball says
let eightBall = '';

if (randomNumber === 0) {
    eightBall = 'It is certain';
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy, try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else {
    eightBall = 'Signs point to yes';
}

// And here’s the answer!
console.log(`🎱 Magic Eight Ball says: ${eightBall}`);
