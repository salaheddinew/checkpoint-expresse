const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const todoRouter = require("./api/controllers/todo/router");
const userRouter = require("./api/controllers/user/router");

const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());
// GET http://localhost:5000/todos/
// POST http://localhost:5000/todos/
app.use("/todos", todoRouter);
app.use("/users", userRouter);

app.listen(5000, () => {
  console.log("listening on http://localhost:5000");
});
