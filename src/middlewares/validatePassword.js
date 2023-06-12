module.exports = (req, res, next) => {
  const { password } = req.body;

  if (password === undefined || password.length < 1) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
};