const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const userRegistered = await userService.getByEmail(email);
  console.log(userRegistered);

  if (userRegistered) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const user = await userService.create(displayName, email, password, image);

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  res.status(201).json({ token });
};

module.exports = {
  create,
};
