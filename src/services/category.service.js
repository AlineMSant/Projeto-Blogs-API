const { Category } = require('../models');

const getByName = (name) => Category.findOne({ where: { name } });

const create = async (name) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

module.exports = {
  getByName,
  create,
};