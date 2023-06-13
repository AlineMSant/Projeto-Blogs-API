const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const userRegistered = await userService.getByEmail(email);

  if (userRegistered) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const user = await userService.create(displayName, email, password, image);

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  return res.status(201).json({ token });
};

const getAll = async (req, res) => {
  const allUsers = await userService.getAll();
  return res.status(200).json(allUsers);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
};

module.exports = {
  create,
  getAll,
  getById,
};
