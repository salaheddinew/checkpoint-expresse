const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema(
  {
    userId: {
      type: String,
    },
    name: {
      type: String,
    },
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", function (next) {
  this.userId = uuidv4();
  next();
});
userSchema.plugin(uniqueValidator);
const user = mongoose.model("User", userSchema);

module.exports = user;
