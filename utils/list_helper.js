const logger = require('./logger')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const likes = blogs.map(blog => blog.likes)
  return likes.reduce((acc, sum) => acc + sum, 0)
}

module.exports = {
  dummy, totalLikes
}