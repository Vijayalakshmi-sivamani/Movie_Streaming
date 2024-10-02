import { Router } from "express";
import History from "../models/history.js";
const router = Router();
router.post("/user", async (req, res) => {
  try {
    const { userId, movieId, watchedOn } = req.body;
    const newUser = new User({ userId, movieId, watchedOn });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error to track user", details: error });
  }
});
router.get("/user", async (req, res) => {
  try {
    const User = await User.find();
    res.status(200).json(User);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error to retrieve user history", details: error });
  }
});

router.put("/history/:id", async (req, res) => {
  try {
    const history = await History.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!history)
      return res.status(404).send({ message: " history not found" });
    res.status(200).send(history);
  } catch (error) {
    res.status(400).send({ message: "Error updating history", error });
  }
});

router.delete("/history/:id", async (req, res) => {
  try {
    const history = await History.findByIdAndDelete(req.params.id);
    if (!history) return res.status(404).send({ message: "history not found" });
    res.status(200).send({ message: "history deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting history", error });
  }
});

export default router;
