const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");

router.get("/", async (request, response) => {
  console.log(movies);
  response.send({ data: [movies] });
});

router.get("/:id", async (request, response) => {
  const movieid = Number(request.params.id)
  console.log(movieid);
  const moviereguest = movies.filter(movie => movie.id === movieid)
  
  response.send({ data: [moviereguest] });
});

router.get("/", async (request, response) => {
  const {beginYear, endYear} = request.query
  const filteredMovies = movies.filter(movie => movie.year > parseInt(beginYear) && movie.year < parseInt(endYear))

  response.json({ data: [filteredMovies] });
});

router.get("/", async (request, response) => {
  const {beginYear, endYear, minRating} = request.query
  const filteredMovies = movies.filter(movie => movie.year > parseInt(beginYear) && movie.year < parseInt(endYear) && movie.rating >= parseInt(minRating))

  response.json({ data: [filteredMovies] });
});

module.exports = router;
