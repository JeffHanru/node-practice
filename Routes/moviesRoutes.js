const express = require("express");
const moviesController = require("../Controllers/moviesController");

const { getAllMovies, createMovie, getMovie, updateMovie, deleteMove, getHighestRated } =
  moviesController;

const router = express.Router();

router.route("/highest-rated").get(getHighestRated, getAllMovies )

router.route("/").get(getAllMovies).post(createMovie);

router.route("/:id").get(getMovie).patch(updateMovie).delete(deleteMove);

module.exports = router;
