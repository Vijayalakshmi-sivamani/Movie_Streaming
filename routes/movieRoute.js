import { Router } from "express";
import Movie from "../models/movie.js";

const router = Router();

router.post("/movie", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).send(movie);
  } catch (error) {
    res.status(500).send({ message: "Error fetching movie", error });
  }
});

router.get("/movie/g/:genre/r/:rating", async (req, res) => {
  try {
    const { genre, rating } = req.params;
    const movies = await Movie.find({ genre, rating: { $gte: rating } });
    if (!movies.length)
      return res.status(404).json({ message: "No movies found" });
    res.status(200).send(movies);
  } catch (error) {
    res.status(500).send({ message: "Error fetching movie", error });
  }
});

export default router;
