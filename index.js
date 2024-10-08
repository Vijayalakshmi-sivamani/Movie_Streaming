import express from "express";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import subscriptionRouter from "./routes/subscriptionRouter";
import historyRouter from "./routes/historyRoute.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use("/subscriptionRouter", subscriptionRouter);
app.use("/historyRouter", historyRouter);

mongoose
  .connect("mongodb+srv://sri:adhisri@cluster0.guzzq.mongodb.net/movie_name")
  .then(() => {
    console.log("Connected to MongoDb");
    app.listen(PORT, () => {
      console.log("server started at" + PORT);
    });
  });
