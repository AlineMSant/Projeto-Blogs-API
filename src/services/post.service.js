const { BlogPost } = require('../models');

const create = async (title, content, userId) => {
  const published = Date.now();
  const updated = Date.now();
  const newPost = await BlogPost.create({ title, content, userId, published, updated });

  return newPost;
};

module.exports = {
  create,
};