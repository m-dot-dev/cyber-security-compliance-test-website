import mongoose from "mongoose";
import { mongo } from "../utils/constants.js";

export const connect = () => {
  const connection = mongoose
    .connect(mongo.uri)
    .then(() => {
      console.log("Connected to MongoDB successfully!");
    })
    .catch((err) => {
      console.error(`MongoDB connection error: ${err}`);
    });

  return connection;
};
