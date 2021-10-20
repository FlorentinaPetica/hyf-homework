const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

// /api/reviews -	Respond with the json for all reviews *
router.get("/", async (request, response) => {
  try {
    console.log("in /api/reviews");
    response.json(reviews)
  } catch (error) {
    throw error;
  }
});

// /api/reviews/{id} - Respond with the json for the review with the corresponding id 
router.get("/:id", async (request, response) => {
    try {
        const {id} = request.params
        console.log(id);
        const reviewId = reviews.find((review) => review.id === parseInt(id))
        response.json(reviewId)
    } catch (error) {
      throw error;
    }
  });


module.exports = router;