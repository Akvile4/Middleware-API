const { Router } = require("express");
const { addMovie, listMovies, updateMovie, deleteMovie, findMovie } = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.get("/findMovie", findMovie);
movieRouter.put("/movie", updateMovie);
movieRouter.delete("/movie", deleteMovie);

module.exports = movieRouter;