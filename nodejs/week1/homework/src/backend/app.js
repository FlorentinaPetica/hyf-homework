const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

// global variable for joining the meals and the corresponding reviews
const reviewedMeals = meals.map((meal) => {
  meal["review"] = reviews.filter((review) => {
    if (meal.id === review.mealId) {
      return review;
    }
  });
  return meal;
});

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Error no page found");
});

/*-------------------------------------------------------------------------------------------------------------
Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, 
add these reviews to each meal in the form of an array. For meals that do not have any reviews, 
the "reviews" property will be an empty array. (watch the GIF below to understand how it should be structured)
---------------------------------------------------------------------------------------------------------------*/
app.get("/meals", async (request, response) => {
  response.json(reviewedMeals);
});

// Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)
app.get("/cheap-meals", async (request, response) => {
    const cheapMeals = reviewedMeals.filter(meal=>meal.price<100);
  response.json(cheapMeals);
});

// Respond with the json for all the meals (including it's reviews) that can fit lots of people
app.get("/large-meals", async (request, response) => {
  const largeMeals = reviewedMeals.filter((meal) => (meal.maxNumberOfGuests > 10));
  response.json(largeMeals);
});

// Respond with the json for a random meal (including it's reviews)
app.get("/meal", async (request, response) => {
  const randomMealId = Math.floor(Math.random() * meals.length);
  const randomMeal = reviewedMeals[randomMealId]
  response.json(randomMeal);
});

// Respond with the json for all reservations
app.get("/reservations", async (request, response) => {
  response.json(reservations);
});

// Respond with the json for a random reservation
app.get("/reservation", async (request, response) => {
  const randomReservationId = Math.floor(Math.random() * reservations.length);
  const randomReservation = reservations[randomReservationId]
  response.json(randomReservation);
});

module.exports = app;
