module.exports = (req, res, next) => {
  const { email } = req.body;
  const re = /\S+@\S+\.\S+/;

  if (!email) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (!re.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  return next();
};