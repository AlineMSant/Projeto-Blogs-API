module.exports = (req, res, next) => {
  const { email } = req.body;

  if (email === undefined || email.length < 1) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
};