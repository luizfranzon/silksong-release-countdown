const timer = document.getElementById("timer");

// Time Calc
const destTime = new Date("feb 28, 2028 22:00:00").getTime();

var now = new Date().getTime();

var difference = destTime - now;

var days = Math.floor(difference / (1000 * 60 * 60 * 24));
var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((difference % (1000 * 60)) / 1000);

timer.innerText = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

if (difference < 0) {
    timer.innerText = "It's Out!!!";
}

// timer changer
var timeCalc = setInterval(function () {
    var now = new Date().getTime();

    var difference = destTime - now;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    timer.innerText = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    if (difference < 0) {
        timer.innerText = "It's Out!!!";
    }
}, 1000);



// Testing
// const width = window.screen.width;
// const height = window.screen.height;

// console.log(`${width} largura x${height} altura`)


