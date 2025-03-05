require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Load environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// MongoDB Connection
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" MongoDB Connected Successfully"))
  .catch((error) => console.error(" MongoDB Connection Error:", error));

// Default Route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start Server
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
