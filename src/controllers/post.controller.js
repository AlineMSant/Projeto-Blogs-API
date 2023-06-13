const { postService, postCategoryService, categoryService } = require('../services');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const categories = categoryIds.map((id) => categoryService.getById(id));
  const categoriesResult = await Promise.all(categories);
  const someUndefined = categoriesResult.some((item) => item === null);

  if (someUndefined) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  const post = await postService.create(title, content, req.user.id);
  await categoryIds.map((categoryId) => postCategoryService
  .create(post.dataValues.id, categoryId));

  return res.status(201).json(post.dataValues);
};

module.exports = {
  create,
};