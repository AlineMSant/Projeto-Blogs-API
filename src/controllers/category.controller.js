const { categoryService } = require('../services');

const create = async (req, res) => {
  const { name } = req.body;

  await categoryService.create(name);
  const user = await categoryService.getByName(name);

  return res.status(201).json(user);
};

module.exports = {
  create,
};