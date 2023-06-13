const { Category } = require('../models');

const getByName = (name) => Category.findOne({ where: { name } });

const create = async (name) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

const getAll = async () => {
  const allCategories = await Category.findAll();

  return allCategories;
};

const getById = async (id) => {
  const category = await Category.findOne({ where: { id } });

  return category;
};

module.exports = {
  getByName,
  create,
  getAll,
  getById,
};