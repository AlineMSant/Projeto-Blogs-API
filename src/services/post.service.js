const { BlogPost, Category, User } = require('../models');

const create = async (title, content, userId, categoryIds) => {
  const categories = categoryIds.map((id) => Category.findOne({ where: { id } }));
  const categoriesResult = await Promise.all(categories);
  const someUndefined = categoriesResult.some((item) => item === null);

  if (someUndefined) return { message: 'one or more "categoryIds" not found' };

  const published = Date.now();
  const updated = Date.now();
  const newPost = await BlogPost.create({ title, content, userId, published, updated });

  return newPost;
};

const getAll = async () => BlogPost.findAll({
  include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
  { model: Category, as: 'categories', through: { attributes: [] } }],
});

const getById = async (id) => {
const blogById = await BlogPost.findOne({
  include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
  { model: Category, as: 'categories', through: { attributes: [] } }],
  where: { id } });

if (!blogById) return { message: 'Post does not exist' };

return blogById;
};

const update = async (id, title, content, userId) => {
  const post = await getById(id);
  if (post.user.id !== userId) return { message: 'Unauthorized user' };

  const updated = await post.update({
    title,
    content,
  });

  return updated;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};