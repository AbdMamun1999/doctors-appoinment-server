const dotenv = require("dotenv");
const colors = require("colors");
const dbConnection = require("./utils/dbConnection");

// app
const app = require("./app");

// Database connection
dbConnection();

// server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
