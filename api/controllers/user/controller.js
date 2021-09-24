const User = require("../../../models/user");

const getUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).send({
    message: "Fetched successfully",
    data: users,
  });
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  // const user = users.find((elem) => elem.id == id);
  console.log("id", id);
  const user = await User.findOne({ _id: id });
  console.log("user", user);
  if (!user) {
    return res.status(404).send({
      message: "User not found",
      data: {},
    });
  }
  res.status(200).send({
    message: "Fetched successfully",
    data: user,
  });
};

const createUser = async (req, res) => {
  // const newUser = {
  //   id: users.length + 1,
  //   ...req.body,
  // };
  // users.push(newUser);

  try {
    const newUser = new User({
      ...req.body,
    });
    await newUser.save();
    res.status(201).send({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.log("message :", error.message);
    res.status(500).send({
      message: "server error",
      data: {},
    });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  // const index = users.findIndex((elem) => elem.id == id);
  // if (index < 0) {
  //   return res.status(404).send({
  //     message: "User not found",
  //     data: {},
  //   });
  // }
  // users[index] = {
  //   id: users[index].id,
  //   ...req.body,
  // };
  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.status(404).send({
      message: "User not found",
      data: {},
    });
  }
  const updatedUser = await User.updateOne(
    { _id: id },
    {
      ...req.body,
    }
  );
  res.status(200).send({
    message: "User updated successfully",
    data: updatedUser,
  });
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  // const index = users.findIndex((elem) => elem.id == id);
  // if (index < 0) {
  //   return res.status(404).send({
  //     message: "User not found",
  //     data: {},
  //   });
  // }
  // users.splice(index, 1);
  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.status(404).send({
      message: "User not found",
      data: {},
    });
  }
  const deletedUser = await User.deleteOne({ _id: id });
  res.status(200).send({
    message: "User deleted successfully",
    data: {},
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
