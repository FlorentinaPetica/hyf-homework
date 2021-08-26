const button = document.getElementById("start-button");
const p = document.getElementById("count-down");
const left = document.getElementById("left");
const right = document.getElementById("right");
const input = document.getElementById("input");
const leftPlayer = document.querySelector(".leftPlayer");
const rightPlayer = document.querySelector(".rightPlayer");

var confettiElement = document.getElementById("my-canvas");
var confettiSettings = { target: confettiElement };
var confetti = new ConfettiGenerator(confettiSettings);

function inputValue() {
  return input.value;
}
// Setting a count down until the game will start
button.addEventListener("click", loopArray);

const array = [
  function three() {
    setTimeout(() => {
      p.innerHTML = 3;
    }, 1000);
  },
  function two() {
    setTimeout(() => {
      p.innerHTML = 2;
    }, 2000);
  },
  function one() {
    setTimeout(() => {
      p.innerHTML = 1;
    }, 3000);
  },
  function go() {
    setTimeout(() => {
      p.innerHTML = "Play";
    }, 3500);
  },
  function enableGame() {
    button.removeEventListener("click", loopArray);
  },
];

function loopArray() {
  for (i = 0; i < array.length; i++) {
    array[i]();
  }
}

//Counting the number of clicks for each player
let leftResult = 0;
let rightResult = 0;

function registerNumberOfClicks() {
  window.addEventListener("keypress", keyCounter);
  function keyCounter(event) {
    if (event.key === "s") {
      leftResult++;
      left.innerHTML = leftResult;
    }
    if (event.key === "l") {
      rightResult++;
      right.innerHTML = rightResult;
    }
  }
  //Timer for how long the game will be and getting the results back
  const setGameDuration = inputValue() * 1000 + 4000;
  setTimeout(showResult, setGameDuration);

  function showResult() {
    window.removeEventListener("keypress", keyCounter);
    if (leftResult > rightResult) {
      left.innerHTML = "Winner!!!";
      right.innerHTML = " ";
      confetti.render();
    } else if (rightResult > leftResult) {
      left.innerHTML = " ";
      right.innerHTML = "Winner!!!";
      confetti.render();
    } else {
      left.innerHTML = "It's a tie!!!";
      right.innerHTML = "It's a tie!!!";
    }
    p.innerHTML = "Game Finished";
    const resetButton = document.createElement("button");
    const gameArea = document.getElementById("resetButton");
    gameArea.appendChild(resetButton).innerHTML = "New Game";
    resetButton.addEventListener("click", () => {
      window.location.reload();
    });
  }
  button.removeEventListener("click", gameTimeOut);
}

function gameTimeOut() {
  setTimeout(registerNumberOfClicks, 4000);
}

button.addEventListener("click", gameTimeOut);

//Extra function for each player there is the option to pick a color
function setColor() {
  if (document.getElementById("default").selected) {
    leftPlayer.style.backgroundColor = "#f5deb3";
  } else if (document.getElementById("red").selected) {
    leftPlayer.style.backgroundColor = "#f54251";
  } else if (document.getElementById("blue").selected) {
    leftPlayer.style.backgroundColor = "#42b6f5";
  } else if (document.getElementById("pink").selected) {
    leftPlayer.style.backgroundColor = "#f542aa";
  } else if (document.getElementById("yellow").selected) {
    leftPlayer.style.backgroundColor = "#f5e342";
  }

  if (document.getElementById("default2").selected) {
    rightPlayer.style.backgroundColor = "#008b8b";
  } else if (document.getElementById("violet").selected) {
    rightPlayer.style.backgroundColor = "violet";
  } else if (document.getElementById("green").selected) {
    rightPlayer.style.backgroundColor = "#42f548";
  } else if (document.getElementById("orange").selected) {
    rightPlayer.style.backgroundColor = "orange";
  } else if (document.getElementById("magenta").selected) {
    rightPlayer.style.backgroundColor = "magenta";
  }
}
