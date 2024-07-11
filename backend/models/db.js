require("dotenv").config({ path: "./Backend/.env" });
const mongoose = require("mongoose");

const url = process.env.REACT_APP_MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log("Database connected...");
  } catch (error) {
    console.error("Error in connection", error);
  }
};

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  githubId: String,
  role: {
    type: String,
    default: "user",
  },
});

const userapps = mongoose.model("userapps", userSchema);

module.exports = {
  connectDB,
  userapps,
};
