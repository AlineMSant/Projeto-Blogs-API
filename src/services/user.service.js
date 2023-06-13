const { User } = require('../models');

const getByEmail = (email) => User.findOne({ where: { email } });

const create = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });

  return newUser;
};

const getById = (id) => User.findOne({ where: { id }, attributes: { exclude: 'password' } });

const getAll = async () => User.findAll({ attributes: { exclude: 'password' } });

module.exports = {
  getByEmail,
  create,
  getById,
  getAll,
};