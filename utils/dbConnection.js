const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();

const dbConnection = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.j7mygn4.mongodb.net/?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Database connection is successful".yellow.bold))
    .catch((err) => console.log(err));
};

module.exports = dbConnection;
