/*----------------------------------------------------------------------------------
Log out the text 'Called after 2.5 seconds' after the script is loaded.
------------------------------------------------------------------------------------*/
window.addEventListener("DOMContentLoaded", setTimer);

const logText = () => {
  console.log("Called after 2.5 seconds");
};

function setTimer() {
  setTimeout(logText, 2500);
}

/*------------------------------------------------------------------------------------
Calling this function should log out the stringToLog after delay seconds
--------------------------------------------------------------------------------------*/
function displayWithDelay(delay, stringToLog) {
  const toMiliseconds = delay * 1000;
  setTimeout(() => {
    console.log(stringToLog);
  }, toMiliseconds);
}
displayWithDelay(4, "This string is logged after 3 seconds");
displayWithDelay(5, 'This string is logged after 5 seconds')

/*------------------------------------------------------------------------------------------------
When clicking a button, use the function you created in the previous task to log out the text:
Called after 5 seconds the button is clicked.
--------------------------------------------------------------------------------------------------*/
const button1 = document.getElementById("button1");

button1.addEventListener("click", () => {
  displayWithDelay(5, "Called after 5 seconds");
});

/*------------------------------------------------------------------------------------------------------------
Create two functions and assign them to two different variables. One function logs out Earth, 
the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. 
The only thing the third function should do is call the provided parameter function. 
Try call the third function once with the Earth function and once with the Saturn function.
---------------------------------------------------------------------------------------------------------------*/
const logEarth = () => {
  console.log("Earth");
};
const logSaturn = () => {
  console.log("Saturn");
};
function logPlanet(planetLogFunction) {
  planetLogFunction();
}
logPlanet(logSaturn);

/*------------------------------------------------------------------------------------------------------------
Create a button with the text called "Log location". When this button is clicked the location 
(latitude, longitude) of the user should be logged out.
--------------------------------------------------------------------------------------------------------------*/
const button2 = document.getElementById("button2");
const targetParagraf = document.getElementById("targetParagraf");

button2.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(success);
});

function success(pos) {
  const crd = pos.coords;
  targetParagraf.innerHTML = `This is the latitude : ${crd.latitude}<br>
                                This is the longitude: ${crd.longitude}`;
}

/*-----------------------------------------------------------------------------------------------
Create a function called runAfterDelay. It has two parameters: delay and callback. 
When called the function should wait delay seconds and then call the provided callback function. 
Try and call this function with different delays and different callback functions
-------------------------------------------------------------------------------------------------*/
function runAfterDelay(delay, callback) {
  const toMiliseconds = delay * 1000;
  setTimeout(callback, toMiliseconds);
}

const logStringInFive = () => {
  console.log("This is loged with a callback function in 5 seconds");
};

const logStringInSeven = () => {
  console.log("This is loged with a callback function in 7 seconds");
};

runAfterDelay(5, logStringInFive);
runAfterDelay(7, logStringInSeven);

/*------------------------------------------------------------------------------------------------
Check if we have double clicked on the page. 
A double click is defined by two clicks within 0.5 seconds. 
If a double click has been detected, log out the text: "double click!"
--------------------------------------------------------------------------------------------------*/
const checkDbl = window.addEventListener("dblclick", () => {
  console.log("Double click!");
});

/*-------------------------------------------------------------------------------------------------
Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, 
logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true 
it should call the logFunnyJoke function that should log out a funny joke. And vice versa.
---------------------------------------------------------------------------------------------------*/
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke === "true") {
    logFunnyJoke();
  } else if (shouldTellFunnyJoke === "false") {
    logBadJoke();
  } else {
    console.log("It's not boolean");
  }
}

const funnyJoke = () => {
  console.log("Before the invention of the wheel… everything was a drag!");
};

const badJoke = () => {
  console.log(
    "Why don't oysters donate to charity? Because they're shellfish."
  );
};

jokeCreator("true", funnyJoke, badJoke);

/*-----------------------------------------------------------------------------------------------------
Function as a variable => Create funtions that are used in these different ways:
-------------------------------------------------------------------------------------------------------*/
const array = [
  function sayJoke() {
    console.log("How to say a joke");
  },
  function question() {
    console.log("What do you give to a sick lemon?");
  },
  function answer() {
    setTimeout(() => {
      console.log("Lemon aid!");
    }, 2000);
  },
];

array.forEach(element => {
  element()
});

//-----------------------------------------------------------------------------------------------------
console.log(sum(5, 6)); // can be called before or after the definition

function sum(a, b) {
  return a + b;
}

const addition = (a, b) => {
  return a + b;
};
console.log(addition(3, 4)); // can only be called after creation
//------------------------------------------------------------------------------------------------------
const objF = {
  name: function () {
    console.log("My name is...");
  },
};

console.log(objF.name());
