const _ = require('lodash')
const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  const likes = blogs.map(blog => blog.likes)
  return likes.reduce((acc, sum) => acc + sum, 0)
}

const favouriteBlog = (blogs) => {
  if (!blogs || !blogs.length) {
    return {}
  }
  const favourite =  blogs.reduce(
    (prev, current) => (prev && prev.likes > current.likes)
      ? prev
      : current)
  return _.pick(favourite, ['title', 'author', 'likes'])
}

module.exports = {
  dummy, totalLikes, favouriteBlog
}