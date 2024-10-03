import { Router } from "express";
import User from "../models/user.js";

const router = Router();

router.post("/user", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: "Error fetching user", error });
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.find({ id });
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: "Error fetching user", error });
  }
});

router.put("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).send({ message: " User not found" });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ message: "Error updating User", error });
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send({ message: "User not found" });
    res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting User", error });
  }
});

export default router;
