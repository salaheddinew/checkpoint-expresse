const express = require("express");
const controller = require("./controller");
const hourmidlle = require("../../../middlewares/hourMiddle");
const userRouter = express.Router();
const validator = require("../../../validators/user");

userRouter
  .get("/", /*hourmidlle.verifymorning,*/ controller.getUsers)
  .get("/:id", controller.getUserById)
  .post("/", validator.validatePost, controller.createUser)
  .put("/:id", validator.validatePut, controller.updateUser)
  .delete("/:id", controller.deleteUser);

module.exports = userRouter;
