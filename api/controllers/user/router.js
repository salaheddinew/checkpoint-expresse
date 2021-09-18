const express = require("express");
const controller = require("./controller");
const hourmidlle = require("../../../middlewares/hourMiddle");
const userRouter = express.Router();

userRouter
  .get("/", hourmidlle.verifymorning, controller.getUsers)
  .get("/:id", controller.getUserById)
  .post("/", controller.createUser)
  .put("/:id", controller.updateUser)
  .delete("/:id", controller.deleteUser);

module.exports = userRouter;
