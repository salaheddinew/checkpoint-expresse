const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const todoRouter = require("./api/controllers/todo/router");
const userRouter = require("./api/controllers/user/router");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect("mongodb://localhost:27017/testBase", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.once("open", () => console.log("DataBase connected !!"));

const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());
app.use(cors());
// GET http://localhost:5000/todos/
// POST http://localhost:5000/todos/
app.use("/todos", todoRouter);
app.use("/users", userRouter);

app.listen(5000, () => {
  console.log("listening on http://localhost:5000");
});
