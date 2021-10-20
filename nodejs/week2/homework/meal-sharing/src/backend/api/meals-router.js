const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    console.log("in/api/meals");
    // variable for all the querys I am using so that I can check if one of the requested queryes from the user doesn't match/exists
    const querys = ["maxPrice", "title", "createdAfter", "limit"];
    const requestQuerys = Object.keys(request.query);
    const matchQuerys = [];
    requestQuerys.some((item) => {
      if (querys.includes(item)) {
        matchQuerys.push(item);
      }
    });
    // new array with let, that contain all the meals, to reasign values
    let sortedMeals = meals;
    const { maxPrice, title, createdAfter, limit } = request.query;
    
    if (matchQuerys.length === requestQuerys.length) {
      // maxPrice	Get meals that has a price smaller than maxPrice	Number	/api/meals?maxPrice=90
      if (maxPrice) {
        sortedMeals = sortedMeals.filter(
          (meal) => meal.price < parseInt(maxPrice)
          );
        }
        // title	Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde	String	/api/meals?title=Indian%20platter
        if (title) {
          const decodeTitle = decodeURI(title).toLowerCase();
          sortedMeals = sortedMeals.filter((meal) =>
          meal.title.toLowerCase().includes(decodeTitle)
          );
        }
        // createdAfter	Get meals that has been created after the date /api/meals?createdAfter=2019-04-05
        if (createdAfter) {
          sortedMeals = sortedMeals.filter(
            (meal) => new Date(meal.createdAt) > new Date(createdAfter)
            );
          }
          // limit	Only specific number of meals	Number /api/meals?limit=4
          if (limit) {
            sortedMeals = sortedMeals.slice(0, Number(limit));
          }
          if (sortedMeals < 1) {
            return response.status(200).json({ Message: "No meals found" });
          }
          // /api/meals -	Respond with the json for all the meals
          response.json(sortedMeals);
        } else {
          response.status(400).json({ error: "Bad request" });
        }
      } catch (error) {
        throw error;
      }
});

// /api/meals/{id} - Respond with the json for the meal with the corresponding
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const mealId = meals.find((meal) => meal.id === parseInt(id));
    if (!mealId) {
      response.status(404).json({ error: `Meal with id ${id} not found` });
    } else {
      response.json(mealId);
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
