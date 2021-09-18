const verifymorning = (req, res, next) => {
  const date = new Date();
  const hour = date.getHours();
  console.log(hour);
  if (8 <= hour && hour <= 11) {
    return next();
  }
  return res.status(400).send({
    message: "we are closed",
    date: {},
  });
};

module.exports = { verifymorning };
