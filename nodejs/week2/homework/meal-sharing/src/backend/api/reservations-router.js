const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

// /api/reservations - Respond with the json for all reservations *
router.get("/", async (request, response) => {
  try {
    console.log("in /api/reservations");
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

// /api/reservations/{id} - Respond with the json for the reservation with the corresponding id
router.get("/:id", async (request, response) => {
    try {
      const {id} = request.params;
      const reservationId = reservations.find((reservation) => reservation.id === parseInt(id))
      response.json(reservationId);
    } catch (error) {
      throw error;
    }
  });

module.exports = router;