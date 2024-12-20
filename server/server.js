require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes/index");
const mediaRoutes = require("./routes/instructor-routes/media-routes");
const app = express();
const port = process.env.PORT || 5001;
const mongoDB = process.env.MONGO_URL;

//Cors Configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//JSON Middleware
app.use(express.json());

//Database Connection
mongoose
  .connect(mongoDB)
  .then(() => console.log("connected to database"))
  .catch((e) => console.log(e));

// Routes Configuration
app.use("/auth", authRoutes);
app.use("/media", mediaRoutes);

//Global error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    success: false,
    message: "something went wrong",
  });
});

//Connection to port
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
