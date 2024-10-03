import { Schema, model } from "mongoose";

const subscriptionSchema = new Schema({
  subscriptionType: {
    type: String,
    required: true,
    enum: ["Basic", "Premium"],
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
  },
});

const Subscription = model("Subscription", subscriptionSchema);
export default Subscription;
