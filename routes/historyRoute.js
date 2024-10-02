import { Router } from "express";
import History from "../models/history.js";
const router = Router();

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
