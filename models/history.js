import { Schema, model } from "mongoose";

const historySchema = new Schema({
    userId: {
      type: String,
      required: true,
    },
    movieId: {
      type: String,
      required: true,
    },
    watchedOn: {
      type: String,
      required: true,
    },
  });
  
  const History = model("History",historySchema);
  export default History;