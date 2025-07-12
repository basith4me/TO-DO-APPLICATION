const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./configs/db.js");
const todoRoutes = require("./routes/todo.route.js")
const app = express();
dotenv.config();

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/todos", todoRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
