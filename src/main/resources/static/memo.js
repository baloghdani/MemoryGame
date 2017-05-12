/**
 * Created by danielbalogh on 5/11/17.
 */

// document.getElementById("card1").onclick = function() {myFunction()};
//
// function myFunction() {
//     document.getElementById("card1").innerHTML = '<img src=http://uberhumor.com/wp-content/uploads/2011/04/these_funny_animals_656_640_08.jpg\'>';
// }

document.getElementById("card1").onclick = function() {
    setTimeout(showColor, 500);
    setTimeout(colorBack, 4000);
};

function showColor() {
    var colors = ['red', 'green', 'orange', 'yellow'];
    document.getElementById("card1").style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// function showColor() {
//     document.getElementById("card1").style.backgroundColor = 'red';
//  }

 function colorBack() {
     document.getElementById("card1").style.backgroundColor = 'darkblue';
 }

var start = document.getElementById('startbutton'),
    stopwatch = document.getElementById('timer'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    stopwatch.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":"
        + (minutes ? (minutes > 9 ? minutes : "0"
        + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

start.onclick = timer;


