router.put("/user/:id", async (req, res) => {
  try {
    const { subscriptionType, price, duration } = req.body;
    const updateduser = await User.findByIdAndUpdate(
      req.params.id,
      { subscriptionType, price, duration },
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Error updating User", details: error });
  }
});
router.delete("/user/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting user", details: error });
  }
});
