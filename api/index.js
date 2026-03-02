const serverless = require("serverless-http");
const app = require("../app");
const connectDB = require("../src/config/db");

module.exports = async (req, res) => {
  await connectDB();
  return serverless(app)(req, res);
};
