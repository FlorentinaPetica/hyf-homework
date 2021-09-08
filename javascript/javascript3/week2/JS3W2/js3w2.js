// Movies exercise

async function getBadMovies() {
  try {
    const responseMovies = await fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );
    const movies = await responseMovies.json();
    const badMovies = movies.filter((movie) => movie.rating < 4);
    const badMoviesAfter = badMovies.filter((movie) => movie.year > 2000);
    console.log(badMovies);
    console.log(badMoviesAfter);
  } catch (error) {
    throw "Something went wrong";
  }
}
getBadMovies();

//Promise that resolves after set time

function callsAfterXSeconds(num) {
  const miliseconds = num * 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, miliseconds);
  });
}

callsAfterXSeconds(3)
  .then(() => {
    console.log(`Am I called asynchronously?`);
  })
  .catch((err) => {
    console.log("Something went wrong");
  });

// Rewrite time

async function setTimeoutPromise(sec) {
  const miliseconds = sec * 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Called after ${sec} seconds`);
    }, miliseconds);
  });
}

setTimeoutPromise(8)
  .then(console.log)
  .catch((error) => {
    console.log("Error in set timeout promise");
  });

async function getCurrentLocation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(function (success) {
      const crd = success.coords;
      const position = { lat: crd.latitude, long: crd.longitude };
      resolve(position);
    });
  });
}

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log("Position error");
  });

/*  ---------------------------------------------------------
Do the 3 steps below using promises and .then.
1. Wait 3 seconds
2. After 3 seconds fetch some data from any api you like
3. Log out the data from the api 
-------------------------------------------------------------*/

setTimeout(() => {
  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((quotes) => {
      console.log(quotes.quote);
    })
    .catch((error) => {
      console.log("Error!");
    });
}, 4000);

// Do the 3 steps using async/await

async function getRandomAnimeQuotes() {
  try {
    const response = await fetch("https://animechan.vercel.app/api/random");
    const quotes = await response.json();
    console.log(quotes.quote);
  } catch (err) {
    console.log("Faild to fetch");
  }
}

setTimeout(getRandomAnimeQuotes, 5000);
