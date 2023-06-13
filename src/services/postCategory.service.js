const { PostCategory } = require('../models');

const create = async (postId, categoryId) => {
  const newPost = await PostCategory.create({ postId, categoryId });

  return newPost;
};

module.exports = {
  create,
};