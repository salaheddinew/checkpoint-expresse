const express = require("express");
const controller = require("./controller");
const validator = require("../../../validators/todo");
const todoRouter = express.Router();

todoRouter
  .get("/", controller.getTodos)
  .get("/:id", controller.getTodoById)
  .post("/", validator.validatePost, controller.createTodo)
  .put("/:id", validator.validatePut, controller.updateTodo)
  .patch("/:id", controller.patchTodo)
  .delete("/:id", controller.deleteTodo);

module.exports = todoRouter;
