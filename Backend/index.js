const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// const userRouter = require("./Routes/UserRoutes");
const userRouter = require("./Routes/UserRoutes");

const app = express();
app.use(express.json());
dotenv.config();
require("./DB/index");

const corsOptions = {
  origin: process.env.FRONT_END_URL,
  optionsSuccessStatus: 200,
};

app.use(cors());

app.use(userRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("App started at", port);
});
