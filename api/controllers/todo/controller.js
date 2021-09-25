// const todos = [
//   {
//     id: 1,
//     task: "Do something",
//     completed: false,
//   },
//   {
//     id: 2,
//     task: "Do something else",
//     completed: true,
//   },
// ];

const Todos = require("../../../models/todo");

const getTodos = async (req, res) => {
  const todo = await Todos.find({});
  res.status(200).send({
    message: "Fetched successfully",
    data: todo,
  });
};

const getTodoById = async (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  // const todo = todos.find((elem) => elem.id == id);
  const todo = await Todos.findOne({});
  console.log("Todos", todo);
  if (!todo) {
    return res.status(404).send({
      message: "todo not found",
      data: {},
    });
  }
  res.status(200).send({
    message: "Fetched successfully",
    data: todo,
  });
};

const createTodo = async (req, res) => {
  // const newTodo = {
  //   id: todos.length + 1,
  //   ...req.body,
  // };
  // todos.push(newTodo);
  const newTodo = new Todos({
    ...req.body,
  });
  await newTodo.save(),
    res.status(201).send({
      message: "User created successfully",
      data: newTodo,
    });
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  // const index = todos.findIndex((elem) => elem.id == id);
  // if (index < 0) {
  //   return res.status(404).send({
  //     message: "User not found",
  //     data: {},
  //   });
  // }
  // todos[index] = {
  //   id: todos[index].id,
  //   ...req.body,
  // };
  const todo = await Todos.findOne({ _id: id });
  if (!todo) {
    return res.status(404).send({
      message: "error not todo",
      data: {},
    });
  }

  const updateTodo = await Todos.updateOne({ _id: id }, { ...res.body });
  res.status(200).send({
    message: "User updated successfully",
    data: updateTodo,
  });
};

const patchTodo = async (req, res) => {
  const action = req.query.action;
  const id = req.params.id;
  // const index = todos.findIndex((elem) => elem.id == id);
  const todo = await Todos.findOne({ _id: id });
  if (!todo) {
    return res.status(404).send({
      message: "User not found",
      data: {},
    });
  }
  switch (action) {
    case "done":
      await Todos.updateOne({ _id: id }, { completed: true });
      break;
    case "undone":
      await Todos.updateOne({ _id: id }, { completed: false });
      break;
    default:
      break;
  }
  res.status(200).send({
    message: "Todo patched successfully",
    data: {},
  });
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;
  // const index = todos.findIndex((elem) => elem.id == id);
  // if (index < 0) {
  //   return res.status(404).send({
  //     message: "User not found",
  //     data: {},
  //   });
  // }
  // todos.splice(index, 1);
  const todo = await Todos.findOne({ _id: id });
  if (!todo) {
    return res.status(404).send({
      message: "error not todo",
      data: {},
    });
  }
  const deletedTodo = await Todos.deleteOne({ _id: id });
  res.status(200).send({
    message: "User deleted successfully",
    data: {},
  });
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  patchTodo,
  deleteTodo,
};
