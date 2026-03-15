const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

console.log("Testing MongoDB connection...");
console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);
console.log("Attempting to connect...");

mongoose
  .connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  })
  .then(() => {
    console.log("✅ MongoDB connection successful!");
    process.exit(0);
  })
  .catch((err) => {
    console.log("❌ MongoDB connection failed:");
    console.log("Error code:", err.code);
    console.log("Error message:", err.message);
    process.exit(1);
  });
