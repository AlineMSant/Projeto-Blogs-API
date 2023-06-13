module.exports = (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
};