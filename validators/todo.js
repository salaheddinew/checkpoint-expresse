const joi = require("joi");

const validatePost = (req, res, next) => {
  const schema = joi.object({
    task: joi.string().required(),
    completed: joi.boolean().required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send({
      message: "Error in todo data",
      error: result.error,
    });
  }
  next();
};

const validatePut = (req, res, next) => {
  const schema = joi.object({
    task: joi.string().required(),
    completed: joi.boolean().required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send({
      message: "Error in todo data",
      error: result.error,
    });
  }
  next();
};

module.exports = {
  validatePut,
  validatePost,
};
