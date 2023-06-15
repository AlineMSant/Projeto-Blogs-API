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

const getAll = async (req, res) => {
  const allPosts = await postService.getAll();

  return res.status(200).json(allPosts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const postById = await postService.getById(id);

  if (postById.message) return res.status(404).json({ message: postById.message });

  return res.status(200).json(postById);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const updated = await postService.update(id, title, content, req.user.id);

  if (updated.message) return res.status(401).json({ message: updated.message });

  return res.status(200).json(updated);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};