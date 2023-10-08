const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("conected");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);

    process.exit(1);
  }
};
module.exports = connectDB;
