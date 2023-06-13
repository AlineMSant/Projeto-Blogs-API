const { postService, postCategoryService } = require('../services');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const post = await postService.create(title, content, req.user.id, categoryIds);

  if (post.message) {
    return res.status(400).json({ message: post.message });
  }

  await categoryIds.map((categoryId) => postCategoryService
  .create(post.dataValues.id, categoryId));

  return res.status(201).json(post.dataValues);
};

module.exports = {
  create,
};