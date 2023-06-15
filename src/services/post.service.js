const { Op } = require('sequelize');
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

const deleteById = async (id, userId) => {
  const post = await getById(id);

  if (post.message) {
    return { type: 404, message: 'Post does not exist' };
  }
  
  if (post.user.id !== userId) {
    return { type: 401, message: 'Unauthorized user' };
  }

  await post.destroy();

  return { type: null };
};

// https://stackoverflow.com/questions/20695062/sequelize-or-condition-object
// https://pt.stackoverflow.com/questions/355872/como-utilizar-o-like-do-sql-no-sequelize
const search = async (q) => {
  if (!q) {
    const allPosts = await getAll();
    return { type: 200, message: allPosts };
  }

  const query = `%${q}%`;

  const postByContent = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
    where: { [Op.or]: [{ content: { [Op.like]: query } }, { title: { [Op.like]: query } }] } });

  if (!postByContent) return { type: 200, message: [] };

  return postByContent;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteById,
  search,
};