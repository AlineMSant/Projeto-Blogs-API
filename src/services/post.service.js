const { BlogPost, Category } = require('../models');

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

module.exports = {
  create,
};