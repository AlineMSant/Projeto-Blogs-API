const { categoryService } = require('../services');

const create = async (req, res) => {
  const { name } = req.body;

  await categoryService.create(name);
  const category = await categoryService.getByName(name);

  return res.status(201).json(category);
};

const getAll = async (req, res) => {
  const allCategories = await categoryService.getAll();

  return res.status(200).json(allCategories);
};

module.exports = {
  create,
  getAll,
};