const express = require("express");
const app = express();
const cors = require("cors");


// middleswares
app.use(express.json());
app.use(cors());

// router
const userRouter = require("./routes/user.route");


app.use('/user',userRouter)

app.get("/", (req, res) => {
  res.send("routes is working");
});

module.exports = app;
