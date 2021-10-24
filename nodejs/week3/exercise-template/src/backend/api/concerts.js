const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const concerts = await knex("concerts");
    response.json(concerts);
  } catch (error) {
    throw error;
  }
});


router.post("/", async (request, response) => {
  try {
    //Validation
    if (!!success[0]) {
      const success = await knex('concerts').insert(request.body)
      response.status(200).json(success)
    } else {
      response.status(500).end()
    }
  } catch (error) {
    throw error;
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const concertsId = await knex("concerts").where({id:request.params.id}).update(request.body, [...Object.keys(request.body)]);
    response.status(200).json(concertsId);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const concertsId = await knex("concerts").where({id:request.params.id}).del();
    response.status(200).json(concertsId);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
