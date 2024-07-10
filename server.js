require("dotenv").config({ path: "./Backend/.env" });
const express = require("express");
const appMiddlewares = require("./backend/middlewares/appMiddlewares");
const connectDB = require("./backend/models/db").connectDB;
const loginRouter = require("./backend/routes/loginRouter");
const registerRouter = require("./backend/routes/registerRouter");
const dashboardRouter = require("./backend/routes/dashboardRouter");
const logoutRouter = require("./backend/routes/logoutRouter");
const homeRouter = require("./backend/routes/homeRouter");
const quizRouter = require("./backend/routes/quizRouter");

const app = express();

// Middleware setup
appMiddlewares(app);

// Connect to MongoDB
connectDB()
  .then(() => {
    // Routes setup
    app.use("/", homeRouter);
    app.use("/", loginRouter);
    app.use("/", registerRouter);
    app.use("/", dashboardRouter);
    app.use("/", logoutRouter);
    app.use("/", quizRouter);

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
